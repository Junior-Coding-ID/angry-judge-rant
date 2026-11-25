// Angry Judge: The Short Rant Contest
// Writes one short funny rant about an everyday annoyance to /output/entry.txt.
// Runs with no arguments on Node 22 (TypeScript run as-is).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Why does a fitted sheet go into the dryer as a sheet and come out as a wet bag containing all my other laundry? The dryer says the load is dry because apparently it only interviewed the bag.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf8");
