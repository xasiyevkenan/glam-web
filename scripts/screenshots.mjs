// İstifadə: node scripts/screenshots.mjs <baseUrl> <outDir> <path1> [path2 ...]
// Hər səhifəni 375/768/1280/1536 enində, light və dark rejimdə çəkir və yoxlayır:
//  - üfüqi scroll (scrollWidth > innerWidth)
//  - telefonda (<=768) 44px-dən kiçik toxunma sahələri (::after touch-target nəzərə alınır)
// Əlavə: PW_ACTIONS env — JSON, {"/dev/ui": [{"click": "text=Sheet", "name": "sheet"}]}
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const [base, out, ...paths] = process.argv.slice(2);
const widths = (process.env.PW_WIDTHS ?? "375,768,1280,1536").split(",").map(Number);
const schemes = (process.env.PW_SCHEMES ?? "light,dark").split(",");
const actions = process.env.PW_ACTIONS ? JSON.parse(process.env.PW_ACTIONS) : {};
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const problems = [];
for (const path of paths) {
  for (const scheme of schemes) {
    for (const width of widths) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: scheme, deviceScaleFactor: 1 });
      const page = await ctx.newPage();
      if (process.env.PW_COOKIE) {
        const [name, value] = process.env.PW_COOKIE.split("=");
        await ctx.addCookies([{ name, value, url: base }]);
      }
      await page.goto(base + path, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(400);
      const slug = path.replace(/[^\w]+/g, "_") || "home";
      const file = `${out}/${slug}-${width}-${scheme}.png`;
      await page.screenshot({ path: file, fullPage: true });

      const res = await page.evaluate((w) => {
        const overflow = document.documentElement.scrollWidth - window.innerWidth;
        const offenders = [];
        if (overflow > 0) {
          for (const el of document.querySelectorAll("body *")) {
            const r = el.getBoundingClientRect();
            if (r.right > window.innerWidth + 1 && getComputedStyle(el).position !== "fixed") offenders.push(el.tagName + "." + String(el.className).slice(0, 60));
            if (offenders.length > 5) break;
          }
        }
        const small = [];
        if (w <= 768) {
          for (const el of document.querySelectorAll("a, button, [role=button], input[type=checkbox]")) {
            const r = el.getBoundingClientRect();
            if (r.width <= 1 || r.height <= 1) continue; // sr-only
            const after = getComputedStyle(el, "::after");
            const aw = after.content !== "none" && after.position === "absolute" ? parseFloat(after.width) : 0;
            const ah = after.content !== "none" && after.position === "absolute" ? parseFloat(after.height) : 0;
            const h = Math.max(r.height, ah), ww = Math.max(r.width, aw);
            if (h < 43.5 || ww < 43.5) small.push(`${el.tagName} "${(el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 30)}" ${Math.round(ww)}x${Math.round(h)}`);
          }
        }
        return { overflow, offenders, small };
      }, width);
      if (res.overflow > 0) problems.push(`${path} ${width} ${scheme}: horizontal overflow ${res.overflow}px ${res.offenders.join(" | ")}`);
      if (res.small.length && scheme === "light") problems.push(`${path} ${width}: small targets: ${[...new Set(res.small)].join("; ")}`);

      for (const a of actions[path] ?? []) {
        await page.click(a.click);
        await page.waitForTimeout(500);
        await page.screenshot({ path: `${out}/${slug}-${a.name}-${width}-${scheme}.png` });
        if (a.after) await page.click(a.after).catch(() => page.keyboard.press("Escape"));
        else await page.keyboard.press("Escape");
        await page.waitForTimeout(300);
      }
      await ctx.close();
    }
  }
}
await browser.close();
console.log(problems.length ? problems.join("\n") : "no problems");
