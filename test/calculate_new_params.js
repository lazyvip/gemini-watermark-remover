// 计算新的水印检测参数

const imageWidth = 1376;
const imageHeight = 768;

// 当前算法检测的位置
const currentConfig = {
    logoSize: 48,
    marginRight: 32,
    marginBottom: 32
};

const currentX = imageWidth - currentConfig.marginRight - currentConfig.logoSize;
const currentY = imageHeight - currentConfig.marginBottom - currentConfig.logoSize;

console.log('=== 当前算法检测结果 ===');
console.log(`检测位置: (${currentX}, ${currentY})`);
console.log(`右边距: ${currentConfig.marginRight}px`);
console.log(`下边距: ${currentConfig.marginBottom}px`);

// 实际水印位置（根据用户反馈的偏移量）
const offsetX = -64;
const offsetY = -63;

const actualX = currentX + offsetX;
const actualY = currentY + offsetY;

console.log('\n=== 实际水印位置 ===');
console.log(`偏移量: X=${offsetX}, Y=${offsetY}`);
console.log(`实际位置: (${actualX}, ${actualY})`);

// 计算新的边距参数
const newMarginRight = imageWidth - actualX - currentConfig.logoSize;
const newMarginBottom = imageHeight - actualY - currentConfig.logoSize;

console.log('\n=== 新的检测参数 ===');
console.log(`新的右边距: ${newMarginRight}px (原来是 ${currentConfig.marginRight}px)`);
console.log(`新的下边距: ${newMarginBottom}px (原来是 ${currentConfig.marginBottom}px)`);

console.log('\n=== 验证 ===');
const verifyX = imageWidth - newMarginRight - currentConfig.logoSize;
const verifyY = imageHeight - newMarginBottom - currentConfig.logoSize;
console.log(`验证位置: (${verifyX}, ${verifyY})`);
console.log(`是否匹配: X=${verifyX === actualX ? '✓' : '✗'}, Y=${verifyY === actualY ? '✓' : '✗'}`);

console.log('\n=== 需要更新的代码 ===');
console.log(`marginRight: ${currentConfig.marginRight} → ${newMarginRight}`);
console.log(`marginBottom: ${currentConfig.marginBottom} → ${newMarginBottom}`);
