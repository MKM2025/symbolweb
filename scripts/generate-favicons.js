const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 180];
const outputDir = path.join(__dirname, '../public');

async function generateFavicon(size) {
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="#1e3a8a"/>
      <text x="16" y="16" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">S</text>
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