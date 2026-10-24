/**
 * setup-images.mjs
 * Run once: node setup-images.mjs
 *
 * Copies the generated AI mineral images from the Antigravity brain directory
 * into public/images/ so Next.js can serve them as local assets.
 *
 * Replace the SOURCE_DIR path below if your user profile folder differs.
 */
import { copyFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const SOURCE_DIR =
  "C:\\Users\\ravik\\.gemini\\antigravity-ide\\brain\\20bf12c2-bfbb-4697-8c01-2fba90774e25";

const DEST_DIR = "./public/images";

const FILES = [
  ["hero_quarry_1792852404158.png", "hero-quarry.png"],
  ["mineral_kaolin_1792852416373.png", "mineral-kaolin.png"],
  ["mineral_bentonite_1792852428281.png", "mineral-bentonite.png"],
  ["mineral_silica_1792852447307.png", "mineral-silica.png"],
  ["mineral_bauxite_1792852458610.png", "mineral-bauxite.png"],
  ["mineral_quartz_1792852472509.png", "mineral-quartz.png"],
];

if (!existsSync(DEST_DIR)) {
  mkdirSync(DEST_DIR, { recursive: true });
  console.log(`Created directory: ${DEST_DIR}`);
}

let copied = 0;
let skipped = 0;

for (const [src, dest] of FILES) {
  const srcPath = join(SOURCE_DIR, src);
  const destPath = join(DEST_DIR, dest);

  if (existsSync(destPath)) {
    console.log(`  ✓ already exists: ${dest}`);
    skipped++;
    continue;
  }

  if (!existsSync(srcPath)) {
    console.warn(`  ✗ source not found: ${src}`);
    continue;
  }

  copyFileSync(srcPath, destPath);
  console.log(`  → copied: ${dest}`);
  copied++;
}

console.log(`\nDone. Copied: ${copied}, Already present: ${skipped}`);
