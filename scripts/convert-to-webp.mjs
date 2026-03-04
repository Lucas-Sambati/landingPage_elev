import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = "src/assets";
const QUALITY = 80;

async function findPngs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findPngs(fullPath)));
    } else if (extname(entry.name).toLowerCase() === ".png") {
      files.push(fullPath);
    }
  }
  return files;
}

async function convert() {
  const pngs = await findPngs(ASSETS_DIR);
  console.log(`Found ${pngs.length} PNG files to convert\n`);

  for (const png of pngs) {
    const webpPath = png.replace(/\.png$/i, ".webp");
    const originalStat = await stat(png);
    const originalKB = (originalStat.size / 1024).toFixed(0);

    await sharp(png).webp({ quality: QUALITY }).toFile(webpPath);

    const newStat = await stat(webpPath);
    const newKB = (newStat.size / 1024).toFixed(0);
    const reduction = (((originalStat.size - newStat.size) / originalStat.size) * 100).toFixed(1);

    console.log(`✓ ${basename(png)} → ${basename(webpPath)}: ${originalKB}KB → ${newKB}KB (-${reduction}%)`);
  }

  console.log("\nDone! Now update your imports to use .webp files.");
}

convert().catch(console.error);
