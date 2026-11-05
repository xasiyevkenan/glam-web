/** "100.00" → "100", 12.5 → "12.5" */
export function formatAmount(value: number | string | null | undefined): string {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  return Number.isInteger(n) ? String(n) : String(Math.round(n * 100) / 100);
}

/** Mobil ProductCard: min === max ? "min" : "min-max" */
export function formatPriceRange(min: number | string, max: number | string): string {
  const a = formatAmount(min);
  const b = formatAmount(max);
  return a === b ? a : `${a}-${b}`;
}

/** "Ayşən Məmmədova" → "AM" */
export function initialsOf(name: string | null | undefined, max = 2): string {
  if (!name) return "•";
  return (
    name
      .trim()
      .split(/\s+/)
      .slice(0, max)
      .map((p) => p.charAt(0).toLocaleUpperCase("az"))
      .join("") || "•"
  );
}
