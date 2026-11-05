import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** AppInput-un etiket + xəta qabığı (mobil: etiket body4, `*` danger, xəta caption2, alt boşluq 18). */
export function Field({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}: {
  id: string;
  label?: ReactNode;
  required?: boolean;
  error?: string;
  hint?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mb-s4", className)}>
      {label ? (
        <label htmlFor={id} className="mb-s1 block text-body4 text-text-primary">
          {label}
          {required ? <span className="text-danger"> *</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-caption2 text-danger">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1 text-caption2 text-text-secondary">{hint}</p>
      ) : null}
    </div>
  );
}

/** Input qutusunun ortaq görünüşü: h 52, rounded-lg, bg surfaceMuted, 1px border (xətada danger), px 15. */
export function fieldBoxClass(error?: string, className?: string) {
  return cn(
    "flex h-control items-center rounded-lg border bg-surface-muted px-s3",
    "focus-within:border-primary",
    error ? "border-danger" : "border-border",
    className,
  );
}
