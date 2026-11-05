import Link from "next/link";
import type { ReactNode } from "react";
import type { IconName } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

type RowBase = { href?: string; onClick?: () => void; className?: string; children: ReactNode; isLast?: boolean };

function RowShell({ href, onClick, className, children, isLast }: RowBase) {
  const cls = cn("flex w-full items-center py-s3 text-left", !isLast && "border-b border-border-light", (href || onClick) && "pressable", className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  if (onClick) return <button type="button" onClick={onClick} className={cls}>{children}</button>;
  return <div className={cls}>{children}</div>;
}

/** Mobil `common/ListRow`: 36px avatar + body5 başlıq + sağ element. */
export function ListRow({ title, avatarInitials, avatarSrc, icon, right, ...shell }: Omit<RowBase, "children"> & { title: string; avatarInitials?: string; avatarSrc?: string; icon?: ReactNode; right?: ReactNode }) {
  return (
    <RowShell {...shell}>
      <Avatar size={36} initials={avatarInitials} src={avatarSrc} icon={icon} />
      <span className="ml-s2 min-w-0 flex-1 truncate text-body5 text-text-primary">{title}</span>
      {right ? <span className="ml-s2 flex items-center">{right}</span> : null}
    </RowShell>
  );
}

/** Mobil `common/SettingsListItem`. */
export function SettingsListItem({ icon, title, subtitle, badge, danger, highlighted, ...shell }: Omit<RowBase, "children"> & { icon: IconName; title: string; subtitle?: string; badge?: ReactNode; danger?: boolean; highlighted?: boolean }) {
  return (
    <RowShell {...shell}>
      <span
        className={cn(
          "mr-s3 flex size-9 shrink-0 items-center justify-center rounded-sm",
          danger ? "bg-danger-bg text-danger" : highlighted ? "bg-primary text-on-primary" : "bg-tint-2 text-icon-purple",
        )}
      >
        <Icon name={icon} size={18} />
      </span>
      <span className="min-w-0 flex-1">
        <span className={cn("block text-body4", danger ? "text-danger" : "text-text-primary")}>{title}</span>
        {subtitle ? <span className="mt-0.5 block text-caption1 text-text-muted">{subtitle}</span> : null}
      </span>
      {badge !== undefined ? (
        <span className="min-w-[26px] rounded-full bg-surface-muted px-s2 py-[3px] text-center text-caption1 text-text-primary">{badge}</span>
      ) : !danger ? (
        <Icon name="chevronRight" size={18} className="text-text-muted" />
      ) : null}
    </RowShell>
  );
}
