import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT_DIR = path.resolve(process.cwd(), "public", "immagini");
const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(entryPath);
      return [entryPath];
    }),
  );
  return files.flat();
}

async function main() {
  const files = await walk(ROOT_DIR);
  const imageFiles = files.filter((file) =>
    SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase()),
  );

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const source of imageFiles) {
    const target = source.replace(/\.(jpe?g|png)$/i, ".webp");

    try {
      await fs.access(target);
      skipped += 1;
      continue;
    } catch {
      // Target does not exist, continue conversion
    }

    try {
      await sharp(source).webp({ quality: 80 }).toFile(target);
      converted += 1;
    } catch (error) {
      failed += 1;
      console.error(`Failed: ${source}`);
      console.error(error);
    }
  }

  console.log(
    JSON.stringify(
      {
        root: ROOT_DIR,
        totalCandidates: imageFiles.length,
        converted,
        skipped,
        failed,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
