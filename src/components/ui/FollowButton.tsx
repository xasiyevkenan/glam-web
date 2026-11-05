"use client";

import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

/** Mobil `common/FollowButton`: pill; izlə — accent fon + "+" ikon, izlənilir — surfaceMuted. Mətn `label`. */
export function FollowButton({ following, onClick, size = "sm", disabled }: { following: boolean; onClick: () => void; size?: "sm" | "md"; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={following}
      className={cn(
        "pressable inline-flex items-center justify-center gap-1 self-start rounded-full border text-label disabled:opacity-60",
        size === "md" ? "px-s4 py-s1" : "px-s3 py-[7px]",
        following ? "border-border bg-surface-muted text-text-primary" : "border-accent bg-accent text-white",
      )}
    >
      {!following ? <Icon name="plus" size={12} /> : null}
      {following ? "İzlənilir" : "İzlə"}
    </button>
  );
}
