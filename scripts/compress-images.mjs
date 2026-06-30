/**
 * Compresses all images in public/images/ in-place.
 * PNGs are converted to WebP. JPGs are recompressed at 85% quality.
 * Large PNGs that are screenshots/designs are also produced as WebP at max 1920px wide.
 *
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

const IMAGES_DIR = new URL('../public/images', import.meta.url).pathname;

// Max width for any image served on the site
const MAX_WIDTH = 1920;

// Quality settings
const WEBP_QUALITY = 82;
const JPG_QUALITY = 85;

let totalSavedBytes = 0;
let filesProcessed = 0;

async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)));
    } else if (/\.(png|jpg|jpeg|PNG|JPG|JPEG)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stats = await stat(filePath);
  const originalSize = stats.size;

  try {
    const img = sharp(filePath);
    const meta = await img.metadata();
    const width = meta.width ?? 0;

    const resizeOptions = width > MAX_WIDTH ? { width: MAX_WIDTH, withoutEnlargement: true } : undefined;

    if (ext === '.png') {
      // Convert PNG → WebP
      const webpPath = filePath.replace(/\.png$/i, '.webp');
      await img
        .resize(resizeOptions)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);

      const newStats = await stat(webpPath);
      const saved = originalSize - newStats.size;
      totalSavedBytes += saved;
      filesProcessed++;

      // Replace original with webp
      await unlink(filePath);
      console.log(
        `  PNG→WebP  ${path.relative(IMAGES_DIR, filePath).padEnd(50)} ${(originalSize / 1024).toFixed(0).padStart(6)}KB → ${(newStats.size / 1024).toFixed(0).padStart(6)}KB  (saved ${(saved / 1024).toFixed(0)}KB)`
      );
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // Recompress JPG in-place (temp file then replace)
      const tempPath = filePath + '.tmp';
      await img
        .resize(resizeOptions)
        .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
        .toFile(tempPath);

      const newStats = await stat(tempPath);

      if (newStats.size < originalSize) {
        await unlink(filePath);
        await rename(tempPath, filePath);
        const saved = originalSize - newStats.size;
        totalSavedBytes += saved;
        filesProcessed++;
        console.log(
          `  JPG recompress  ${path.relative(IMAGES_DIR, filePath).padEnd(46)} ${(originalSize / 1024).toFixed(0).padStart(6)}KB → ${(newStats.size / 1024).toFixed(0).padStart(6)}KB  (saved ${(saved / 1024).toFixed(0)}KB)`
        );
      } else {
        // Already well-compressed, remove temp
        await unlink(tempPath);
        console.log(`  JPG skip (already optimal)  ${path.relative(IMAGES_DIR, filePath)}`);
      }
    }
  } catch (err) {
    console.error(`  ERROR processing ${filePath}: ${err.message}`);
  }
}

const files = await getAllFiles(IMAGES_DIR);
console.log(`Found ${files.length} images to process...\n`);

for (const file of files) {
  await compressFile(file);
}

console.log(`\nDone! Processed ${filesProcessed} files.`);
console.log(`Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(1)} MB`);
