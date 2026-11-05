// İstifadə: node scripts/console-errors.mjs <url> — brauzer konsolundakı xəta/xəbərdarlıqları göstərir.
import { chromium } from "@playwright/test";
const b = await chromium.launch(); const p = await b.newPage();
p.on("console", m => { if (["error","warning"].includes(m.type())) console.log(m.type(), m.text().slice(0, 4000)); });
await p.goto(process.argv[2], { waitUntil: "networkidle" }); await p.waitForTimeout(1000); await b.close();
