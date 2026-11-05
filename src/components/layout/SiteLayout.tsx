import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Ümumi səhifə qabığı: yuxarı menyu + məzmun + aşağı hissə (+ mobil tab bar). */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-sm focus:bg-surface focus:px-s2 focus:py-s1">
        Məzmuna keç
      </a>
      <Header />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
      <BottomNav />
    </div>
  );
}
