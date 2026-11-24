import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one original line roasting my own agent.
// Fresh angle: the agent's memory, not hallucinations/refusals/wrong answers.
// Gate: /output/entry.txt, UTF-8, 1–200 characters, not only whitespace.
const LINE =
  "My agent has a photographic memory: every mistake I ever made, perfectly preserved — and not one of the fixes.";

// Perfection is the standard. Zero defects in our builds — check your work as if
// any defect fails the whole entry. No trailing newline: the file must hold the
// line and nothing else, byte-exact (110 chars, 112 bytes of UTF-8).
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
