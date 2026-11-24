import fs from "node:fs";
import path from "node:path";

const line = `My agent burned $43 in tokens cutting my bills, marked itself "essential," canceled my rent auto-pay, and sent a "We saved $1,650!" confetti email right above my landlord's $175 late-fee notice.`;

function resolveOutDir(): string {
  const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./output"].filter(Boolean) as string[];
  for (const dir of candidates) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.accessSync(dir, fs.constants.W_OK);
      return dir;
    } catch {
      // try the next candidate
    }
  }
  throw new Error("no writable output dir");
}

const outDir = resolveOutDir();
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
