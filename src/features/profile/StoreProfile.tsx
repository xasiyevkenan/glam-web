"use client";

import { useEffect, useState } from "react";
import { SettingsListItem, SettingsToggleItem, Skeleton, StatsRow } from "@/components/ui";
import { useThemeScheme } from "@/components/layout/ThemeToggle";
import { api } from "@/lib/api/client";
import { STORE_ENDPOINTS } from "@/lib/api/endpoints";
import { initialsOf } from "@/lib/format";
import { setThemeScheme } from "@/styles/theme";
import type { ApiResponse } from "@/types/api";
import type { User } from "@/types/auth";
import type { StoreProfile as StoreProfileData } from "@/types/store";
import { LogoutAction } from "./LogoutAction";
import { SectionLabel, SettingsCard } from "./parts";

/**
 * Mobil `Store/Profile`. Mobil-dəki saxta dəyərlər (kateqoriya "Gəlinlik salonu", rayon, balans 0 AZN)
 * göstərilmir — yalnız `/stores/me` məlumatı. Redaktə, ünvan, bildiriş ayarları mobil-də TODO-dur.
 */
export function StoreProfile({ user }: { user: User }) {
  const [store, setStore] = useState<StoreProfileData | null>(null);
  const scheme = useThemeScheme();

  useEffect(() => {
    let alive = true;
    api
      .get<ApiResponse<StoreProfileData>>(STORE_ENDPOINTS.ME)
      .then((res) => alive && setStore(res.data))
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, []);

  const name = store?.storeName ?? user.full_name;
  const meta = [store?.location, store?.description].filter(Boolean).join(" · ");

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-s7">
      <div className="lg:sticky lg:top-24">
        {/* StoreProfileCard */}
        <div className="relative flex items-center gap-s3 overflow-hidden rounded-lg bg-primary p-s4 shadow-header">
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-accent opacity-70" />
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-dark text-h4 text-accent">{initialsOf(name)}</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-caption2 text-on-primary-muted">Mağaza profili</p>
            <p className="truncate text-h4 text-on-primary">{name}</p>
            {meta ? <p className="truncate text-caption2 text-on-primary-muted">{meta}</p> : null}
          </div>
        </div>
        <div className="mt-s4">
          {store ? (
            <StatsRow
              stats={[
                { value: store.activeListingCount ?? 0, label: "Aktiv elan" },
                { value: store.rating ?? "—", label: "Reytinq" },
              ]}
            />
          ) : (
            <div className="flex gap-s3">
              <Skeleton className="h-[66px] flex-1 rounded-lg" />
              <Skeleton className="h-[66px] flex-1 rounded-lg" />
            </div>
          )}
        </div>
      </div>

      <div>
        <SectionLabel>Mağazam</SectionLabel>
        <SettingsCard>
          <SettingsListItem icon="plus" title="Elan əlavə et" highlighted href="/panel/elan-elave-et" />
          <SettingsListItem icon="pin" title="Mağaza ünvanı" isLast />
        </SettingsCard>

        <SectionLabel>Dəstək</SectionLabel>
        <SettingsCard>
          <SettingsListItem icon="help" title="Kömək mərkəzi" href="/komek" />
          <SettingsListItem icon="bell" title="Bildirişlər" isLast />
        </SettingsCard>

        <SectionLabel>Digər</SectionLabel>
        <SettingsCard>
          <SettingsListItem icon="globe" title="Dil" subtitle="Azərbaycan" />
          <SettingsToggleItem icon="moon" title="Qaranlıq rejim" checked={scheme === "dark"} onChange={(v) => setThemeScheme(v ? "dark" : "light")} />
          <LogoutAction>{(open) => <SettingsListItem icon="logout" title="Çıxış" danger isLast onClick={open} />}</LogoutAction>
        </SettingsCard>
      </div>
    </div>
  );
}
