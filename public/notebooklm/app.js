import { removeWatermarkFromCanvas } from './core.js';

const { createApp, ref, computed, nextTick, watch, shallowRef } = Vue;

createApp({
    setup() {
        const files = ref([]);
        const isProcessing = ref(false);
        const fileInput = ref(null);
        const currentTab = ref('image');

        // PDF 专属状态
        // 使用 shallowRef 避免 Vue Proxy 代理 PDF.js 的复杂对象，
        // 从而解决 "Cannot read private member" 错误
        const pdfFile = shallowRef(null);
        const pdfDoc = shallowRef(null);
        
        const currentPage = ref(1);
        const totalPages = ref(0);
        const processedPages = ref(new Map()); // 存储已处理页面的 Image DataURL
        const showProcessed = ref(false); // 切换视图模式
        const pdfCanvas = ref(null);
        const processProgress = ref(0);
        const processedPdfUrl = ref(null);
        const downloadName = ref('');
        const promoTargetUrl = 'https://lazyso.com/labs/?from=watermark_widget';

        const triggerLazyPromo = (targetUrl = promoTargetUrl) => {
            if (typeof window.showLazyPromo !== 'function') return;
            window.showLazyPromo(targetUrl);
        };

        const tabName = computed(() => {
            const map = {
                'image': '图片',
                'pdf': 'PDF'
            };
            return map[currentTab.value];
        });

        const acceptTypes = computed(() => {
            const map = {
                'image': 'image/png,image/jpeg,image/webp',
                'pdf': '.pdf'
            };
            return map[currentTab.value];
        });

        const hasFile = computed(() => {
            if (currentTab.value === 'pdf') return !!pdfFile.value;
            return files.value.length > 0;
        });

        // 监听 canvas 出现，确保渲染
        watch(pdfCanvas, (newVal) => {
            if (newVal && pdfDoc.value) {
                renderCurrentPage();
            }
        });

        const switchTab = (tab) => {
            currentTab.value = tab;
            clearAll();
        };

        const statusText = (status) => {
            const map = {
                'pending': '等待中',
                'processing': '处理中',
                'completed': '完成',
                'error': '失败'
            };
            return map[status] || status;
        };

        const triggerUpload = () => {
            fileInput.value.click();
        };

        const handleFileChange = (event) => {
            const selectedFiles = Array.from(event.target.files);
            addFiles(selectedFiles);
            event.target.value = ''; // Reset input
        };

        const handleDrop = (event) => {
            const droppedFiles = Array.from(event.dataTransfer.files);
            const validFiles = droppedFiles.filter(f => {
                if (currentTab.value === 'image') return f.type.startsWith('image/');
                if (currentTab.value === 'pdf') return f.type === 'application/pdf';
                return false;
            });
            if (validFiles.length < droppedFiles.length) {
                alert(`请上传 ${tabName.value} 格式的文件`);
            }
            addFiles(validFiles);
        };

        const addFiles = (newFiles) => {
            if (currentTab.value === 'pdf') {
                if (newFiles.length > 0) {
                    loadPdf(newFiles[0]);
                }
            } else {
                newFiles.forEach(async (file) => {
                    const fileObj = {
                        id: Date.now() + Math.random(),
                        file: file,
                        name: file.name,
                        status: 'pending',
                        type: currentTab.value,
                        previewUrl: null,
                        resultUrl: null,
                        progress: 0,
                        downloadName: null
                    };

                    if (fileObj.type === 'image') {
                        fileObj.previewUrl = URL.createObjectURL(file);
                    }
                    files.value.push(fileObj);
                });
            }
        };

        const clearAll = () => {
            files.value.forEach(f => {
                if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
                if (f.resultUrl) URL.revokeObjectURL(f.resultUrl);
            });
            files.value = [];
            
            pdfFile.value = null;
            pdfDoc.value = null;
            currentPage.value = 1;
            totalPages.value = 0;
            processedPages.value.clear();
            showProcessed.value = false;
            processedPdfUrl.value = null;
            downloadName.value = '';
        };

        // --- PDF 逻辑 ---

        const ensurePdfJsLoaded = async () => {
            if (window.pdfjsLib) {
                if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
                     window.pdfjsLib.GlobalWorkerOptions.workerSrc = '/notebooklm/libs/pdf.worker.min.js';
                }
                return;
            }
            await loadScript('/notebooklm/libs/pdf.min.js');
            if (window.pdfjsLib) {
                window.pdfjsLib.GlobalWorkerOptions.workerSrc = '/notebooklm/libs/pdf.worker.min.js';
            } else {
                throw new Error("PDF.js 加载失败");
            }
        };

        const ensureJsPdfLoaded = async () => {
            if (window.jspdf) return;
            try {
                await loadScript('/notebooklm/libs/jspdf.umd.min.js');
            } catch (e) {
                console.warn("Local jsPDF load failed, trying CDN", e);
                await loadScript('https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js');
            }
            if (!window.jspdf) throw new Error("jsPDF 加载失败");
        };

        const loadPdf = async (file) => {
            try {
                await ensurePdfJsLoaded();
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await window.pdfjsLib.getDocument(arrayBuffer).promise;
                
                pdfFile.value = file;
                pdfDoc.value = pdf; // shallowRef assigned here
                totalPages.value = pdf.numPages;
                currentPage.value = 1;
                processedPages.value.clear();
                showProcessed.value = false;
                downloadName.value = "processed_" + file.name;
                
                await nextTick();
                if (pdfCanvas.value) {
                    renderCurrentPage();
                }
            } catch (e) {
                console.error("PDF Load Error", e);
                alert("PDF 加载失败: " + e.message);
            }
        };

        const renderCurrentPage = async () => {
            if (!pdfDoc.value || !pdfCanvas.value) {
                console.log("Canvas or Doc not ready");
                return;
            }

            const pageNum = currentPage.value;
            const canvas = pdfCanvas.value;
            const ctx = canvas.getContext('2d');

            if (showProcessed.value && processedPages.value.has(pageNum)) {
                const img = new Image();
                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                };
                img.src = processedPages.value.get(pageNum);
                return;
            }

            try {
                const page = await pdfDoc.value.getPage(pageNum);
                const viewport = page.getViewport({ scale: 1.5 });

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: ctx, viewport: viewport }).promise;
            } catch (e) {
                console.error("Render Error", e);
            }
        };

        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
                renderCurrentPage();
            }
        };

        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
                renderCurrentPage();
            }
        };

        const toggleViewMode = () => {
            if (!processedPages.value.has(currentPage.value) && !showProcessed.value) {
                alert("当前页尚未处理，无法显示处理后内容");
                return;
            }
            showProcessed.value = !showProcessed.value;
            renderCurrentPage();
        };

        const processCurrentPage = async () => {
            if (isProcessing.value) return;
            isProcessing.value = true;
            processProgress.value = 0;

            try {
                const pageNum = currentPage.value;
                const page = await pdfDoc.value.getPage(pageNum);
                const viewport = page.getViewport({ scale: 1.5 });
                
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const ctx = canvas.getContext('2d');
                
                await page.render({ canvasContext: ctx, viewport: viewport }).promise;
                removeWatermarkFromCanvas(canvas);
                
                const imgData = canvas.toDataURL('image/jpeg', 0.9);
                processedPages.value.set(pageNum, imgData);
                
                showProcessed.value = true;
                await renderCurrentPage();
                triggerLazyPromo();
                
            } catch (e) {
                console.error(e);
                alert("处理失败: " + e.message);
            } finally {
                isProcessing.value = false;
            }
        };

        const processAllPages = async () => {
            if (isProcessing.value) return;
            isProcessing.value = true;
            
            try {
                await ensurePdfJsLoaded();
                await ensureJsPdfLoaded();
                
                const { jsPDF } = window.jspdf;

                const firstPage = await pdfDoc.value.getPage(1);
                const firstViewport = firstPage.getViewport({ scale: 1.0 });
                const orientation = firstViewport.width > firstViewport.height ? "landscape" : "portrait";
                
                const newPdf = new jsPDF({
                    orientation: orientation,
                    unit: "px",
                    format: [firstViewport.width, firstViewport.height],
                    hotfixes: ["px_scaling"]
                });

                const total = totalPages.value;

                for (let i = 1; i <= total; i++) {
                    processProgress.value = Math.round(((i - 1) / total) * 100);
                    
                    let imgData;
                    
                    if (processedPages.value.has(i)) {
                        imgData = processedPages.value.get(i);
                    } else {
                        const page = await pdfDoc.value.getPage(i);
                        const viewport = page.getViewport({ scale: 1.5 });
                        
                        const canvas = document.createElement('canvas');
                        canvas.width = viewport.width;
                        canvas.height = viewport.height;
                        const ctx = canvas.getContext('2d');
                        
                        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
                        
                        removeWatermarkFromCanvas(canvas);
                        imgData = canvas.toDataURL('image/jpeg', 0.9);
                        processedPages.value.set(i, imgData);
                    }

                    const page = await pdfDoc.value.getPage(i);
                    const originalViewport = page.getViewport({ scale: 1.0 });

                    if (i > 1) {
                        const pageOrientation = originalViewport.width > originalViewport.height ? "landscape" : "portrait";
                        newPdf.addPage([originalViewport.width, originalViewport.height], pageOrientation);
                    }
                    
                    const w = Number(originalViewport.width);
                    const h = Number(originalViewport.height);
                    
                    newPdf.addImage(imgData, 'JPEG', 0, 0, w, h, undefined, "FAST");
                }

                processProgress.value = 100;
                const pdfBlob = newPdf.output('blob');
                processedPdfUrl.value = URL.createObjectURL(pdfBlob);
                
                showProcessed.value = true;
                await renderCurrentPage();
                triggerLazyPromo();

            } catch (e) {
                console.error("Process All Error:", e);
                alert("全量处理失败: " + e.message);
            } finally {
                isProcessing.value = false;
            }
        };

        // --- 视频/图片处理 ---
        const processAll = async () => {
            if (isProcessing.value) return;
            isProcessing.value = true;
            let completedCount = 0;

            for (let i = 0; i < files.value.length; i++) {
                const file = files.value[i];
                if (file.status === 'completed' || file.status === 'processing') continue;

                file.status = 'processing';
                try {
                    if (file.type === 'image') {
                        await processImage(file);
                    }
                    file.status = 'completed';
                    completedCount++;
                } catch (e) {
                    console.error(e);
                    file.status = 'error';
                    alert(`处理失败: ${e.message}`);
                }
            }

            isProcessing.value = false;
            if (completedCount > 0) {
                triggerLazyPromo();
            }
        };

        const processImage = async (fileObj) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    removeWatermarkFromCanvas(canvas);
                    canvas.toBlob((blob) => {
                        fileObj.resultUrl = URL.createObjectURL(blob);
                        fileObj.downloadName = 'unwatermarked_' + fileObj.name.replace(/\.[^.]+$/, "") + ".png";
                        resolve();
                    }, "image/png");
                };
                img.onerror = reject;
                img.src = fileObj.previewUrl;
            });
        };

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        // --- 下拉菜单与模态框逻辑 ---
        const toolsMenuOpen = ref(false);
        const modalOpen = ref(false);
        const copySuccess = ref(false);

        const toggleTools = () => {
            toolsMenuOpen.value = !toolsMenuOpen.value;
        };

        const openModal = () => {
            modalOpen.value = true;
            toolsMenuOpen.value = false;
        };

        const closeModal = () => {
            modalOpen.value = false;
        };

        const copyWx = async () => {
            try {
                await navigator.clipboard.writeText('lazyhelper1');
                copySuccess.value = true;
                setTimeout(() => {
                    copySuccess.value = false;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                alert('复制失败，请手动复制：lazyhelper1');
            }
        };

        let closeTimer = null;
        const handleMouseEnter = () => {
            if (closeTimer) clearTimeout(closeTimer);
            toolsMenuOpen.value = true;
        };

        const handleMouseLeave = () => {
            closeTimer = setTimeout(() => {
                toolsMenuOpen.value = false;
            }, 150);
        };

        return {
            files,
            isProcessing,
            fileInput,
            currentTab,
            tabName,
            acceptTypes,
            hasFile,
            switchTab,
            statusText,
            triggerUpload,
            handleFileChange,
            handleDrop,
            clearAll,
            processAll,
            
            pdfFile,
            currentPage,
            totalPages,
            processedPdfUrl,
            downloadName,
            processProgress,
            showProcessed,
            pdfCanvas,
            prevPage,
            nextPage,
            toggleViewMode,
            processCurrentPage,
            processAllPages,

            // Dropdown & Modal
            toolsMenuOpen,
            modalOpen,
            copySuccess,
            toggleTools,
            openModal,
            closeModal,
            copyWx,
            handleMouseEnter,
            handleMouseLeave
        };
    }
}).mount('#app');
