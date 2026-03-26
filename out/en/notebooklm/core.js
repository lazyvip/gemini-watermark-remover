/**
 * MarkCut NotebookLM 去水印核心逻辑 (ES Module)
 * 基于逆向工程提取的真实 Telea (FMM) 算法
 */

const clamp = (val, min, max) => Math.min(max, Math.max(min, val));

export function getWatermarkParams(width, height) {
    // 固定水印参数，匹配原站逻辑
    const params = {
        width: 220,
        height: 40,
        offsetX: 0,
        offsetY: 0,
        blendRadius: 10
    };

    const rect = {
        x: Math.max(0, width - params.width - params.offsetX),
        y: Math.max(0, height - params.height - params.offsetY),
        w: params.width,
        h: params.height
    };

    return { params, rect };
}

export function createMask(width, height, rect, blendRadius) {
    const { x, y, w, h } = rect;
    // 源码逻辑：createMask 返回 {mask, featherWeight}
    const mask = new Uint8Array(width * height);
    const featherWeight = new Float32Array(width * height);
    
    // 源码逻辑复刻
    for (let r = 0; r < height; r++) {
        for (let t = 0; t < width; t++) {
            let c = r * width + t;
            if (t >= x && t < x + w && r >= y && r < y + h) {
                mask[c] = 1;
                // 计算羽化权重
                // let e=Math.min(t-i,i+o-t,r-s,s+d-r);
                // n[c]=e<a?e/a:1
                // 对应变量：t->x, i->x, o->w, r->y, s->y, d->h, a->blendRadius
                let dist = Math.min(t - x, x + w - t, r - y, y + h - r);
                featherWeight[c] = dist < blendRadius ? dist / blendRadius : 1;
            }
        }
    }
    return { mask, featherWeight };
}

/**
 * 真正的 Telea 算法 (Fast Marching Method)
 * 从源码逆向还原
 */
export function inpaintTelea(imageData, mask, blendRadius) {
    const { width, height, data } = imageData;
    const l = height; // 源码 e=height
    const a = width;  // 源码 r=width
    
    // 初始化
    // i=new Uint8ClampedArray(n) (复制原始数据)
    const i = new Uint8ClampedArray(data);
    
    // s=new Float32Array(a*l).fill(1/0) (距离场，初始化为无穷大)
    const s = new Float32Array(width * height).fill(Infinity);
    
    // o=new Uint8Array(a*l) (known mask, 1表示已知像素)
    const o = new Uint8Array(width * height);
    
    // d=[] (窄带队列 narrow band)
    const d = [];

    // 1. 初始化 Known 区域 (非 Mask 区域)
    // for(let e=0;e<l;e++)for(let r=0;r<a;r++){let l=e*a+r;t[l]||(o[l]=1,s[l]=0)}
    // t 是传入的 mask (1表示需要修复)
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let idx = y * width + x;
            if (!mask[idx]) {
                o[idx] = 1; // 标记为已知
                s[idx] = 0; // 距离为0
            }
        }
    }

    // 2. 初始化窄带 (Narrow Band) - 位于 Mask 边界的像素
    // 遍历所有 Mask 像素，如果它有 Known 邻居，则加入队列
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let n = y * width + x;
            if (mask[n]) { // 如果是 Mask 区域
                for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                    let cx = x + dx;
                    let cy = y + dy;
                    if (cx >= 0 && cx < width && cy >= 0 && cy < height && !mask[cy * width + cx]) {
                        // 发现邻居是 Known (即 !mask)
                        s[n] = 1; // 距离设为 1
                        d.push({ x, y, dist: 1 });
                        break;
                    }
                }
            }
        }
    }

    // 3. FMM 循环
    // d.sort((e,t)=>e.dist-t.dist)
    // 实际上这里应该用堆，但源码用了简单的数组 sort 和 shift，性能较差但逻辑正确
    // 为了性能，我们可以优化，但先复刻逻辑
    
    // 注意：源码在每次插入新点后都会 sort，这在 JS 里非常慢。但对于小区域可能还行。
    // 我们先完全照搬。
    d.sort((e, t) => e.dist - t.dist);

    while (d.length > 0) {
        // 取出距离最小的点
        let { x: e, y: n } = d.shift();
        let c = n * width + e;
        
        if (o[c]) continue; // 如果已经处理过 (Known)，跳过

        // 标记为 Known
        o[c] = 1;

        // 修复当前像素 (Inpaint)
        // 计算加权平均颜色
        let u = 0, m = 0, g = 0, h = 0;
        let r = blendRadius; // 源码用了 blendRadius 作为搜索半径

        for (let t = -r; t <= r; t++) {
            for (let s = -r; s <= r; s++) {
                let dx = e + s;
                let cy = n + t;
                
                if (dx >= 0 && dx < width && cy >= 0 && cy < height) {
                    let idx = cy * width + dx;
                    if (o[idx]) { // 如果邻居是 Known
                        let dist = Math.sqrt(s * s + t * t);
                        if (dist <= r && dist > 0) {
                            let w = 1 / (dist * dist); // 权重 = 1 / dist^2
                            let pIdx = 4 * idx;
                            m += i[pIdx] * w;     // R
                            g += i[pIdx + 1] * w; // G
                            h += i[pIdx + 2] * w; // B
                            u += w;               // 总权重
                        }
                    }
                }
            }
        }

        if (u > 0) {
            let pIdx = 4 * c;
            i[pIdx] = m / u;
            i[pIdx + 1] = g / u;
            i[pIdx + 2] = h / u;
            i[pIdx + 3] = 255;
        }

        // 传播到邻居
        for (let [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            let ux = e + dx;
            let uy = n + dy;
            
            if (ux >= 0 && ux < width && uy >= 0 && uy < height) {
                let nIdx = uy * width + ux;
                // 如果邻居在 mask 里，且未知 (not Known)，且距离为无穷大 (未入队)
                if (mask[nIdx] && !o[nIdx] && s[nIdx] === Infinity) {
                    s[nIdx] = s[c] + 1; // 简单更新距离
                    d.push({ x: ux, y: uy, dist: s[nIdx] });
                    d.sort((a, b) => a.dist - b.dist); // 重新排序
                }
            }
        }
    }

    return new ImageData(i, width, height);
}


