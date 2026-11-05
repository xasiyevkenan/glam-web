"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { useAuth } from "@/features/auth/AuthProvider";
import { cn } from "@/lib/cn";
import { initialsOf } from "@/lib/format";
import { Logo } from "./Logo";
import { isActive, navFor } from "./navigation";
import { Container } from "./PageShell";
import { ThemeToggle } from "./ThemeToggle";

const glass = "border border-overlay-on-primary bg-overlay-on-primary text-on-primary";

/**
 * Yuxarı menyu. Görünüş mobil ScreenHeader-dən: primary fon, 2px accent alt xətt,
 * "şüşə" dairəvi düymələr (40px), avatar — primaryDark fon + accent haşiyə.
 * Kompüterdə tab-lar burada göstərilir; mobil endə aşağı tab bar (BottomNav) işləyir.
 */
export function Header() {
  const pathname = usePathname();
  const { user, status } = useAuth();
  const items = navFor(user?.role);
  const firstName = user?.full_name?.split(" ")[0] ?? "";

  // Telefonda header düz zolaqdır — altındakı PageHeader / hero onun davamıdır (mobil ScreenHeader kimi tək blok).
  return (
    <header className="sticky top-0 z-40 bg-primary lg:shadow-header">
      <span aria-hidden className="absolute inset-x-0 bottom-0 hidden h-0.5 bg-accent opacity-70 lg:block" />
      <Container className="flex h-16 items-center gap-s4 lg:h-[72px]">
        <Logo />

        <nav aria-label="Əsas menyu" className="ml-s4 hidden flex-1 items-center gap-s1 lg:flex">
          {items
            .filter((item) => !(item.href === "/giris"))
            .map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "pressable flex items-center gap-s1 rounded-full px-s3 py-s1 text-body5",
                    active ? cn(glass, "font-semibold") : "text-on-primary-muted",
                  )}
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </Link>
              );
            })}
        </nav>

        <div className="ml-auto flex items-center gap-s2">
          <ThemeToggle />
          {status === "authenticated" && user ? (
            <>
              <Link href="/bildirisler" aria-label="Bildirişlər" className={cn("pressable touch-target relative flex size-circle items-center justify-center rounded-full", glass)}>
                <Icon name="bell" size={18} />
              </Link>
              <Link href="/profil" aria-label="Profil" className="pressable touch-target relative flex items-center gap-s2">
                <span className="flex size-circle items-center justify-center rounded-full border-[1.5px] border-accent bg-primary-dark text-h4 text-accent">
                  {initialsOf(firstName, 1)}
                </span>
                <span className="hidden max-w-32 truncate text-body5 text-on-primary xl:inline">{firstName}</span>
              </Link>
            </>
          ) : status === "guest" ? (
            <Link
              href="/giris"
              className="pressable touch-target relative inline-flex h-button-sm items-center rounded-lg bg-on-primary px-s3 text-body5 font-semibold text-primary"
            >
              Daxil ol
            </Link>
          ) : (
            <span aria-hidden className="size-circle rounded-full bg-overlay-on-primary" />
          )}
        </div>
      </Container>
    </header>
  );
}
