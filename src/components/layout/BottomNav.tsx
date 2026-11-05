"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { useAuth } from "@/features/auth/AuthProvider";
import { cn } from "@/lib/cn";
import { isActive, navFor } from "./navigation";

/**
 * Mobil tab bar (CustomerTabBar + TabBarIcon): bg surface, rounded-xl, 1px borderLight, shadow-nav;
 * ikon 20, aktiv — 40×32 pill primaryLight + navActive, etiket tiny (aktiv 600).
 * Yalnız kiçik ekranlarda (lg-dən aşağı).
 */
export function BottomNav() {
  const pathname = usePathname();
  const { user } = useAuth();
  const items = navFor(user?.role);

  return (
    <nav
      aria-label="Alt menyu"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center rounded-t-xl border-x border-t border-border-light bg-surface px-s5 pt-s2 pb-[max(var(--space-5),env(safe-area-inset-bottom))] shadow-nav lg:hidden"
    >
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn("pressable flex flex-1 flex-col items-center justify-center", active ? "text-nav-active" : "text-nav-inactive")}
          >
            <span className={cn("flex h-8 w-10 items-center justify-center rounded-full transition-transform", active ? "scale-100 bg-primary-light" : "scale-[0.92]")}>
              <Icon name={item.icon} size={20} />
            </span>
            <span className={cn("mt-0.5 truncate text-tiny", active && "font-semibold")}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
