"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { getEffectiveScheme, setThemeScheme, subscribeTheme, type ThemeScheme } from "@/styles/theme";

const getServerSnapshot = (): ThemeScheme | null => null;

/**
 * Açıq/tünd rejim düyməsi (mobil Profil-dəki "Tünd rejim" açarının qarşılığı).
 * Default sistem seçimidir; basanda əks rejim seçilir və yadda qalır (localStorage + data-theme).
 */
export function ThemeToggle({ className }: { className?: string }) {
  const scheme = useSyncExternalStore(subscribeTheme, getEffectiveScheme, getServerSnapshot);
  const isDark = scheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setThemeScheme(isDark ? "light" : "dark")}
      aria-pressed={scheme ? isDark : undefined}
      aria-label="Tünd rejim"
      title={isDark ? "Açıq rejimə keç" : "Tünd rejimə keç"}
      className={cn(
        "pressable touch-target relative flex size-circle items-center justify-center rounded-full border",
        isDark ? "border-accent bg-primary-dark text-accent" : "border-overlay-on-primary bg-overlay-on-primary text-on-primary",
        className,
      )}
    >
      <Icon name="moon" size={18} />
    </button>
  );
}
