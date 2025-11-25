const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  console.log('🚀 Generating OG image...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to OG image dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2, // High DPI for better quality
    });

    // HTML content for the OG image
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      width: 1200px;
      height: 630px;
      overflow: hidden;
    }

    .og-card {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0a0f0a 0%, #0d1f12 50%, #0a1810 100%);
      position: relative;
      overflow: hidden;
    }

    .bg-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
    }

    .orb-1 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, #10b981 0%, transparent 70%);
      top: -100px;
      left: -100px;
    }

    .orb-2 {
      width: 350px;
      height: 350px;
      background: radial-gradient(circle, #34d399 0%, transparent 70%);
      bottom: -100px;
      right: -100px;
    }

    .orb-3 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, #059669 0%, transparent 70%);
      top: 50%;
      right: 20%;
      transform: translateY(-50%);
    }

    .content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 80px 100px;
      height: 100%;
    }

    .logo-container {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 40px;
    }

    .logo {
      width: 80px;
      height: 80px;
      background: rgba(16, 185, 129, 0.1);
      border: 3px solid #10b981;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: 800;
      color: #10b981;
      box-shadow: 0 0 40px rgba(16, 185, 129, 0.3);
    }

    .site-name {
      font-size: 32px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.5px;
    }

    h1 {
      font-size: 72px;
      font-weight: 800;
      background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 0 20px 0;
      line-height: 1.1;
      letter-spacing: -2px;
    }

    .description {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.7);
      max-width: 800px;
      line-height: 1.5;
      margin-bottom: 40px;
    }

    .stats {
      display: flex;
      gap: 30px;
      margin-top: 20px;
    }

    .stat-badge {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 50px;
      padding: 12px 28px;
      font-size: 20px;
      font-weight: 600;
      color: #10b981;
    }

    .grid-pattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <div class="og-card">
    <div class="grid-pattern"></div>
    <div class="bg-orb orb-1"></div>
    <div class="bg-orb orb-2"></div>
    <div class="bg-orb orb-3"></div>

    <div class="content">
      <div class="logo-container">
        <div class="logo">K</div>
        <div class="site-name">Kamsi Kodi</div>
      </div>

      <h1>Full Stack Engineer<br>& AI Specialist</h1>
      
      <div class="description">
        Building modern, scalable web applications with cutting-edge technologies
      </div>

      <div class="stats">
        <div class="stat-badge">6+ Years Experience</div>
        <div class="stat-badge">50+ Projects</div>
        <div class="stat-badge">15+ Technologies</div>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0',
    });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    
    // Small delay to ensure everything is rendered
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take screenshot
    const outputPath = path.join(__dirname, '../public/og-image.jpg');
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 90,
    });

    console.log('✅ OG image generated successfully!');
    console.log(`📁 Saved to: ${outputPath}`);

    // Get file size
    const stats = fs.statSync(outputPath);
    const fileSizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`📊 File size: ${fileSizeInKB} KB`);

  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the script
generateOGImage()
  .then(() => {
    console.log('🎉 Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed:', error);
    process.exit(1);
  });

