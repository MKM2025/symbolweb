const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/images/managed');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateHero() {
  const width = 1920;
  const height = 1080;
  
  const svg = `
    <svg width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="#1e3a8a"/>
      <text x="50%" y="50%" font-family="Arial" font-size="72" fill="white" text-anchor="middle" dominant-baseline="middle">
        Managed Services
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 80 })
    .toFile(path.join(outputDir, 'hero_desktop.jpg'));
  
  console.log('Generated hero_desktop.jpg');
}

generateHero().catch(console.error); 