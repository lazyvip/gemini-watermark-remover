/**
 * MarkCut NotebookLM 去水印核心逻辑还原
 * 基于逆向分析 https://markcut.com/zh/notebooklm 的前端代码
 */

// 辅助函数：限制数值范围
const clamp = (val, min, max) => Math.min(max, Math.max(min, val));

/**
 * 计算水印位置参数
 * @param {number} width - 图像宽度
 * @param {number} height - 图像高度
 * @returns {Object} 水印区域配置
 */
function getWatermarkParams(width, height) {
    let minDim = Math.min(width, height);
    
    // 从源码还原的参数计算逻辑
    // width: 水印宽度
    // height: 水印高度
    // offsetX, offsetY: 距离右下角的偏移
    // blendRadius: 边缘融合半径
    const params = {
        width: clamp(Math.round(0.2 * width), 140, 520),
        height: clamp(Math.round(0.07 * height), 60, 200),
        offsetX: clamp(Math.round(0.01 * width), 0, 60),
        offsetY: clamp(Math.round(0.01 * height), 0, 60),
        blendRadius: clamp(Math.round(0.012 * minDim), 4, 24)
    };

    // 计算具体的矩形区域 (x, y, w, h)
    // 源码逻辑：n={x:Math.max(0,t-a.width-a.offsetX),y:Math.max(0,r-a.height-a.offsetY),w:a.width,h:a.height}
    const rect = {
        x: Math.max(0, width - params.width - params.offsetX),
        y: Math.max(0, height - params.height - params.offsetY),
        w: params.width,
        h: params.height
    };

    return { params, rect };
}

/**
 * 创建水印掩码
 * @param {number} width - 图像宽度
 * @param {number} height - 图像高度
 * @param {Object} rect - 水印矩形区域 {x, y, w, h}
 * @param {number} blendRadius - 融合半径
 * @returns {Uint8Array} 掩码数组 (1 表示水印区域)
 */
function createMask(width, height, rect, blendRadius) {
    const { x, y, w, h } = rect;
    const mask = new Uint8Array(width * height);
    // 源码中还计算了 featherWeight，但在核心修复算法中似乎主要使用了二值 mask
    // 这里简化还原掩码生成
    
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let idx = r * width + c;
            // 判断像素是否在水印矩形内
            if (c >= x && c < x + w && r >= y && r < y + h) {
                mask[idx] = 1;
            }
        }
    }
    return mask;
}

/**
 * 图像修复算法 (Telea-like Diffusion)
 * 源码中对应的函数可能是 ed
 * @param {ImageData} imageData - 原始图像数据
 * @param {Uint8Array} mask - 水印掩码
 * @param {number} width - 图像宽度
 * @param {number} height - 图像高度
 * @param {number} iterations - 迭代次数，默认 100
 * @returns {ImageData} 修复后的图像数据
 */
function inpaint(imageData, mask, width, height, iterations = 100) {
    const { data } = imageData;
    
    // 使用 Float32Array 进行高精度计算
    let buffer = new Float32Array(data.length);
    for (let i = 0; i < data.length; i++) buffer[i] = data[i];

    // 迭代修复
    for (let i = 0; i < iterations; i++) {
        // 复制上一轮的数据
        let prevBuffer = new Float32Array(buffer);
        
        // 遍历像素 (跳过边界)
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                let idx = y * width + x;
                
                // 如果是水印区域
                if (mask[idx]) {
                    let pixelOffset = 4 * idx;
                    
                    // 对 RGB 通道进行平滑 (取上下左右邻居的平均值)
                    for (let c = 0; c < 3; c++) {
                        let up = ((y - 1) * width + x) * 4 + c;
                        let down = ((y + 1) * width + x) * 4 + c;
                        let right = (y * width + (x + 1)) * 4 + c;
                        let left = (y * width + (x - 1)) * 4 + c;
                        
                        // 扩散核心公式
                        buffer[pixelOffset + c] = (
                            prevBuffer[up] + 
                            prevBuffer[down] + 
                            prevBuffer[right] + 
                            prevBuffer[left]
                        ) / 4;
                    }
                    // Alpha 通道保持不透明
                    buffer[pixelOffset + 3] = 255; 
                }
            }
        }
    }
    
    // 将结果转换回 Uint8ClampedArray
    let resultData = new Uint8ClampedArray(buffer.length);
    for (let i = 0; i < buffer.length; i++) {
        resultData[i] = Math.max(0, Math.min(255, Math.round(buffer[i])));
    }
    
    return new ImageData(resultData, width, height);
}

/**
 * 主处理函数示例
 */
function removeWatermark(canvas) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 1. 获取水印位置
    const { params, rect } = getWatermarkParams(width, height);
    
    // 2. 获取图像数据
    const imageData = ctx.getImageData(0, 0, width, height);
    
    // 3. 创建掩码
    const mask = createMask(width, height, rect, params.blendRadius);
    
    // 4. 执行修复
    const repairedImageData = inpaint(imageData, mask, width, height);
    
    // 5. 绘制回 Canvas
    ctx.putImageData(repairedImageData, 0, 0);
}

// 导出模块 (如果是在 Node 环境)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getWatermarkParams,
        createMask,
        inpaint,
        removeWatermark
    };
}
