import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 简单的 PNG 尺寸读取
function getPNGDimensions(buffer) {
    if (buffer.length < 24) return null;
    const signature = buffer.slice(0, 8);
    const expectedSignature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    if (!signature.equals(expectedSignature)) return null;
    const ihdrData = buffer.slice(16, 29);
    const width = ihdrData.readUInt32BE(0);
    const height = ihdrData.readUInt32BE(4);
    return { width, height };
}

// 更新后的水印检测规则
function detectWatermarkConfig(imageWidth, imageHeight) {
    if (imageWidth > 1024 && imageHeight > 1024) {
        return {
            logoSize: 96,
            marginRight: 64,
            marginBottom: 64
        };
    } else {
        return {
            logoSize: 48,
            marginRight: 96,  // Updated
            marginBottom: 95  // Updated
        };
    }
}

function calculateWatermarkPosition(imageWidth, imageHeight, config) {
    const { logoSize, marginRight, marginBottom } = config;
    return {
        x: imageWidth - marginRight - logoSize,
        y: imageHeight - marginBottom - logoSize,
        width: logoSize,
        height: logoSize
    };
}

// 验证更新
const testImagePath = path.join(process.cwd(), 'test', '微信图片_20260608152411_1696_10.png');

console.log('=== 验证更新后的水印检测规则 ===\n');

try {
    const buffer = fs.readFileSync(testImagePath);
    const dimensions = getPNGDimensions(buffer);

    if (dimensions) {
        console.log('图片尺寸:', `${dimensions.width} × ${dimensions.height}`);
        console.log('');

        const config = detectWatermarkConfig(dimensions.width, dimensions.height);
        const position = calculateWatermarkPosition(dimensions.width, dimensions.height, config);

        console.log('更新后的检测规则:');
        console.log(`  水印尺寸: ${config.logoSize} × ${config.logoSize}`);
        console.log(`  右边距: ${config.marginRight}px`);
        console.log(`  下边距: ${config.marginBottom}px`);
        console.log('');

        console.log('检测到的水印位置:');
        console.log(`  X: ${position.x}`);
        console.log(`  Y: ${position.y}`);
        console.log('');

        // 根据用户反馈的实际位置
        const actualX = 1232;
        const actualY = 625;

        console.log('实际水印位置（根据用户反馈）:');
        console.log(`  X: ${actualX}`);
        console.log(`  Y: ${actualY}`);
        console.log('');

        const diffX = position.x - actualX;
        const diffY = position.y - actualY;

        console.log('位置差异:');
        console.log(`  X 差异: ${diffX}px ${diffX === 0 ? '✓ 正确' : '✗ 错误'}`);
        console.log(`  Y 差异: ${diffY}px ${diffY === 0 ? '✓ 正确' : '✗ 错误'}`);
        console.log('');

        if (diffX === 0 && diffY === 0) {
            console.log('✓✓✓ 更新成功！水印位置检测正确！✓✓✓');
        } else {
            console.log('✗✗✗ 更新失败！水印位置仍有偏差 ✗✗✗');
        }
    }
} catch (error) {
    console.error('验证失败:', error.message);
}
