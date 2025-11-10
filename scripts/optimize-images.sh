#!/bin/bash

# Image Optimization Script
# This script compresses PNG images using pngquant and optipng
# Install dependencies: brew install pngquant optipng (macOS) or apt-get install pngquant optipng (Linux)

echo "🖼️  Starting image optimization..."

cd "$(dirname "$0")/../public"

# Check if pngquant is installed
if ! command -v pngquant &> /dev/null; then
    echo "❌ pngquant is not installed. Installing..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install pngquant
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get install pngquant -y
    else
        echo "Please install pngquant manually: https://pngquant.org/"
        exit 1
    fi
fi

# Create backup directory
mkdir -p ../backups/images

# Optimize PNG images
for img in *.png *.PNG; do
    if [ -f "$img" ]; then
        echo "📦 Optimizing $img..."
        
        # Backup original
        cp "$img" "../backups/images/${img}.backup"
        
        # Get original size
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        
        # Compress with pngquant (quality 80-100, keeps transparency)
        pngquant --quality=80-100 --ext .png --force "$img" 2>/dev/null || true
        
        # Further optimize with optipng (if available)
        if command -v optipng &> /dev/null; then
            optipng -o2 -quiet "$img" 2>/dev/null || true
        fi
        
        # Get new size
        new_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        
        # Calculate savings
        savings=$(echo "scale=2; (1 - $new_size / $original_size) * 100" | bc)
        
        echo "   ✅ Reduced from $(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "${original_size} bytes") to $(numfmt --to=iec-i --suffix=B $new_size 2>/dev/null || echo "${new_size} bytes") (${savings}% smaller)"
    fi
done

echo ""
echo "✨ Image optimization complete!"
echo "📁 Original images backed up to: backups/images/"
echo ""
echo "💡 Tip: For even better compression, consider converting to WebP format:"
echo "   brew install webp"
echo "   cwebp -q 85 input.png -o output.webp"

