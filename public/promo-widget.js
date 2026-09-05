(() => {
  if (!window.Vue) {
    return;
  }

  const styleId = 'promo-widget-animation-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .slide-up-fade-enter-active,.slide-up-fade-leave-active{transition:all .35s ease;}
      .slide-up-fade-enter-from,.slide-up-fade-leave-to{opacity:0;transform:translateY(20px);}
    `;
    document.head.appendChild(style);
  }

  if (document.getElementById('promo-widget-root')) {
    return;
  }
  const root = document.createElement('div');
  root.id = 'promo-widget-root';
  document.body.appendChild(root);

  const { createApp, onBeforeUnmount, ref } = window.Vue;
  const defaultUrl = 'https://lazyso.com/labs/?from=watermark_widget';

  // ── 频次控制：单次访问最多展示 2 次；用户手动关闭后 24h 内不再打扰 ──
  // 打扰式弹出是转化率杀手：先让用户拿到成果，再给一次有质量的曝光。
  const DISMISS_KEY = 'lazypromo_dismissed_at';
  const DISMISS_COOLDOWN_MS = 24 * 3600 * 1000;
  const MAX_SHOWS_PER_PAGEVIEW = 2;
  let sessionShows = 0;

  const isEnglish = (document.documentElement.lang || '').toLowerCase().startsWith('en');
  const hooks = isEnglish
    ? [
        { t: '🔥 Done cleaning. Want to see how others monetize AI?', p: 'LazySo Digest breaks down real monetization cases every day — with step-by-step playbooks. Free to read.', c: '👉 Read today\'s cases' },
        { t: '💡 Same AI, different results', p: 'Some people turn this exact workflow into income. See how — real cases, real numbers, free.', c: '👉 Browse the digest' }
      ]
    : [
        { t: '🔥 图弄干净了，下一步发哪？', p: '懒人情报站每天更新真实变现案例拆解：小红书、AI 工具站、虚拟资料……看完再动手，少走两周弯路。', c: '👉 免费看今日情报' },
        { t: '💡 同样用 AI，有人已经拿来接单赚钱', p: '懒人情报站：每天 1~3 条真实商业案例，含完整实操步骤，免费阅读。', c: '👉 看今天的案例' }
      ];

  window.showLazyPromo = (targetUrl, opts = {}) => {
    if (!promoApi) {
      return;
    }
    try {
      const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
      if (dismissedAt && Date.now() - dismissedAt < DISMISS_COOLDOWN_MS) {
        return; // 用户近期手动关闭过，别烦人
      }
    } catch (e) { /* localStorage 不可用时跳过频控 */ }
    if (sessionShows >= MAX_SHOWS_PER_PAGEVIEW) {
      return;
    }
    sessionShows += 1;
    if (typeof targetUrl === 'string' && targetUrl.trim()) {
      promoApi.ctaUrl.value = targetUrl.trim();
    }
    // 换一条文案，避免看腻
    promoApi.hook.value = hooks[(sessionShows - 1) % hooks.length];
    // 默认延迟 1.2s：先让用户看到处理成果，再滑入推荐
    const delay = Number(opts.delay ?? 1200);
    setTimeout(() => {
      if (promoApi) {
        promoApi.isVisible.value = true;
      }
    }, delay);
  };

  createApp({
    setup() {
      const isVisible = ref(false);
      const ctaUrl = ref(defaultUrl);
      const hook = ref(hooks[0]);

      promoApi = { isVisible, ctaUrl, hook };

      const dismiss = () => {
        isVisible.value = false;
        try {
          localStorage.setItem(DISMISS_KEY, String(Date.now()));
        } catch (e) { /* ignore */ }
      };

      onBeforeUnmount(() => {
        promoApi = null;
      });
      return { isVisible, ctaUrl, hook, dismiss };
    },
    template: `
      <Transition name="slide-up-fade">
        <div
          v-if="isVisible"
          class="fixed z-[100] bottom-6 left-4 right-4 md:bottom-8 md:right-8 md:left-auto md:w-[320px] pointer-events-none"
        >
          <div class="pointer-events-auto relative rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl p-5">
            <button
              type="button"
              class="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
              @click="dismiss"
            >
              ✕
            </button>
            <h3 class="pr-8 text-sm font-bold text-white">{{ hook.t }}</h3>
            <p class="mt-2 text-xs text-gray-300 leading-relaxed">
              {{ hook.p }}
            </p>
            <a
              :href="ctaUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex w-full items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold text-white bg-gradient-to-r from-[#d97757] to-[#6a9bcc] transition-transform hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(217,119,87,0.45)]"
            >
              {{ hook.c }}
            </a>
          </div>
        </div>
      </Transition>
    `
  }).mount(root);
})();
