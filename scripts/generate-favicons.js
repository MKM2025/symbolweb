const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 180];
const outputDir = path.join(__dirname, '../public');

async function generateFavicon(size) {
  // Create an SVG with the exact Symbol Technologies logo
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
        </linearGradient>
      </defs>
      <!-- Main S shape -->
      <path d="
        M 8,8
        L 16,4
        L 24,8
        L 24,12
        L 16,16
        L 24,20
        L 24,24
        L 16,28
        L 8,24
        L 8,20
        L 16,16
        L 8,12
        Z
      " fill="url(#grad)"/>
      <!-- Top hexagon dot -->
      <circle cx="24" cy="8" r="2" fill="url(#grad)"/>
      <!-- Bottom hexagon dot -->
      <circle cx="8" cy="24" r="2" fill="url(#grad)"/>
    </svg>
  `;

  const pngBuffer = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  if (size === 32) {
    // Generate favicon.ico (must be exactly 32x32)
    await sharp(pngBuffer)
      .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('Generated favicon.ico');
  }

  // Generate PNG version
  await sharp(pngBuffer)
    .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
  console.log(`Generated favicon-${size}x${size}.png`);
}

async function generateAll() {
  for (const size of sizes) {
    await generateFavicon(size);
  }
}

generateAll().catch(console.error); 