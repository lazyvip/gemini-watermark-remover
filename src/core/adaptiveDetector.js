/**
 * Adaptive watermark detector
 * Uses coarse-to-fine template matching around bottom-right region
 * to find the actual watermark position rather than relying on fixed margins.
 *
 * Based on the approach from @pilio/gemini-watermark-remover
 */

const EPSILON = 1e-8;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// --- Statistics helpers ---

function meanAndVariance(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) sum += values[i];
    const mean = sum / values.length;
    let sq = 0;
    for (let i = 0; i < values.length; i++) {
        const d = values[i] - mean;
        sq += d * d;
    }
    return { mean, variance: sq / values.length };
}

function normalizedCrossCorrelation(a, b) {
    if (a.length !== b.length || a.length === 0) return 0;
    const statsA = meanAndVariance(a);
    const statsB = meanAndVariance(b);
    const den = Math.sqrt(statsA.variance * statsB.variance) * a.length;
    if (den < EPSILON) return 0;
    let num = 0;
    for (let i = 0; i < a.length; i++) {
        num += (a[i] - statsA.mean) * (b[i] - statsB.mean);
    }
    return num / den;
}

// --- Image processing helpers ---

function toGrayscale(imageData) {
    const { width, height, data } = imageData;
    const out = new Float32Array(width * height);
    for (let i = 0; i < out.length; i++) {
        const j = i * 4;
        out[i] = (0.2126 * data[j] + 0.7152 * data[j + 1] + 0.0722 * data[j + 2]) / 255;
    }
    return out;
}

function getRegion(data, width, x, y, size) {
    const out = new Float32Array(size * size);
    for (let row = 0; row < size; row++) {
        const srcBase = (y + row) * width + x;
        const dstBase = row * size;
        for (let col = 0; col < size; col++) {
            out[dstBase + col] = data[srcBase + col];
        }
    }
    return out;
}

function sobelMagnitude(gray, width, height) {
    const grad = new Float32Array(width * height);
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            const i = y * width + x;
            const gx =
                -gray[i - width - 1] - 2 * gray[i - 1] - gray[i + width - 1] +
                gray[i - width + 1] + 2 * gray[i + 1] + gray[i + width + 1];
            const gy =
                -gray[i - width - 1] - 2 * gray[i - width] - gray[i - width + 1] +
                gray[i + width - 1] + 2 * gray[i + width] + gray[i + width + 1];
            grad[i] = Math.sqrt(gx * gx + gy * gy);
        }
    }
    return grad;
}

function buildTemplateGradient(alphaMap, size) {
    return sobelMagnitude(alphaMap, size, size);
}

function stdDevRegion(data, width, x, y, size) {
    let sum = 0;
    let sq = 0;
    let n = 0;
    for (let row = 0; row < size; row++) {
        const base = (y + row) * width + x;
        for (let col = 0; col < size; col++) {
            const v = data[base + col];
            sum += v;
            sq += v * v;
            n++;
        }
    }
    if (n === 0) return 0;
    const mean = sum / n;
    const variance = Math.max(0, sq / n - mean * mean);
    return Math.sqrt(variance);
}

function scoreCandidate({ gray, grad, width, height }, alphaMap, templateGrad, candidate) {
    const { x, y, size } = candidate;
    if (x < 0 || y < 0 || x + size > width || y + size > height) {
        return null;
    }

    const grayRegion = getRegion(gray, width, x, y, size);
    const gradRegion = getRegion(grad, width, x, y, size);

    const spatial = normalizedCrossCorrelation(grayRegion, alphaMap);
    const gradient = normalizedCrossCorrelation(gradRegion, templateGrad);

    // Variance score: watermark should differ from surrounding area
    let varianceScore = 0;
    if (y > 8) {
        const refY = Math.max(0, y - size);
        const refH = Math.min(size, y - refY);
        if (refH > 8) {
            const wmStd = stdDevRegion(gray, width, x, y, size);
            const refStd = stdDevRegion(gray, width, x, refY, refH);
            if (refStd > EPSILON) {
                varianceScore = clamp(1 - wmStd / refStd, 0, 1);
            }
        }
    }

    const confidence =
        Math.max(0, spatial) * 0.5 +
        Math.max(0, gradient) * 0.3 +
        varianceScore * 0.2;

    return {
        confidence: clamp(confidence, 0, 1),
        spatialScore: spatial,
        gradientScore: gradient,
        varianceScore
    };
}

