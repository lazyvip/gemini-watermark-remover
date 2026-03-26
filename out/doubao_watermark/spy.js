const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized', '--no-sandbox', '--disable-setuid-sandbox'] // Added sandbox args
    });

    const page = await browser.newPage();

    // Pass console logs from browser to Node.js process
    page.on('console', msg => {
        const text = msg.text();
        // Only print relevant logs to keep output clean, or print all?
        // User wants to see [Trae Spy] logs.
        if (text.includes('[Trae Spy]') || text.includes('Input Name') || text.includes('TYPE:') || text.includes('DIMS:') || text.includes('SAMPLE DATA')) {
            console.log(`[BROWSER] ${text}`);
        }
    });

    console.log('Opening target website...');
    await page.goto('https://clearcat.lingxiangtools.top/', { waitUntil: 'networkidle0' });

    console.log('Injecting hook code...');
    await page.evaluate(() => {
        (() => {
            // 轮询检测 window.ort 是否就绪
            const checkOrt = setInterval(() => {
                if (window.ort && window.ort.InferenceSession && window.ort.InferenceSession.prototype.run) {
                    clearInterval(checkOrt);
                    console.log("✅ [Trae Spy] ORT Detected! Hooking...");
   
                    const originalRun = window.ort.InferenceSession.prototype.run;
                    
                    // 覆盖 run 方法
                    window.ort.InferenceSession.prototype.run = async function(feeds, ...args) {
                        console.log("🕵️ [Trae Spy] Model Inference Triggered!");
                        
                        // 遍历输入 Feeds
                        for (const [name, tensor] of Object.entries(feeds)) {
                            console.log(`--- Input Name: ${name} ---`);
                            console.log(`TYPE: ${tensor.type}`); // 关键点：uint8 还是 float32?
                            console.log(`DIMS: ${JSON.stringify(tensor.dims)}`); // 关键点：NHWC 还是 NCHW?
                            
                            // 打印前几个像素值作为样本
                            if (tensor.data && tensor.data.length > 0) {
                                console.log(`SAMPLE DATA:`, Array.from(tensor.data.slice(0, 10)));
                            }
                        }
                        
                        // 继续执行原逻辑
                        return originalRun.apply(this, [feeds, ...args]);
                    };
                }
            }, 500);
        })();
    });

    console.log('Environment ready! Waiting for user interaction...');
    
    // Keep the script running
    await new Promise(() => {}); 

  } catch (err) {
    console.error('Error:', err);
  }
})();
