/**
 * Adaptive watermark detector
 * Post-removal validation utilities based on normalized cross-correlation.
 */

const EPSILON = 1e-8;

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
