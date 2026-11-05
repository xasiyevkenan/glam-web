"use client";

import Link from "next/link";
import { Icon, SettingsListItem, SettingsToggleItem, StatsRow } from "@/components/ui";
import { useThemeScheme } from "@/components/layout/ThemeToggle";
import { initialsOf } from "@/lib/format";
import { setThemeScheme } from "@/styles/theme";
import type { User } from "@/types/auth";
import { LogoutAction } from "./LogoutAction";
import { LogoutButton, SectionLabel, SettingsCard } from "./parts";
import { useProfileStats } from "./useProfileStats";

/** Mobil `Customer/Profile`. Kompüterdə iki sütun: solda kart + statistikalar, sağda ayarlar. */
export function CustomerProfile({ user }: { user: User }) {
  const stats = useProfileStats(true);
  const scheme = useThemeScheme();

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-s7">
      <div className="lg:sticky lg:top-24">
        {/* ProfileCard */}
        <div className="flex items-center rounded-lg border border-border bg-surface p-s3">
          <span className="mr-s3 flex size-[52px] shrink-0 items-center justify-center rounded-full bg-primary-light text-h3 text-on-primary-light">
            {initialsOf(user.full_name)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-h4 text-text-primary">{user.full_name}</p>
            {user.email ? <p className="mt-0.5 truncate text-caption1 text-text-muted">{user.email}</p> : null}
            {user.city ? <p className="mt-0.5 text-caption1 text-text-muted">{user.city.name}</p> : null}
          </div>
          <Link href="/profil/duzelis" aria-label="Profili redaktə et" className="pressable touch-target relative p-1 text-text-muted">
            <Icon name="edit" size={18} />
          </Link>
        </div>
        <div className="mt-s4">
          <StatsRow
            stats={[
              { value: stats?.favorites ?? "—", label: "Sevimli", href: "/sevimliler" },
              { value: stats?.followed ?? "—", label: "İzlədiyim mağazalar", href: "/profil/izlenilenler" },
            ]}
          />
        </div>
      </div>

      <div>
        <SectionLabel>Hesabım</SectionLabel>
        <SettingsCard>
          {/* Mobil-də TODO: rəylər ekranı yoxdur — sətir görünür, heç yerə aparmır. */}
          <SettingsListItem icon="star" title="Rəylərim" subtitle="Mağazalara verdiyiniz qiymətlər" isLast />
        </SettingsCard>

        <SectionLabel>Tənzimləmələr</SectionLabel>
        <SettingsCard>
          <SettingsListItem icon="bell" title="Bildirişlər" subtitle="Push və e-poçt ayarları" href="/bildirisler" />
          {/* Hələlik yalnız Azərbaycan dili (en/ru "Sonraya saxlandı"). */}
          <SettingsListItem icon="globe" title="Dil" subtitle="Azərbaycan" />
          <SettingsToggleItem icon="moon" title="Qaranlıq rejim" checked={scheme === "dark"} onChange={(v) => setThemeScheme(v ? "dark" : "light")} />
          <SettingsListItem icon="help" title="Dəstək" subtitle="Kömək mərkəzi" href="/komek" isLast />
        </SettingsCard>

        <LogoutAction>{(open) => <LogoutButton onClick={open} />}</LogoutAction>
      </div>
    </div>
  );
}
