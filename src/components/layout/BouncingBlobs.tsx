import type { IconName } from "@/components/icons";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Mobil `common/BouncingBlobs`: primary fon üzərində `overlayOnPrimary` rəngli dairələr içində
 * geyim ikonları (dress, shirt, coat, heel, handbag, hanger) yavaş üzür.
 * Vebdə fizika simulyasiyası əvəzinə yüngül CSS animasiyası; `prefers-reduced-motion`-da dayanır.
 */
const BLOBS: { icon: IconName; size: number; top: string; left: string; dx: number; dy: number; rot: number; dur: number; delay: number }[] = [
  { icon: "dress", size: 64, top: "12%", left: "6%", dx: 40, dy: 24, rot: 14, dur: 14, delay: 0 },
  { icon: "shirt", size: 48, top: "62%", left: "18%", dx: -30, dy: -28, rot: -12, dur: 17, delay: 0.7 },
  { icon: "coat", size: 80, top: "18%", left: "72%", dx: -44, dy: 30, rot: 10, dur: 19, delay: 2.8 },
  { icon: "heel", size: 44, top: "70%", left: "84%", dx: 26, dy: -34, rot: -16, dur: 13, delay: 1.4 },
  { icon: "handbag", size: 56, top: "8%", left: "44%", dx: 34, dy: 36, rot: 12, dur: 16, delay: 5.5 },
  { icon: "hanger", size: 52, top: "58%", left: "56%", dx: -36, dy: -20, rot: -10, dur: 18, delay: 3.6 },
];

export function BouncingBlobs({ className, count = BLOBS.length }: { className?: string; count?: number }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {BLOBS.slice(0, count).map((b, i) => (
        <span
          key={i}
          className="blob absolute flex items-center justify-center rounded-full text-overlay-on-primary"
          style={
            {
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              "--dx": `${b.dx}px`,
              "--dy": `${b.dy}px`,
              "--rot": `${b.rot}deg`,
              animationDuration: `0.35s, ${b.dur}s`,
              animationDelay: `${b.delay}s, ${b.delay}s`,
            } as React.CSSProperties
          }
        >
          <span className="absolute inset-0 rounded-full bg-overlay-on-primary opacity-60" />
          <Icon name={b.icon} size={Math.round(b.size * 0.55)} className="relative text-on-primary-muted opacity-40" />
        </span>
      ))}
    </div>
  );
}
