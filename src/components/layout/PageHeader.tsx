import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

/**
 * Mobil `common/ScreenHeader`: primary fon, aşağı küncləri rounded-xl, altında 2px accent xətt,
 * kiçik üst sətir (caption1, onPrimaryMuted) + accent nöqtə + başlıq (h3, onPrimary). Səhifənin h1-i.
 * Telefonda ekran enində (header-in davamı), kompüterdə məzmun eni ilə üzən kart.
 */
export function PageHeader({ title, eyebrow, backHref, actions, children }: { title: string; eyebrow?: string; backHref?: string; actions?: ReactNode; children?: ReactNode }) {
  return (
    <div className="w-full lg:mx-auto lg:max-w-content lg:px-s6 lg:pt-s5">
      <section className="relative overflow-hidden rounded-b-xl bg-primary px-s4 pt-s4 pb-s3 shadow-header md:px-s6 lg:rounded-xl lg:py-s5">
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-accent opacity-70" />
        <div className="flex items-center gap-s2">
          {backHref ? (
            <Link
              href={backHref}
              aria-label="Geri"
              className="pressable touch-target relative flex size-circle shrink-0 items-center justify-center rounded-full border border-overlay-on-primary bg-overlay-on-primary text-on-primary"
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
        </div>
        {children ? <div className="mt-s3">{children}</div> : null}
      </section>
    </div>
  );
}
