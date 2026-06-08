import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 简单的 PNG 尺寸读取（不依赖外部库）
function getPNGDimensions(buffer) {
    // PNG 文件头：8 字节签名 + 4 字节长度 + 4 字节类型
    // IHDR 块包含宽度和高度信息
    if (buffer.length < 24) return null;

    // 检查 PNG 签名
    const signature = buffer.slice(0, 8);
    const expectedSignature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

    if (!signature.equals(expectedSignature)) {
        return null;
    }

    // 读取 IHDR 块
    // 长度（4 字节）+ 类型（4 字节）+ 数据（13 字节）+ CRC（4 字节）
    const ihdrData = buffer.slice(16, 29); // 跳过签名(8) + 长度(4) + 类型(4)

    const width = ihdrData.readUInt32BE(0);
    const height = ihdrData.readUInt32BE(4);

    return { width, height };
}

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

// 分析测试图片
const testImagePath = path.join(__dirname, '微信图片_20260608152411_1696_10.png');

try {
    const buffer = fs.readFileSync(testImagePath);
    const dimensions = getPNGDimensions(buffer);

    if (dimensions) {
        console.log('=== 图片信息 ===');
        console.log(`尺寸: ${dimensions.width} × ${dimensions.height}`);
        console.log(`面积: ${(dimensions.width * dimensions.height).toLocaleString()} 像素`);
        console.log(`宽高比: ${(dimensions.width / dimensions.height).toFixed(2)}`);
        console.log('');

        const config = detectWatermarkConfig(dimensions.width, dimensions.height);
        const position = calculateWatermarkPosition(dimensions.width, dimensions.height, config);

        console.log('=== 当前水印检测规则 ===');
        console.log(`水印尺寸: ${config.logoSize} × ${config.logoSize}`);
        console.log(`右边距: ${config.marginRight}px`);
        console.log(`下边距: ${config.marginBottom}px`);
        console.log('');

        console.log('=== 检测条件 ===');
        console.log(`宽 > 1024: ${dimensions.width > 1024 ? '是' : '否'} (${dimensions.width})`);
        console.log(`高 > 1024: ${dimensions.height > 1024 ? '是' : '否'} (${dimensions.height})`);
        console.log(`使用 96×96 水印: ${dimensions.width > 1024 && dimensions.height > 1024 ? '是' : '否'}`);
        console.log('');

        console.log('=== 水印位置 ===');
        console.log(`X 坐标: ${position.x}`);
        console.log(`Y 坐标: ${position.y}`);
        console.log(`水印区域: ${position.width} × ${position.height}`);
        console.log('');

        // 计算水印在图片中的相对位置
        const relativeX = ((position.x / dimensions.width) * 100).toFixed(2);
        const relativeY = ((position.y / dimensions.height) * 100).toFixed(2);
        console.log('=== 相对位置 ===');
        console.log(`X 相对位置: ${relativeX}%`);
        console.log(`Y 相对位置: ${relativeY}%`);

    } else {
        console.log('无法读取图片尺寸，可能不是有效的 PNG 文件');
    }
} catch (error) {
    console.error('读取图片失败:', error.message);
}
