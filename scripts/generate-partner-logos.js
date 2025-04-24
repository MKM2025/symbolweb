const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const partnerLogos = [
  'imperva',
  'veeam',
  'eaton',
  'vertiv',
  'dell',
  'mitel',
  'arista',
  'rapid7',
  'forcepoint',
  'symantec',
  'f5',
  'tenable'
];

const outputDir = path.join(__dirname, '../public/images/partners');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateLogo(name) {
  const width = 200;
  const height = 100;
  
  const svg = `
    <svg width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
        ${name}
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(outputDir, `${name}.png`));
  
  console.log(`Generated ${name}.png`);
}

async function generateAll() {
  for (const logo of partnerLogos) {
    await generateLogo(logo);
  }
}

generateAll().catch(console.error); 