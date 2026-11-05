import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { STATUS_LABELS, type ListingStatus } from "@/types/product";

type Variant = "primary" | "accent" | "muted";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-primary",
  accent: "bg-badge-gold/15 text-accent",
  muted: "bg-surface-muted text-text-muted",
};

/** Mobil `common/Badge`: pill, px 12 py 4, caption2 600. */
export function Badge({ variant = "muted", className, children }: { variant?: Variant; className?: string; children: ReactNode }) {
  return (
    <span className={cn("inline-flex self-start rounded-full px-s2 py-1 text-caption2 font-semibold", variants[variant], className)}>
      {children}
    </span>
  );
}

const statusStyles: Record<ListingStatus, string> = {
  active: "bg-tint-4 text-status-active",
  pending: "bg-tint-3 text-status-pending",
  inactive: "bg-tint-2 text-status-inactive",
  rejected: "bg-tint-2 text-status-sold",
  sold: "bg-tint-2 text-status-sold",
};

/** Elan statusu (mobil ProductCard `getStatusStyle`). */
export function StatusBadge({ status, className }: { status: ListingStatus; className?: string }) {
  return (
    <span className={cn("inline-flex rounded-full px-s1 py-[3px] text-tiny font-semibold", statusStyles[status], className)}>
      {STATUS_LABELS[status]}
    </span>
  );
}
