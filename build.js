import * as esbuild from 'esbuild';
import { cpSync, rmSync, existsSync, mkdirSync, watch } from 'node:fs';
import { createRequire } from 'node:module';
import { execSync } from 'child_process';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';

let _commitHash = null;
const getCommitHash = () => {
  if (_commitHash) return _commitHash;
  try {
    _commitHash = execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    _commitHash = 'unknown';
  }
  return _commitHash;
};

const jsBanner = `/*!
 * ${pkg.name} v${pkg.version}+${getCommitHash()}
 * ${pkg.description}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * ${pkg.repository.url?.replace(/\.git$/, '')}
 * Released under the ${pkg.license} License.
 */`;

const userscriptBanner = `// ==UserScript==
// @name         Gemini NanoBanana Watermark Remover
// @name:zh-CN   Gemini NanoBanana 图片水印移除
// @namespace    https://github.com/journey-ad
// @version      0.1.6
// @description  Automatically removes watermarks from Gemini AI generated images
// @description:zh-CN 自动移除 Gemini AI 生成图像中的水印
// @icon         https://www.google.com/s2/favicons?domain=gemini.google.com
// @author       journey-ad
// @license      MIT
// @match        https://gemini.google.com/*
// @connect      googleusercontent.com
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// ==/UserScript==
`;

const syncDoubaoRouteIndexes = () => {
  if (!existsSync('dist/doubao_watermark')) mkdirSync('dist/doubao_watermark', { recursive: true });
  cpSync('doubao_watermark/demo.html', 'dist/doubao_watermark/index.html');
  if (!existsSync('dist/manual-inpaint')) mkdirSync('dist/manual-inpaint', { recursive: true });
  cpSync('doubao_watermark/manual-inpaint.html', 'dist/manual-inpaint/index.html');
};

const copyAssetsPlugin = {
  name: 'copy-assets',
  setup(build) {
    build.onEnd(() => {
      console.log('📂 Syncing static assets...');
      try {
        if (!existsSync('dist/i18n')) mkdirSync('dist/i18n', { recursive: true });
        cpSync('src/i18n', 'dist/i18n', { recursive: true });
        cpSync('public', 'dist', { recursive: true });
        if (!existsSync('dist/doubao_watermark')) mkdirSync('dist/doubao_watermark', { recursive: true });
        cpSync('doubao_watermark', 'dist/doubao_watermark', { recursive: true });
        syncDoubaoRouteIndexes();
      } catch (err) {
        console.error('❌ Asset copy failed:', err);
      }
    });
  },
};

const commonConfig = {
  bundle: true,
  loader: { '.png': 'dataurl' },
  minify: isProd,
  logLevel: 'info',
};

// Build website - app.js
const websiteCtx = await esbuild.context({
  ...commonConfig,
  entryPoints: ['src/app.js'],
  outfile: 'dist/app.js',
  platform: 'browser',
  target: ['es2020'],
  banner: { js: jsBanner },
  sourcemap: !isProd,
  plugins: [copyAssetsPlugin],
});

// Build userscript
const userscriptCtx = await esbuild.context({
  ...commonConfig,
  entryPoints: ['src/userscript/index.js'],
  format: 'iife',
  outfile: 'dist/userscript/gemini-watermark-remover.user.js',
  banner: { js: userscriptBanner },
  minify: false
});

console.log(`🚀 Starting build process... [${isProd ? 'PRODUCTION' : 'DEVELOPMENT'}]`);

if (existsSync('dist')) rmSync('dist', { recursive: true });
mkdirSync('dist/userscript', { recursive: true });
  
if (isProd) {
  await Promise.all([websiteCtx.rebuild(), userscriptCtx.rebuild()]);
  console.log('✅ Build complete!');
  process.exit(0);
} else {
  await Promise.all([websiteCtx.watch(), userscriptCtx.watch()]);

  const watchDir = (dir, dest) => {
    let debounceTimer = null;

    watch(dir, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      if (debounceTimer) clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        console.log(`📂 Asset changed: ${filename}`);
        try {
          cpSync(dir, dest, { recursive: true });
          if (dir === 'doubao_watermark') {
            syncDoubaoRouteIndexes();
          }
        } catch (e) {
          console.error('Sync failed:', e);
        }
      }, 100);
    });
  };
  watchDir('src/i18n', 'dist/i18n');
  watchDir('public', 'dist');
  watchDir('doubao_watermark', 'dist/doubao_watermark');

  console.log('👀 Watching for changes...');
}
