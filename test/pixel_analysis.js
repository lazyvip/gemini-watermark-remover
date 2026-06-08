import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas, loadImage } from 'canvas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 当前的水印检测规则
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
            marginRight: 32,
            marginBottom: 32
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

// 分析区域的平均亮度和标准差
function analyzeRegion(imageData, x, y, width, height) {
    let sum = 0;
    let count = 0;
    const values = [];

    for (let row = y; row < y + height && row < imageData.height; row++) {
        for (let col = x; col < x + width && col < imageData.width; col++) {
            const idx = (row * imageData.width + col) * 4;
            const r = imageData.data[idx];
            const g = imageData.data[idx + 1];
            const b = imageData.data[idx + 2];
            const brightness = (r + g + b) / 3;
            sum += brightness;
            values.push(brightness);
            count++;
        }
    }

    const mean = sum / count;
    const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / count;
    const stdDev = Math.sqrt(variance);

    return { mean, stdDev, count };
}

// 检测水印区域（通过亮度异常检测）
function detectWatermarkRegion(imageData, expectedPosition) {
    const { x, y, width, height } = expectedPosition;

    // 分析水印区域
    const watermarkRegion = analyzeRegion(imageData, x, y, width, height);

    // 分析周围区域作为对比
    const surroundingSize = 20;
    const surroundingRegions = [
        // 左边
        analyzeRegion(imageData, Math.max(0, x - surroundingSize), y, surroundingSize, height),
        // 上边
        analyzeRegion(imageData, x, Math.max(0, y - surroundingSize), width, surroundingSize),
        // 右边（如果有空间）
        x + width + surroundingSize < imageData.width ?
            analyzeRegion(imageData, x + width, y, surroundingSize, height) : null,
        // 下边（如果有空间）
        y + height + surroundingSize < imageData.height ?
            analyzeRegion(imageData, x, y + height, width, surroundingSize) : null
    ].filter(r => r !== null);

    const surroundingMean = surroundingRegions.reduce((acc, r) => acc + r.mean, 0) / surroundingRegions.length;
    const surroundingStdDev = surroundingRegions.reduce((acc, r) => acc + r.stdDev, 0) / surroundingRegions.length;

    console.log('\n=== 水印区域分析 ===');
    console.log(`水印区域平均亮度: ${watermarkRegion.mean.toFixed(2)}`);
    console.log(`水印区域标准差: ${watermarkRegion.stdDev.toFixed(2)}`);
    console.log(`周围区域平均亮度: ${surroundingMean.toFixed(2)}`);
    console.log(`周围区域标准差: ${surroundingStdDev.toFixed(2)}`);
    console.log(`亮度差异: ${(watermarkRegion.mean - surroundingMean).toFixed(2)}`);

    // 水印通常是半透明的白色，所以亮度会比周围高
    const hasWatermark = watermarkRegion.mean > surroundingMean && watermarkRegion.stdDev < surroundingStdDev;

    console.log(`\n检测到水印: ${hasWatermark ? '是 ✓' : '否 ✗'}`);

    return hasWatermark;
}

// 扫描整个右下角区域，寻找可能的水印位置
function scanForWatermark(imageData, imageSize) {
    console.log('\n=== 扫描水印位置 ===');

    const scanArea = 200; // 扫描右下角 200x200 区域
    const stepSize = 10; // 每 10 像素采样一次
    const watermarkSize = 48; // 假设水印大小

    const startX = Math.max(0, imageData.width - scanArea);
    const startY = Math.max(0, imageData.height - scanArea);

    let maxBrightnessDiff = 0;
    let bestPosition = null;

    for (let y = startY; y < imageData.height - watermarkSize; y += stepSize) {
        for (let x = startX; x < imageData.width - watermarkSize; x += stepSize) {
            // 分析这个位置
            const region = analyzeRegion(imageData, x, y, watermarkSize, watermarkSize);

            // 分析周围区域
            const surrounding = analyzeRegion(imageData,
                Math.max(0, x - 20),
                Math.max(0, y - 20),
                watermarkSize + 40,
                watermarkSize + 40
            );

            const brightnessDiff = region.mean - surrounding.mean;

            // 水印特征：亮度高且标准差小（半透明白色）
            if (brightnessDiff > maxBrightnessDiff && region.stdDev < surrounding.stdDev) {
                maxBrightnessDiff = brightnessDiff;
                bestPosition = { x, y, brightnessDiff, regionMean: region.mean, surroundingMean: surrounding.mean };
            }
        }
    }

    if (bestPosition) {
        console.log(`发现可能的水印位置: (${bestPosition.x}, ${bestPosition.y})`);
        console.log(`亮度差异: ${bestPosition.brightnessDiff.toFixed(2)}`);
        console.log(`区域亮度: ${bestPosition.regionMean.toFixed(2)}`);
        console.log(`周围亮度: ${bestPosition.surroundingMean.toFixed(2)}`);
    }

    return bestPosition;
}

async function analyzeImage() {
    const testImagePath = path.join(process.cwd(), 'test', '微信图片_20260608152411_1696_10.png');

    console.log('测试图片路径:', testImagePath);
    console.log('文件是否存在:', fs.existsSync(testImagePath));

    if (!fs.existsSync(testImagePath)) {
        console.error('错误: 找不到测试图片文件');
        return;
    }

    try {
        // 加载图片
        const img = await loadImage(testImagePath);
        const width = img.width;
        const height = img.height;

        console.log('=== 图片信息 ===');
        console.log(`尺寸: ${width} × ${height}`);
        console.log(`面积: ${(width * height).toLocaleString()} 像素`);
        console.log(`宽高比: ${(width / height).toFixed(2)}`);

        // 创建 canvas 并获取图像数据
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, width, height);

        // 检测水印配置
        const config = detectWatermarkConfig(width, height);
        const expectedPosition = calculateWatermarkPosition(width, height, config);

        console.log('\n=== 当前检测规则 ===');
        console.log(`水印尺寸: ${config.logoSize} × ${config.logoSize}`);
        console.log(`右边距: ${config.marginRight}px`);
        console.log(`下边距: ${config.marginBottom}px`);
        console.log(`检测位置: (${expectedPosition.x}, ${expectedPosition.y})`);

        // 分析检测到的位置
        const hasWatermarkAtExpected = detectWatermarkRegion(imageData, expectedPosition);

        // 扫描寻找实际水印位置
        const actualWatermarkPos = scanForWatermark(imageData, { width, height });

        if (actualWatermarkPos && !hasWatermarkAtExpected) {
            console.log('\n⚠️ 检测到水印位置偏移！');
            console.log(`算法检测位置: (${expectedPosition.x}, ${expectedPosition.y})`);
            console.log(`实际水印位置: (${actualWatermarkPos.x}, ${actualWatermarkPos.y})`);
            console.log(`X 偏移: ${actualWatermarkPos.x - expectedPosition.x}px`);
            console.log(`Y 偏移: ${actualWatermarkPos.y - expectedPosition.y}px`);
        } else if (hasWatermarkAtExpected) {
            console.log('\n✓ 水印位置检测正确！');
        }

    } catch (error) {
        console.error('分析失败:', error.message);
        console.log('\n提示: 需要安装 canvas 库: npm install canvas');
    }
}

analyzeImage();
