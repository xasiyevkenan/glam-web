import type { ReactNode } from "react";
import type { IconName } from "@/components/icons";
import { Icon } from "./Icon";

/** Mobil `common/EmptyState`: 72px dairə + 32px ikon, başlıq h4, alt yazı body4, primary düymə. */
export function EmptyState({ title, subtitle, icon = "store", action }: { title: string; subtitle?: string; icon?: IconName; action?: ReactNode }) {
  return (
    <div className="mb-s7 flex flex-1 flex-col items-center justify-center px-s5 py-s7 text-center">
      <span className="mb-s4 flex size-[72px] items-center justify-center rounded-full border border-border bg-surface text-text-secondary">
        <Icon name={icon} size={32} />
      </span>
      <h2 className="text-h4 text-text-primary">{title}</h2>
      {subtitle ? <p className="mt-s2 max-w-sm text-body4 text-text-secondary">{subtitle}</p> : null}
      {action ? <div className="mt-s5">{action}</div> : null}
    </div>
  );
}
