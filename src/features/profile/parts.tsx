import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/** Mobil profil bölmə başlığı: label, textMuted, böyük hərf, 0.5 letterSpacing. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="mt-s5 mb-s2 text-label tracking-[0.5px] text-text-muted uppercase">{children}</h2>;
}

/** Mobil profil kartı: surface, 1px border, rounded-lg, px 15. */
export function SettingsCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-border bg-surface px-s3", className)}>{children}</div>;
}

/** Mobil "Hesabdan çıxış" düyməsi: h 52, surface, danger mətn. */
export function LogoutButton({ onClick, label = "Hesabdan çıxış" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="pressable mt-s5 flex h-control w-full items-center justify-center gap-s2 rounded-lg border border-border bg-surface text-button text-danger"
    >
      <Icon name="logout" size={18} />
      {label}
    </button>
  );
}
