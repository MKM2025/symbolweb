const sharp = require('sharp');
const path = require('path');

async function generateFavicon() {
  const outputDir = path.join(__dirname, '../public');
  
  // Convert 48x48 PNG to ICO with multiple sizes
  await sharp(path.join(outputDir, 'favicon-48x48.png'))
    .resize(32, 32)
    .toFile(path.join(outputDir, 'favicon.ico'));
  
  console.log('Generated favicon.ico');
}

generateFavicon().catch(console.error); 