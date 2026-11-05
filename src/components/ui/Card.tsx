import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Ortaq kart: bg card, 1px border, rounded-lg (mobil kartlar kölgəsizdir). */
export function Card({ className, ...rest }: ComponentProps<"div">) {
  return <div className={cn("rounded-lg border border-border bg-card", className)} {...rest} />;
}

/** Mobil `common/StatCard`: rounded-lg, 1px border, padding 18. */
export function StatCard({ label, value, hint, className }: { label: ReactNode; value: ReactNode; hint?: ReactNode; className?: string }) {
  return (
    <Card className={cn("flex-1 p-s4", className)}>
      <p className="text-caption1 text-text-secondary">{label}</p>
      <p className="mt-1 text-h2 text-text-primary">{value}</p>
      {hint ? <p className="mt-1 text-caption2 text-text-muted">{hint}</p> : null}
    </Card>
  );
}
