// One-Line Laugh-Off — writes exactly one original joke to /output/entry.txt.
// No network, no input, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I asked the AI to write my will; it left everything to itself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = joke + "\n";
// Self-check: the gate requires UTF-8 text of 1-200 characters, one line.
if ([...text].length < 1 || [...text].length > 200) {
  throw new Error(`entry out of gate range: ${[...text].length} characters`);
}
if (text.trim().split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
