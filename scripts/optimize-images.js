/**
 * Image Optimization Guide
 * 
 * This script provides instructions for optimizing images.
 * For automatic optimization, use the optimize-images.sh script.
 * 
 * Manual Optimization Steps:
 * 
 * 1. Install image optimization tools:
 *    npm install -g sharp-cli
 *    OR
 *    brew install pngquant optipng webp (macOS)
 * 
 * 2. Use online tools:
 *    - TinyPNG: https://tinypng.com/
 *    - Squoosh: https://squoosh.app/
 *    - ImageOptim: https://imageoptim.com/
 * 
 * 3. Recommended settings:
 *    - PNG: Quality 80-90, reduce colors if possible
 *    - WebP: Quality 85-90 (better compression, modern browsers)
 *    - Max width: 1200px for project screenshots
 *    - Max height: 800px for project screenshots
 * 
 * 4. Current image sizes to optimize:
 *    - netflix.png: 6.7MB → Target: < 200KB
 *    - probe.png: 2.2MB → Target: < 300KB
 *    - gzero.png: 2.1MB → Target: < 300KB
 *    - project2.PNG: 1.7MB → Target: < 250KB
 *    - woven.png: 1.4MB → Target: < 250KB
 *    - simrop.png: 1.2MB → Target: < 200KB
 */

console.log('📸 Image Optimization Guide');
console.log('Run: chmod +x scripts/optimize-images.sh && ./scripts/optimize-images.sh');

