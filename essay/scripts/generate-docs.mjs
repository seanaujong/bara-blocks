#!/usr/bin/env node
// Regenerates essay/docs/*.md from essay/data/*.json. Data is the source of truth;
// never hand-edit a file under docs/ — edit the JSON and rerun this script (or `npm run generate`).
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { loadData, renderAll } from "./lib.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const docsDir = path.join(root, "docs");

const data = loadData(root);
const files = renderAll(data);

mkdirSync(docsDir, { recursive: true });
for (const [name, content] of files) {
  writeFileSync(path.join(docsDir, name), content);
}

console.log(`Generated ${files.size} files into ${path.relative(root, docsDir)}/`);
