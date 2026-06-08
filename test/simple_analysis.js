import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 简单的 PNG 解析器
class PNGReader {
    constructor(buffer) {
        this.buffer = buffer;
        this.width = 0;
        this.height = 0;
        this.bitDepth = 0;
        this.colorType = 0;
        this.data = [];

        this.parse();
    }

    parse() {
        // 检查 PNG 签名
        const signature = this.buffer.slice(0, 8);
        const expectedSignature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

        if (!signature.equals(expectedSignature)) {
            throw new Error('不是有效的 PNG 文件');
        }

        let offset = 8;

        while (offset < this.buffer.length) {
            // 读取块长度
            const length = this.buffer.readUInt32BE(offset);
            offset += 4;

            // 读取块类型
            const type = this.buffer.slice(offset, offset + 4).toString('ascii');
            offset += 4;

            // 读取块数据
            const chunkData = this.buffer.slice(offset, offset + length);
            offset += length;

            // 跳过 CRC
            offset += 4;

            if (type === 'IHDR') {
                this.parseIHDR(chunkData);
            } else if (type === 'IDAT') {
                this.data.push(chunkData);
            } else if (type === 'IEND') {
                break;
            }
        }
    }

    parseIHDR(data) {
        this.width = data.readUInt32BE(0);
        this.height = data.readUInt32BE(4);
        this.bitDepth = data.readUInt8(8);
        this.colorType = data.readUInt8(9);
    }

    // 简化版：只提取部分像素用于分析
    getPixelSample(x, y) {
        // 由于完整的 PNG 解码比较复杂，这里只返回一个模拟值
        // 实际应用中应该使用专门的 PNG 解码库
        return { r: 128, g: 128, b: 128 };
    }
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

// 分析图片
function analyzeImage() {
    const testImagePath = path.join(process.cwd(), 'test', '微信图片_20260608152411_1696_10.png');

    console.log('=== 测试图片分析 ===');
    console.log('图片路径:', testImagePath);
    console.log('文件存在:', fs.existsSync(testImagePath));

    if (!fs.existsSync(testImagePath)) {
        console.error('错误: 找不到测试图片文件');
        return;
    }

    try {
        const buffer = fs.readFileSync(testImagePath);
        const png = new PNGReader(buffer);

        console.log('\n=== 图片基本信息 ===');
        console.log(`尺寸: ${png.width} × ${png.height}`);
        console.log(`位深度: ${png.bitDepth}`);
        console.log(`颜色类型: ${png.colorType}`);

        // 检测水印配置
        const config = detectWatermarkConfig(png.width, png.height);
        const position = calculateWatermarkPosition(png.width, png.height, config);

        console.log('\n=== 水印检测规则 ===');
        console.log(`水印尺寸: ${config.logoSize} × ${config.logoSize}`);
        console.log(`右边距: ${config.marginRight}px`);
        console.log(`下边距: ${config.marginBottom}px`);
        console.log(`检测位置: (${position.x}, ${position.y})`);

        console.log('\n=== 检测条件分析 ===');
        console.log(`宽 > 1024: ${png.width > 1024 ? '是' : '否'} (${png.width})`);
        console.log(`高 > 1024: ${png.height > 1024 ? '是' : '否'} (${png.height})`);
        console.log(`使用 96×96 水印: ${png.width > 1024 && png.height > 1024 ? '是' : '否'}`);

        console.log('\n=== 水印位置信息 ===');
        console.log(`X 坐标: ${position.x}`);
        console.log(`Y 坐标: ${position.y}`);
        console.log(`水印区域: ${position.width} × ${position.height}`);
        console.log(`相对位置: (${((position.x / png.width) * 100).toFixed(2)}%, ${((position.y / png.height) * 100).toFixed(2)}%)`);

        console.log('\n=== 建议 ===');
        console.log('请在浏览器中打开 test/compare.html 查看可视化分析结果');
        console.log('通过对比红色框（算法检测位置）和实际水印位置，可以确定是否需要调整检测规则');

    } catch (error) {
        console.error('分析失败:', error.message);
        console.log('\n建议: 使用浏览器打开 test/compare.html 进行可视化分析');
    }
}

analyzeImage();
