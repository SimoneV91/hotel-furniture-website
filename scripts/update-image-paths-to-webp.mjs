import fs from "node:fs/promises";
import path from "node:path";

const PROJECT_ROOT = process.cwd();
const APP_DIR = path.join(PROJECT_ROOT, "app");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const TEXT_FILE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".json"]);

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

function toWebpPath(assetPath) {
  return assetPath.replace(/\.(jpe?g|png)(\?[^"')\s]*)?$/i, ".webp$2");
}

async function exists(absolutePath) {
  try {
    await fs.access(absolutePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const files = await walk(APP_DIR);
  const textFiles = files.filter((file) =>
    TEXT_FILE_EXTENSIONS.has(path.extname(file).toLowerCase()),
  );

  const pattern = /\/immagini\/[^"'`)\s]+\.(?:jpg|jpeg|png)(?:\?[^"'`)\s]*)?/gi;
  let updatedFiles = 0;
  let updatedRefs = 0;
  let skippedRefs = 0;

  for (const file of textFiles) {
    const source = await fs.readFile(file, "utf8");
    let changed = false;

    const replaced = await (async () => {
      let result = "";
      let last = 0;
      let match;
      while ((match = pattern.exec(source)) !== null) {
        const original = match[0];
        const candidate = toWebpPath(original);
        const publicAssetPath = candidate.split("?")[0];
        const absoluteAssetPath = path.join(PUBLIC_DIR, publicAssetPath);

        result += source.slice(last, match.index);
        if (await exists(absoluteAssetPath)) {
          result += candidate;
          updatedRefs += 1;
          changed = true;
        } else {
          result += original;
          skippedRefs += 1;
        }
        last = match.index + original.length;
      }
      result += source.slice(last);
      return result;
    })();

    if (changed) {
      await fs.writeFile(file, replaced, "utf8");
      updatedFiles += 1;
    }
  }

  console.log(
    JSON.stringify(
      {
        scannedFiles: textFiles.length,
        updatedFiles,
        updatedRefs,
        skippedRefs,
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
