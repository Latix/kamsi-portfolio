# Build Scripts

## OG Image Generator

Creates the Open Graph image (`og-image.jpg`) for social media sharing.

### 🚀 Easy Method (Recommended)

**Just open and click!**

```bash
open scripts/download-og-image.html
```

1. Page auto-generates the image
2. Click **"Download as JPG"**
3. Save as `og-image.jpg` in the `public/` folder
4. Commit and push!

**That's it!** No screenshots, no tools needed.

### Alternative: Screenshot Method

If you want to customize the design visually:

```bash
open scripts/create-og-image.html
```

Then take a screenshot at 1200x630px.

### Why No Puppeteer?

- Puppeteer is heavy (~300MB) and causes issues on Vercel
- Canvas/screenshot is one-time and produces perfect quality
- No build dependencies = faster deployments
- Image only needs to be created once

### Customization

**Easy version:** Edit `scripts/download-og-image.html` JavaScript  
**Visual version:** Edit `scripts/create-og-image.html` HTML/CSS

Both files let you modify:
- Text content (name, title, description)
- Stats badges (years, projects, technologies)
- Colors and styling

