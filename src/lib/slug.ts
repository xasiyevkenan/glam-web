const MAP: Record<string, string> = { ə: "e", Ə: "e", ı: "i", I: "i", İ: "i", ş: "s", Ş: "s", ç: "c", Ç: "c", ğ: "g", Ğ: "g", ö: "o", Ö: "o", ü: "u", Ü: "u" };

/** "Axşam donu #102" → "axsam-donu-102" (URL üçün; SEO). */
export function slugify(text: string): string {
  return text
    .replace(/[əƏıIİşŞçÇğĞöÖüÜ]/g, (ch) => MAP[ch] ?? ch)
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/** "/mehsul/3234-ag-don" → 3234 */
export function idFromSlug(param: string): number | null {
  const id = Number.parseInt(param, 10);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export const productPath = (p: { id: number; title: string }) => `/mehsul/${p.id}${slugify(p.title) ? `-${slugify(p.title)}` : ""}`;
export const storePath = (s: { id: number; name: string }) => `/magaza/${s.id}${slugify(s.name) ? `-${slugify(s.name)}` : ""}`;
