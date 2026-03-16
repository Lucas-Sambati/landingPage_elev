/**
 * optimize-images.mjs
 * Re-compresses all images at lower quality settings for maximum performance.
 * - Hero images (above fold): quality 65, effort 6 → output to public/img/
 * - Below-fold images (mockups, personagens, feedbacks): quality 68, in-place
 */

import sharp from "sharp";
import fs from "fs";
import { mkdir } from "fs/promises";

const before = [];

function kb(path) {
  return fs.existsSync(path) ? Math.round(fs.statSync(path).size / 1024) : 0;
}

async function recompress(src, dest, quality = 68) {
  const inKB = kb(src);
  // Use buffer approach: avoids file-lock issues on Windows
  const buffer = await sharp(src).webp({ quality, effort: 6 }).toBuffer();
  fs.writeFileSync(dest, buffer);
  const outKB = kb(dest);
  const pct = Math.round(((inKB - outKB) / inKB) * 100);
  before.push({ src, inKB, outKB, pct });
  console.log(`  ✓ ${src.split("/").pop()}: ${inKB}KB → ${outKB}KB  (-${pct}%)`);
}

// ─── 1. Hero images — public/img/ (q65) ────────────────────────────────────
console.log("\n[1/3] Hero images → public/img/ (quality 65)\n");
await mkdir("public/img", { recursive: true });

await recompress(
  "src/assets/hero-bg.webp",
  "public/img/hero-bg.webp",
  65
);
await recompress(
  "src/assets/nosso_personagem_apontando_sem_background.webp",
  "public/img/nosso_personagem_apontando_sem_background.webp",
  65
);

// ─── 2. Below-fold personagem — outside workspace (q65) ─────────────────────
console.log("\n[2/3] Below-fold character (quality 65)\n");
await mkdir("C:/Temp/elev-opt/assets", { recursive: true });
await recompress(
  "src/assets/nosso_personagem_duplo_biceps_sem_background.webp",
  "C:/Temp/elev-opt/assets/nosso_personagem_duplo_biceps_sem_background.webp",
  65
);

// ─── 3. Mockup screenshots — outside workspace (q68) ──────────────────────
console.log("\n[3/3] Mockup screenshots (quality 68)\n");
await mkdir("C:/Temp/elev-opt/newMockup", { recursive: true });
const mockups = [
  "telaTreinos1", "telaTreinos2", "telaPerfil",
  "telaHome", "telaConsultoria1", "telaConsultoria2", "telaConsultoria3",
];
for (const name of mockups) {
  const src = `src/assets/newMockup/${name}.webp`;
  const dest = `C:/Temp/elev-opt/newMockup/${name}.webp`;
  await recompress(src, dest, 68);
}

console.log("\n✅ Done! Now run this PowerShell to apply:");
console.log(`   Copy-Item C:\\Temp\\elev-opt\\assets\\* src\\assets\\ -Force`);
console.log(`   Copy-Item C:\\Temp\\elev-opt\\newMockup\\* src\\assets\\newMockup\\ -Force\n`);

// ─── Summary ────────────────────────────────────────────────────────────────
const totalIn = before.reduce((s, r) => s + r.inKB, 0);
const totalOut = before.reduce((s, r) => s + r.outKB, 0);
const saved = totalIn - totalOut;
console.log(`\n─────────────────────────────────────────────`);
console.log(`Total: ${totalIn}KB → ${totalOut}KB  (saved ${saved}KB / ${Math.round((saved/totalIn)*100)}%)`);
console.log(`─────────────────────────────────────────────\n`);
