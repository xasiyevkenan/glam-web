import Link from "next/link";
import { Logo } from "./Logo";
import { FOOTER_LINKS } from "./navigation";
import { Container } from "./PageShell";

/** Aşağı hissə. Mobil appda qarşılığı yoxdur — brend rəngləri ilə sadə blok (primaryDark fon, accent xətt). */
export function Footer() {
  return (
    <footer className="relative mt-s7 bg-primary-dark pt-s7 pb-[calc(var(--space-7)+96px)] text-on-primary-muted lg:pb-s7">
      <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-accent opacity-70" />
      <Container className="flex flex-col gap-s6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-s3 text-body5">Zərif geyim, bir kirayə uzağında</p>
        </div>
        <nav aria-label="Məlumat">
          <ul className="flex flex-wrap gap-x-s6 text-body5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="pressable inline-flex min-h-11 items-center text-on-primary-muted hover:text-on-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="mt-s6 border-t border-overlay-on-primary pt-s4 text-caption2">
        © Glam.az
      </Container>
    </footer>
  );
}
