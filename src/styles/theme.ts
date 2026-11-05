/** Tema seçimi (mobil `@app_theme_scheme` qarşılığı). */
export type ThemeScheme = "light" | "dark";
export const THEME_STORAGE_KEY = "glam_theme";
const THEME_EVENT = "glam-theme-change";

/** <head>-də paint-dən əvvəl işləyir ki, tema "yanıb-sönməsin". */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export function setThemeScheme(scheme: ThemeScheme | "system") {
  const root = document.documentElement;
  try {
    if (scheme === "system") {
      delete root.dataset.theme;
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      root.dataset.theme = scheme;
      localStorage.setItem(THEME_STORAGE_KEY, scheme);
    }
  } catch {
    // localStorage bağlıdırsa seçim yalnız bu səhifədə qalır
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

/** Hazırda görünən rejim: əl ilə seçim, yoxdursa sistem. */
export function getEffectiveScheme(): ThemeScheme {
  const manual = document.documentElement.dataset.theme;
  if (manual === "light" || manual === "dark") return manual;
  return darkQuery().matches ? "dark" : "light";
}

export function subscribeTheme(callback: () => void) {
  const mq = darkQuery();
  mq.addEventListener("change", callback);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    mq.removeEventListener("change", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}
