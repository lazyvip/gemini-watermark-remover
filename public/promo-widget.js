(() => {
  if (!window.Vue || document.getElementById('promo-widget-root')) {
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

  const root = document.createElement('div');
  root.id = 'promo-widget-root';
  document.body.appendChild(root);

  const { createApp, onMounted, onBeforeUnmount, ref } = window.Vue;

  createApp({
    setup() {
      const isVisible = ref(false);
      let hasShown = false;
      const triggerEventName = 'lazyso:promo-ready';
      const showWidget = () => {
        if (hasShown) return;
        hasShown = true;
        requestAnimationFrame(() => {
          isVisible.value = true;
        });
      };
      const handleTrigger = () => {
        showWidget();
      };
      onMounted(() => {
        window.addEventListener(triggerEventName, handleTrigger);
        window.showPromoWidget = showWidget;
      });
      onBeforeUnmount(() => {
        window.removeEventListener(triggerEventName, handleTrigger);
        if (window.showPromoWidget === showWidget) {
          delete window.showPromoWidget;
        }
      });
      return { isVisible };
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
              @click="isVisible = false"
            >
              ✕
            </button>
            <h3 class="pr-8 text-sm font-bold text-white">🔥 别光顾着去水印了，看看别人怎么用 AI 搞钱？</h3>
            <p class="mt-2 text-xs text-gray-300 leading-relaxed">
              你在这处理水印，别人已经把这套流程跑通变现了。LazySo内部社群已更新本周【AI 视频/自媒体矩阵】的最新变现 SOP 与对标账号。别只做无情的做号机器，来看看底层的商业逻辑。
            </p>
            <a
              href="https://lazyso.com/labs/?from=watermark_widget"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex w-full items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]"
            >
              👉 免费查阅本周实操案例
            </a>
          </div>
        </div>
      </Transition>
    `
  }).mount(root);
})();
