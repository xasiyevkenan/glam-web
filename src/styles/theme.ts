/** Tema seçimi (mobil `@app_theme_scheme` qarşılığı). */
export type ThemeScheme = "light" | "dark";
export const THEME_STORAGE_KEY = "glam_theme";

/** <head>-də paint-dən əvvəl işləyir ki, tema "yanıb-sönməsin". */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export function setThemeScheme(scheme: ThemeScheme | "system") {
  const root = document.documentElement;
  if (scheme === "system") {
    delete root.dataset.theme;
    localStorage.removeItem(THEME_STORAGE_KEY);
  } else {
    root.dataset.theme = scheme;
    localStorage.setItem(THEME_STORAGE_KEY, scheme);
  }
}
