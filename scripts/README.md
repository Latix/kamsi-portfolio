# Build Scripts

## OG Image Generator

Automatically generates the Open Graph image (`og-image.jpg`) for social media sharing.

### Usage

```bash
# Install dependencies first (only needed once)
npm install

# Generate the OG image
npm run generate-og
```

### What it does

- Creates a 1200x630px image with your portfolio branding
- Uses your dark forest green theme
- Includes your name, title, and key stats
- Saves as `public/og-image.jpg` (optimized JPEG)
- Runs automatically before `npm run build`

### Customization

Edit `scripts/generate-og-image.js` to modify:
- Text content (name, title, description)
- Stats badges
- Colors and styling
- Image dimensions or quality

### Requirements

- Node.js 16+
- Puppeteer (installed automatically with `npm install`)

