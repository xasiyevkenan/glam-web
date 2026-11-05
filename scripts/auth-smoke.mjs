// Real giriş yoxlaması. İstifadə: node --env-file=.env.local scripts/auth-smoke.mjs <baseUrl> <store|customer>
// TEST_STORE_PHONE / TEST_CUSTOMER_PHONE və TEST_PASSWORD .env.local-dan oxunur;
// dəyərlər heç vaxt çap olunmur, ekran görüntüsü alınmır. Yalnız giriş/oxuma/çıxış — hesab dəyişdirilmir.
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? "http://localhost:3458";
const expectedRole = process.argv[3] === "customer" ? "customer" : "store";
const phone = ((expectedRole === "customer" ? process.env.TEST_CUSTOMER_PHONE : process.env.TEST_STORE_PHONE) ?? "").replace(/\D/g, "").replace(/^994/, "").slice(-9);
const password = process.env.TEST_PASSWORD ?? "";
if (!phone || !password) {
  console.log(`FAIL: ${expectedRole === "customer" ? "TEST_CUSTOMER_PHONE" : "TEST_STORE_PHONE"} / TEST_PASSWORD tapılmadı`);
  process.exit(1);
}

const results = [];
const check = (name, ok) => results.push(`${ok ? "PASS" : "FAIL"}: ${name}`);
const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();
const authCookies = async () => (await ctx.cookies()).filter((c) => c.name === "glam_at" || c.name === "glam_rt");

try {
  await page.goto(`${base}/giris`, { waitUntil: "networkidle", timeout: 90000 });
  await page.fill('input[type="tel"]', phone);
  await page.fill('input[autocomplete="current-password"]', password);
  await page.click('button[type="submit"]');
  await page.waitForURL((u) => !u.pathname.startsWith("/giris"), { timeout: 60000 });
  check("giriş sonrası /giris-dən yönləndirildi", true);

  const cookies = await authCookies();
  check("httpOnly auth cookie-ləri yazıldı", cookies.length === 2 && cookies.every((c) => c.httpOnly));
  const role = await page.evaluate(async () => (await (await fetch("/api/auth/session")).json()).data?.role ?? null);
  check(`sessiya oxunur, rol gözlənilən kimidir (${role})`, role === expectedRole);

  await page.goto(`${base}/profil`, { waitUntil: "networkidle" });
  check("/profil açılır", new URL(page.url()).pathname === "/profil" && (await page.locator("h1", { hasText: "Profil" }).count()) > 0);
  await page.waitForSelector("text=Qaranlıq rejim", { timeout: 30000 });
  check("profil məzmunu yükləndi", true);

  await page.reload({ waitUntil: "networkidle" });
  await page.waitForSelector("text=Qaranlıq rejim", { timeout: 30000 });
  check("yeniləyəndən sonra sessiya qalır", new URL(page.url()).pathname === "/profil");

  const tokenVisible = await page.evaluate(() => document.cookie.includes("glam_at") || document.cookie.includes("glam_rt"));
  check("tokenlər JS-ə görünmür (document.cookie)", !tokenVisible);

  await page.click(role === "store" ? "button:has-text('Çıxış')" : "button:has-text('Hesabdan çıxış')");
  await page.click("button:has-text('Bəli, çıxış et')");
  await page.waitForURL((u) => u.pathname === "/", { timeout: 30000 });
  check("çıxışdan sonra ana səhifəyə yönləndirildi", true);
  check("çıxış cookie-ləri sildi", (await authCookies()).length === 0);

  await page.goto(`${base}/profil`, { waitUntil: "networkidle" });
  check("çıxışdan sonra /profil → /giris", new URL(page.url()).pathname === "/giris");
} catch (e) {
  check(`gözlənilməz xəta: ${String(e.message).split("\n")[0].slice(0, 120)}`, false);
} finally {
  await browser.close();
}
console.log(`[${expectedRole}]\n` + results.join("\n"));
process.exitCode = results.some((r) => r.startsWith("FAIL")) ? 1 : 0;