// --- Interpolation ---

export function interpolateAlphaMap(sourceAlpha, sourceSize, targetSize) {
    if (targetSize <= 0) return new Float32Array(0);
    if (sourceSize === targetSize) return new Float32Array(sourceAlpha);
    const out = new Float32Array(targetSize * targetSize);
    const scale = (sourceSize - 1) / Math.max(1, targetSize - 1);
    for (let y = 0; y < targetSize; y++) {
        const sy = y * scale;
        const y0 = Math.floor(sy);
        const y1 = Math.min(sourceSize - 1, y0 + 1);
        const fy = sy - y0;
        for (let x = 0; x < targetSize; x++) {
            const sx = x * scale;
            const x0 = Math.floor(sx);
            const x1 = Math.min(sourceSize - 1, x0 + 1);
            const fx = sx - x0;
            const p00 = sourceAlpha[y0 * sourceSize + x0];
            const p10 = sourceAlpha[y0 * sourceSize + x1];
            const p01 = sourceAlpha[y1 * sourceSize + x0];
            const p11 = sourceAlpha[y1 * sourceSize + x1];
            const top = p00 + (p10 - p00) * fx;
            const bottom = p01 + (p11 - p01) * fx;
            out[y * targetSize + x] = top + (bottom - top) * fy;
        }
    }
    return out;
}

// --- Main detection API ---

/**
 * Search for the real watermark position by template matching.
 * Uses the alpha map as a template and scans the bottom-right area.
 *
 * @param {Object} options
 * @param {ImageData} options.imageData - Full image data
 * @param {Float32Array} options.alphaMap - Alpha map template (48×48 or 96×96)
 * @param {number} options.templateSize - Size of the alpha map template
 * @param {number} options.defaultMarginRight - Expected right margin from config
 * @param {number} options.defaultMarginBottom - Expected bottom margin from config
 * @param {number} [options.threshold=0.3] - Minimum confidence threshold
 * @returns {{ found: boolean, x: number, y: number, size: number, confidence: number }}
 */
export function findBestWatermarkPosition({
    imageData,
    alphaMap,
    templateSize,
    defaultMarginRight,
    defaultMarginBottom,
    threshold = 0.3
}) {
    const { width, height } = imageData;

    // Convert full image to grayscale once
    const gray = toGrayscale(imageData);
    const grad = sobelMagnitude(gray, width, height);

    // Build search context
    const context = { gray, grad, width, height };

    // Build template gradient
    const templateGrad = buildTemplateGradient(alphaMap, templateSize);

    // Search range: 3x the default margin to be safe
    const searchRange = Math.max(64, templateSize * 2);

    // Define search bounds in bottom-right corner
    const minX = Math.max(0, width - searchRange - templateSize);
    const maxX = width - templateSize;
    const minY = Math.max(0, height - searchRange - templateSize);
    const maxY = height - templateSize;

    // Also try nearby sizes (0.8x to 1.3x)
    const sizes = new Set();
    sizes.add(templateSize);
    sizes.add(48);
    sizes.add(96);
    for (let s = Math.max(24, Math.floor(templateSize * 0.8)); s <= Math.min(192, Math.floor(templateSize * 1.3)); s += 8) {
        sizes.add(s);
    }

    let best = {
        x: width - defaultMarginRight - templateSize,
        y: height - defaultMarginBottom - templateSize,
        size: templateSize,
        confidence: 0
    };

    // Coarse search with step = 8
    for (const size of sizes) {
        // Create interpolated alpha map for this size
        const tplAlpha = size === templateSize
            ? alphaMap
            : interpolateAlphaMap(alphaMap, templateSize, size);
        const tplGrad = buildTemplateGradient(tplAlpha, size);

        for (let x = minX; x <= maxX - size + 1; x += 8) {
            for (let y = minY; y <= maxY - size + 1; y += 8) {
                const score = scoreCandidate(context, tplAlpha, tplGrad, { x, y, size });
                if (score && score.confidence > best.confidence) {
                    best = { x, y, size, ...score };
                }
            }
        }
    }

    // Fine search around the best coarse result
    if (best.confidence > 0.1) {
        for (let dy = -6; dy <= 6; dy += 2) {
            for (let dx = -6; dx <= 6; dx += 2) {
                if (dx === 0 && dy === 0) continue;
                const x = best.x + dx;
                const y = best.y + dy;
                if (x < 0 || y < 0 || x + best.size > width || y + best.size > height) continue;

                const tplAlpha = best.size === templateSize
                    ? alphaMap
                    : interpolateAlphaMap(alphaMap, templateSize, best.size);
                const tplGrad = buildTemplateGradient(tplAlpha, best.size);
                const score = scoreCandidate(context, tplAlpha, tplGrad, { x, y, size: best.size });
                if (score && score.confidence > best.confidence) {
                    best = { x, y, size: best.size, ...score };
                }
            }
        }
    }

    return {
        found: best.confidence >= threshold,
        x: best.x,
        y: best.y,
        size: best.size,
        confidence: best.confidence
    };
}

