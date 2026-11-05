import { cn } from "@/lib/cn";

/** Mobil `common/Skeleton`: bg surfaceMuted, rounded-sm, nəbz (0.35 ↔ 1, 1.3 san.). */
export function Skeleton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div aria-hidden className={cn("animate-pulse-soft rounded-sm bg-surface-muted", className)} style={style} />;
}

/** Mobil `ProductGridSkeleton`. */
export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <Skeleton className="aspect-[1.2] rounded-none" />
      <div className="flex flex-col gap-s1 px-s1 pt-s2 pb-s4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
  );
}
