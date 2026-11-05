/** Mobil `zustand/searchHistoryStore`: son 12 axtarış, cihazda saxlanılır. */
const KEY = "glam_search_history";
const MAX_HISTORY = 12;

export function readHistory(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(raw) ? raw.filter((s): s is string => typeof s === "string") : [];
  } catch {
    return [];
  }
}

function write(list: string[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // saxlanmasa da axtarış işləyir
  }
  return list;
}

export function addHistory(term: string) {
  const t = term.trim();
  if (!t) return readHistory();
  return write([t, ...readHistory().filter((s) => s.toLocaleLowerCase("az") !== t.toLocaleLowerCase("az"))].slice(0, MAX_HISTORY));
}
export const removeHistory = (term: string) => write(readHistory().filter((s) => s !== term));
export const clearHistory = () => write([]);