/**
 * Quick detection: just score the fixed-margin position against template
 * to check if the default config is correct, without doing full search.
 */
export function scoreFixedPosition(imageData, alphaMap, templateSize, marginRight, marginBottom) {
    const { width, height } = imageData;
    const x = width - marginRight - templateSize;
    const y = height - marginBottom - templateSize;

    if (x < 0 || y < 0 || x + templateSize > width || y + templateSize > height) {
        return { valid: false, confidence: 0 };
    }

    const gray = toGrayscale(imageData);
    const grad = sobelMagnitude(gray, width, height);
    const context = { gray, grad, width, height };
    const templateGrad = buildTemplateGradient(alphaMap, templateSize);
    const score = scoreCandidate(context, alphaMap, templateGrad, { x, y, size: templateSize });

    return {
        valid: true,
        x, y, size: templateSize,
        confidence: score ? score.confidence : 0,
        spatialScore: score ? score.spatialScore : 0
    };
}

// --- Region-based scoring for post-removal validation ---

function toRegionGrayscale(imageData, region) {
    const { width, height, data } = imageData;
    const size = region.size ?? Math.min(region.width, region.height);
    if (!size || size <= 0) return new Float32Array(0);
    if (region.x < 0 || region.y < 0 || region.x + size > width || region.y + size > height) {
        return new Float32Array(0);
    }
    const out = new Float32Array(size * size);
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const idx = ((region.y + row) * width + (region.x + col)) * 4;
            out[row * size + col] =
                (0.2126 * data[idx] + 0.7152 * data[idx + 1] + 0.0722 * data[idx + 2]) / 255;
        }
    }
    return out;
}

/**
 * Compute spatial (NCC) correlation between image region and alpha map.
 * Lower absolute values after removal = better (watermark signal suppressed).
 */
export function computeRegionSpatialCorrelation({ imageData, alphaMap, region }) {
    const patch = toRegionGrayscale(imageData, region);
    if (patch.length === 0 || patch.length !== alphaMap.length) return 0;
    return normalizedCrossCorrelation(patch, alphaMap);
}

/**
 * Compute gradient (edge) correlation between image region and alpha map.
 * Lower values after removal = better.
 */
export function computeRegionGradientCorrelation({ imageData, alphaMap, region }) {
    const patch = toRegionGrayscale(imageData, region);
    if (patch.length === 0 || patch.length !== alphaMap.length) return 0;
    const size = region.size ?? Math.min(region.width, region.height);
    if (!size || size <= 2) return 0;
    const patchGrad = sobelMagnitude(patch, size, size);
    const alphaGrad = sobelMagnitude(alphaMap, size, size);
    return normalizedCrossCorrelation(patchGrad, alphaGrad);
}