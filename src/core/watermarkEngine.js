/**
 * Watermark engine main module
 * Coordinate watermark detection, alpha map calculation, and removal operations.
 * Uses official Gemini size catalog + adaptive template matching for robust detection.
 */

import { calculateAlphaMap } from './alphaMap.js';
import { removeWatermark } from './blendModes.js';
import { cloneImageData } from '../utils.js';
import { findBestWatermarkPosition, computeRegionSpatialCorrelation, computeRegionGradientCorrelation } from './adaptiveDetector.js';
import {
    resolveGeminiWatermarkSearchConfigs,
    matchOfficialGeminiImageSize
} from './geminiSizeCatalog.js';
import BG_48_PATH from '../assets/bg_48.png';
import BG_96_PATH from '../assets/bg_96.png';

/**
 * Detect watermark configuration based on image size
 * @param {number} imageWidth - Image width
 * @param {number} imageHeight - Image height
 * @returns {Object} Watermark configuration {logoSize, marginRight, marginBottom}
 */
export function detectWatermarkConfig(imageWidth, imageHeight) {
    // Gemini's watermark rules:
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

/**
 * Calculate watermark position in image
 */
export function calculateWatermarkPosition(imageWidth, imageHeight, config) {
    const { logoSize, marginRight, marginBottom } = config;
    return {
        x: imageWidth - marginRight - logoSize,
        y: imageHeight - marginBottom - logoSize,
        width: logoSize,
        height: logoSize
    };
}

// Alpha gain candidates to try (weaker first, then stronger)
const ALPHA_GAIN_CANDIDATES = [0.55, 0.7, 0.85, 1.0, 1.12, 1.28, 1.45, 1.6, 1.85, 2.0];

// Near-black safety threshold
const NEAR_BLACK_THRESHOLD = 5;
const MAX_NEAR_BLACK_INCREASE = 0.05;

function calculateNearBlackRatio(imageData, position) {
    let nearBlack = 0;
    let total = 0;
    for (let row = 0; row < position.height; row++) {
        for (let col = 0; col < position.width; col++) {
            const idx = ((position.y + row) * imageData.width + (position.x + col)) * 4;
            const r = imageData.data[idx];
            const g = imageData.data[idx + 1];
            const b = imageData.data[idx + 2];
            if (r <= NEAR_BLACK_THRESHOLD && g <= NEAR_BLACK_THRESHOLD && b <= NEAR_BLACK_THRESHOLD) {
                nearBlack++;
            }
            total++;
        }
    }
    return total > 0 ? nearBlack / total : 0;
}

/**
 * Watermark engine class
 */
export class WatermarkEngine {
    constructor(bgCaptures) {
        this.bgCaptures = bgCaptures;
        this.alphaMaps = {};
    }

    static async create() {
        const bg48 = new Image();
        const bg96 = new Image();

        await Promise.all([
            new Promise((resolve, reject) => {
                bg48.onload = resolve;
                bg48.onerror = reject;
                bg48.src = BG_48_PATH;
            }),
            new Promise((resolve, reject) => {
                bg96.onload = resolve;
                bg96.onerror = reject;
                bg96.src = BG_96_PATH;
            })
        ]);

        return new WatermarkEngine({ bg48, bg96 });
    }

    /**
     * Get alpha map from background captured image based on watermark size
     */
    async getAlphaMap(size) {
        if (this.alphaMaps[size]) {
            return this.alphaMaps[size];
        }

        const bgImage = size === 48 ? this.bgCaptures.bg48 : this.bgCaptures.bg96;

        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(bgImage, 0, 0);

        const imageData = ctx.getImageData(0, 0, size, size);
        const alphaMap = calculateAlphaMap(imageData);
        this.alphaMaps[size] = alphaMap;

        return alphaMap;
    }

    /**
     * Remove watermark from image
     */
    async removeWatermarkFromImage(image) {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        const originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Get default config
        const defaultConfig = detectWatermarkConfig(canvas.width, canvas.height);

        // Get all candidate configs (size catalog + default)
        const searchConfigs = resolveGeminiWatermarkSearchConfigs(
            canvas.width, canvas.height, defaultConfig
        );

        // Evaluate each candidate
        let bestResult = null;
        let bestScore = Infinity;
        let detectionMeta = null;

        const baseNearBlackRatio = calculateNearBlackRatio(
            originalImageData,
            calculateWatermarkPosition(canvas.width, canvas.height, defaultConfig)
        );

        for (const config of searchConfigs) {
            const position = calculateWatermarkPosition(canvas.width, canvas.height, config);

            // Skip if position is out of bounds
            if (position.x < 0 || position.y < 0 ||
                position.x + position.width > canvas.width ||
                position.y + position.height > canvas.height) {
                continue;
            }

            const alphaMap = await this.getAlphaMap(config.logoSize);

            // Score original region against alpha map template
            const origSpatial = computeRegionSpatialCorrelation({
                imageData: originalImageData,
                alphaMap,
                region: { x: position.x, y: position.y, size: position.width }
            });

            // Try different alpha gains
            for (const alphaGain of ALPHA_GAIN_CANDIDATES) {
                const candidate = cloneImageData(originalImageData);
                removeWatermark(candidate, alphaMap, position, { alphaGain });

                // Safety check: near-black ratio
                const nearBlackRatio = calculateNearBlackRatio(candidate, position);
                if (nearBlackRatio > baseNearBlackRatio + MAX_NEAR_BLACK_INCREASE) {
                    continue;
                }

                // Score processed region
                const procSpatial = computeRegionSpatialCorrelation({
                    imageData: candidate,
                    alphaMap,
                    region: { x: position.x, y: position.y, size: position.width }
                });
                const procGradient = computeRegionGradientCorrelation({
                    imageData: candidate,
                    alphaMap,
                    region: { x: position.x, y: position.y, size: position.width }
                });

                // Lower absolute spatial score = better removal
                // Combined cost = |spatial| + max(0, gradient) * 0.5
                const cost = Math.abs(procSpatial) + Math.max(0, procGradient) * 0.5;

                if (cost < bestScore) {
                    bestScore = cost;
                    bestResult = {
                        imageData: candidate,
                        position,
                        config,
                        alphaGain,
                        origSpatial,
                        procSpatial,
                        procGradient,
                        nearBlackRatio
                    };
                    detectionMeta = {
                        found: true,
                        x: position.x,
                        y: position.y,
                        size: position.width,
                        confidence: 1 - cost,
                        spatial: procSpatial,
                        gradient: procGradient,
                        alphaGain,
                        source: config === defaultConfig ? 'default' : 'catalog'
                    };
                }
            }
        }

        // If we found a good result, use it; otherwise fall back to default
        if (bestResult && bestResult.imageData) {
            ctx.putImageData(bestResult.imageData, 0, 0);
        } else {
            // Fallback: default config
            const fallbackPos = calculateWatermarkPosition(canvas.width, canvas.height, defaultConfig);
            const fbAlphaMap = await this.getAlphaMap(defaultConfig.logoSize);
            removeWatermark(originalImageData, fbAlphaMap, fallbackPos);
            ctx.putImageData(originalImageData, 0, 0);
            detectionMeta = {
                found: false,
                x: fallbackPos.x,
                y: fallbackPos.y,
                size: fallbackPos.width,
                confidence: 0,
                spatial: 0,
                gradient: 0
            };
        }

        canvas.__watermarkDetection = detectionMeta;
        return canvas;
    }

    /**
     * Get watermark information (for display)
     */
    getWatermarkInfo(imageWidth, imageHeight) {
        const config = detectWatermarkConfig(imageWidth, imageHeight);
        const position = calculateWatermarkPosition(imageWidth, imageHeight, config);

        return {
            size: config.logoSize,
            position: position,
            config: config
        };
    }
}