export function removeWatermarkFromCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const { params, rect } = getWatermarkParams(width, height);
    const imageData = ctx.getImageData(0, 0, width, height);
    
    // 生成掩码和羽化权重
    const { mask, featherWeight } = createMask(width, height, rect, params.blendRadius);
    
    if (rect.w <= 0 || rect.h <= 0) return;

    // 执行 Telea 修复
    const repairedImage = inpaintTelea(imageData, mask, params.blendRadius);
    
    // 最后一步：使用 featherWeight 混合原始图像和修复后的图像
    // 源码：
    // d=new Uint8ClampedArray(l.data); (l是原图)
    // for... if(mask[a]) { ... d[e+r]=Math.round(o.data[e+r]*t+l.data[e+r]*(1-t)) }
    // o 是修复后的图，l 是原图，t 是 featherWeight
    // 也就是说：Result = Repaired * Weight + Original * (1 - Weight)
    // Weight 是距离边界的归一化距离。内部 Weight=1 (全修复)，边缘 Weight<1 (混合原图)。
    
    const finalData = new Uint8ClampedArray(imageData.data.length);
    const repairedData = repairedImage.data;
    const originalData = imageData.data;

    for (let i = 0; i < width * height; i++) {
        let pIdx = 4 * i;
        if (mask[i]) {
            let weight = featherWeight[i];
            // 混合 RGB
            for (let c = 0; c < 3; c++) {
                finalData[pIdx + c] = Math.round(
                    repairedData[pIdx + c] * weight + 
                    originalData[pIdx + c] * (1 - weight)
                );
            }
            finalData[pIdx + 3] = 255; // Alpha
        } else {
            // 非 Mask 区域直接复制原图
            finalData[pIdx] = originalData[pIdx];
            finalData[pIdx + 1] = originalData[pIdx + 1];
            finalData[pIdx + 2] = originalData[pIdx + 2];
            finalData[pIdx + 3] = originalData[pIdx + 3];
        }
    }

    const finalImage = new ImageData(finalData, width, height);
    ctx.putImageData(finalImage, 0, 0);
}
