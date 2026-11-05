/** Sinif adlarını birləşdirir (boş dəyərləri atır). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
