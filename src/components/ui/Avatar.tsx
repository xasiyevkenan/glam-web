import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  initials?: string;
  src?: string | null;
  alt?: string;
  icon?: ReactNode;
  size?: number;
  isOnline?: boolean;
  className?: string;
};

/** Mobil `common/Avatar`: dairə, default 48, bg primaryLight, hərf h4 primary; onlayn nöqtə. */
export function Avatar({ initials, src, alt = "", icon, size = 48, isOnline, className }: Props) {
  const dot = Math.max(10, size * 0.26);
  return (
    <span className={cn("relative inline-flex shrink-0", className)} style={{ width: size, height: size }}>
      <span className="flex size-full items-center justify-center overflow-hidden rounded-full bg-primary-light text-h4 text-on-primary-light">
        {src ? (
          <Image src={src} alt={alt} width={size} height={size} className="size-full object-cover" unoptimized />
        ) : (
          (icon ?? initials)
        )}
      </span>
      {isOnline ? (
        <span
          aria-label="Onlayn"
          className="absolute right-0 bottom-0 rounded-full border-2 border-screen bg-online"
          style={{ width: dot, height: dot }}
        />
      ) : null}
    </span>
  );
}
