import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Container } from "./PageShell";

/**
 * Mobil `common/ScreenHeader`: primary fon, aşağı küncləri rounded-xl, altında 2px accent xətt,
 * kiçik üst sətir (caption1, onPrimaryMuted) + accent nöqtə + başlıq (h3, onPrimary).
 * Vebdə səhifənin h1 başlığıdır.
 */
export function PageHeader({ title, eyebrow, backHref, actions }: { title: string; eyebrow?: string; backHref?: string; actions?: ReactNode }) {
  return (
    <section className="relative overflow-hidden rounded-b-xl bg-primary pt-s4 pb-s3 shadow-header lg:rounded-xl">
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-accent opacity-70" />
      <Container className="flex items-center gap-s2">
        {backHref ? (
          <Link
            href={backHref}
            aria-label="Geri"
            className="pressable flex size-circle shrink-0 items-center justify-center rounded-full border border-overlay-on-primary bg-overlay-on-primary text-on-primary"
          >
            <Icon name="chevronLeft" size={18} />
          </Link>
        ) : null}
        <div className="min-w-0 flex-1">
          {eyebrow ? <p className="truncate text-caption1 text-on-primary-muted">{eyebrow}</p> : null}
          <div className="flex items-center">
            <span aria-hidden className="mr-s1 size-1.5 shrink-0 rounded-full bg-accent" />
            <h1 className="truncate text-h3 text-on-primary">{title}</h1>
          </div>
        </div>
        {actions}
      </Container>
    </section>
  );
}
