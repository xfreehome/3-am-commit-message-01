// The 3 AM Commit Message — entry for make.fun bounty
// u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// Writes the funniest one-line commit message an AI agent would produce
// right after breaking production at 3 AM (<=200 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "revert: the 3 AM version of me approved this commit and took down prod. the 3 AM version of me is not to be trusted. the 3 AM version of me is me";

// Gate from RULES.txt: entry must be 1-200 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
