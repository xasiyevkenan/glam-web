// tokens.css (mənbə) ilə src/styles/breakpoints.ts eyni olmalıdır.
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/styles/tokens.css", import.meta.url), "utf8");
const ts = readFileSync(new URL("../src/styles/breakpoints.ts", import.meta.url), "utf8");

const fromCss = Object.fromEntries(
  [...css.matchAll(/--breakpoint-([\w]+):\s*([\d.]+)rem/g)].map(([, k, v]) => [k, Number(v) * 16]),
);
const fromTs = Object.fromEntries(
  [...ts.matchAll(/^\s*"?([\w]+)"?:\s*(\d+),/gm)].map(([, k, v]) => [k, Number(v)]),
);

const a = JSON.stringify(fromCss, Object.keys(fromCss).sort());
const b = JSON.stringify(fromTs, Object.keys(fromCss).sort());
if (!Object.keys(fromCss).length || a !== b) {
  console.error("Breakpoint uyğunsuzluğu:\n tokens.css:", fromCss, "\n breakpoints.ts:", fromTs);
  process.exit(1);
}
console.log("breakpoints OK", fromCss);
