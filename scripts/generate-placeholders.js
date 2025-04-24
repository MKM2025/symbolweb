const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const heroImages = [
  { name: 'services-hero.jpg', text: 'Services' },
  { name: 'insights-hero.jpg', text: 'Insights' },
  { name: 'partners-hero.jpg', text: 'Partners' },
  { name: 'clients-hero.jpg', text: 'Clients' }
];

const outputDir = path.join(__dirname, '../public/images/hero');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generatePlaceholder({ name, text }) {
  const width = 1920;
  const height = 1080;
  
  const svg = `
    <svg width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="#1e3a8a"/>
      <text x="50%" y="50%" font-family="Arial" font-size="72" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${text}
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 80 })
    .toFile(path.join(outputDir, name));
  
  console.log(`Generated ${name}`);
}

async function generateAll() {
  for (const image of heroImages) {
    await generatePlaceholder(image);
  }
}

generateAll().catch(console.error); 