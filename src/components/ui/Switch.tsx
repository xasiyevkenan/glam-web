"use client";

import { cn } from "@/lib/cn";

/** RN `Switch` qarşılığı: trek — border / primary, düymə — white. */
export function Switch({ checked, onChange, label, disabled }: { checked: boolean; onChange: (v: boolean) => void; label: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "touch-target relative inline-flex h-[31px] w-[51px] shrink-0 items-center rounded-full p-0.5 transition-colors disabled:opacity-60",
        checked ? "bg-primary" : "bg-border",
      )}
    >
      <span className={cn("size-[27px] rounded-full bg-white shadow-xs transition-transform", checked && "translate-x-5")} />
    </button>
  );
}
