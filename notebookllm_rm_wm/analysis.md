# MarkCut NotebookLM 去水印原理分析

## 概述

网站 `https://markcut.com/zh/notebooklm` 提供了一个完全在浏览器本地运行的去水印工具，用于去除 NotebookLM 生成的图片、PDF 和视频中的水印。

通过逆向分析其前端代码（主要是 Next.js 的 chunk 文件），我们还原了其核心工作原理。

## 核心技术栈

1.  **前端框架**: Next.js (React)
2.  **图像处理**: HTML5 Canvas API + 自定义 JS 算法 (Telea Inpainting)
3.  **视频处理**: FFmpeg (WebAssembly 版本, `@ffmpeg/core`)
4.  **PDF 处理**: PDF.js (`pdf.worker.min.mjs`)

## 去水印原理

该工具并没有使用深度学习模型（如 GAN 或 Diffusion Model），而是使用了传统的图像修复（Inpainting）算法。具体来说，它使用了一种基于扩散的修复方法（类似于 Alexandru Telea 的快速行进法，但在 JS 中简化为迭代扩散）。

### 1. 水印定位

工具首先根据输入图像的尺寸，动态计算水印的位置和大小。NotebookLM 的水印通常位于右下角。

计算逻辑如下（伪代码）：

```javascript
function getWatermarkRect(imageWidth, imageHeight) {
    // 限制参数范围
    const clamp = (val, min, max) => Math.min(max, Math.max(min, val));
    
    // 水印宽度约为图像宽度的 20%
    const w = clamp(Math.round(0.2 * imageWidth), 140, 520);
    // 水印高度约为图像高度的 7%
    const h = clamp(Math.round(0.07 * imageHeight), 60, 200);
    
    // 右下角偏移量
    const offsetX = clamp(Math.round(0.01 * imageWidth), 0, 60);
    const offsetY = clamp(Math.round(0.01 * imageHeight), 0, 60);
    
    // 计算实际坐标 (右下角)
    const x = imageWidth - w - offsetX;
    const y = imageHeight - h - offsetY;
    
    return { x, y, w, h };
}
```

### 2. 图像修复算法 (Inpainting)

确定了水印区域后，工具会创建一个掩码（Mask），标记出需要修复的像素。然后对该区域应用修复算法。

分析出的核心算法是一个迭代的扩散过程：

1.  **初始化**: 将图像数据复制到一个 `Float32Array` 缓冲区。
2.  **迭代**: 进行多次循环（默认 100 次）。
3.  **扩散**: 在每次迭代中，遍历掩码区域内的每个像素。
    *   对于每个像素，计算其上、下、左、右四个相邻像素的平均值。
    *   用这个平均值更新当前像素的值。
    *   这个过程会将周围非水印区域的颜色逐渐“扩散”进来，从而覆盖掉水印。

这种方法对于纯色背景或简单纹理背景的水印去除效果很好，且计算量小，适合在浏览器端运行。

### 3. 视频处理流程

视频去水印是基于图像去水印扩展的：

1.  **加载 FFmpeg**: 使用 `@ffmpeg/core` (WebAssembly) 在浏览器中加载 FFmpeg。
2.  **分解帧**: 将上传的视频逐帧提取为图片 (`-vf fps=1` 或原始帧率)。
3.  **逐帧处理**: 对每一帧应用上述的图像去水印算法。
4.  **合成视频**: 将处理后的帧重新合成视频文件。

注意：由于是在浏览器中逐帧处理 JS 算法，对于长视频或高分辨率视频，处理时间可能会比较长。

## 关键代码片段

请参考同目录下的 `core_logic.js` 文件，其中包含了从混淆代码中还原出的核心函数。
