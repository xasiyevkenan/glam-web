"use client";

import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

/** Mobil `auth/TermsAgreement` checkbox-u: 18px, radius 4, 1.5px haşiyə; seçilib — primary. */
export function Checkbox({ checked, onChange, children, error, className }: { checked: boolean; onChange: (v: boolean) => void; children: ReactNode; error?: string; className?: string }) {
  const id = useId();
  return (
    <div className={cn("mb-s3", className)}>
      <label htmlFor={id} className="flex min-h-11 cursor-pointer items-start gap-s1 py-s1">
        <span className="relative mt-0.5 flex size-[18px] shrink-0 items-center justify-center">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            aria-invalid={error ? true : undefined}
            className="peer absolute inset-0 m-0 cursor-pointer appearance-none rounded-[4px] border-[1.5px] border-border checked:border-primary checked:bg-primary"
          />
          <Icon name="check" size={11} className="pointer-events-none relative text-on-primary opacity-0 peer-checked:opacity-100" />
        </span>
        <span className="text-caption1 text-text-secondary">{children}</span>
      </label>
      {error ? <p role="alert" className="text-caption2 text-danger">{error}</p> : null}
    </div>
  );
}
