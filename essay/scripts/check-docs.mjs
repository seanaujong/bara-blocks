#!/usr/bin/env node
// Guards the invariant that docs/*.md are exactly what data/*.json would generate.
// Fails (exit 1) on drift instead of letting a hand-edit or a stale doc rot silently.
// Run in CI; `npm run generate` is the fix when this fails.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { loadData, renderAll } from "./lib.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const docsDir = path.join(root, "docs");

const data = loadData(root);
const expected = renderAll(data);

let drift = false;
for (const [name, content] of expected) {
  const onDisk = path.join(docsDir, name);
  if (!existsSync(onDisk)) {
    console.error(`missing: docs/${name} (run \`npm run generate\`)`);
    drift = true;
    continue;
  }
  const actual = readFileSync(onDisk, "utf8");
  if (actual !== content) {
    console.error(`stale: docs/${name} does not match data/ (run \`npm run generate\`)`);
    drift = true;
  }
}

if (drift) {
  process.exit(1);
} else {
  console.log(`docs/ matches data/ (${expected.size} files checked)`);
}
