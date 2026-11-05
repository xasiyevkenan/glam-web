"use client";

import { useMemo, useState } from "react";
import { Icon, Modal, Skeleton } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { City } from "@/types/auth";
import { useCities } from "./useCities";

type Props = {
  open: boolean;
  onClose: () => void;
  onSelect: (city: City) => void;
  selectedCityId?: number | null;
  title?: string;
  subtitle?: string;
  /** Mobil: "Cari məkanımı istifadə et" — profildəki şəhər. */
  userCity?: City | null;
};

const normalize = (s: string) => s.toLocaleLowerCase("az").normalize("NFD").replace(/\p{Diacritic}/gu, "");

/** Mobil `modals/CitySelectModal`: başlıq, axtarış, siyahı, seçilmiş şəhər işarəsi. */
export function CitySelectModal({ open, onClose, onSelect, selectedCityId, title = "Şəhər seçin", subtitle = "Yaxınlıqdakı mağazaları göstərmək üçün", userCity }: Props) {
  const { cities, loading, error } = useCities();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return (cities ?? []).filter((c) => !q || normalize(c.name).includes(q));
  }, [cities, query]);

  const choose = (city: City) => {
    onSelect(city);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="-mt-s2 mb-s3 text-body5 text-text-secondary sm:mt-0">{subtitle}</p>
      <label className="mb-s3 flex h-control items-center rounded-lg border border-border bg-surface-muted px-s3 focus-within:border-primary">
        <Icon name="search" size={17} className="text-text-secondary" />
        <span className="sr-only">Şəhər axtar</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Şəhər axtar"
          className="ml-s1 h-full min-w-0 flex-1 bg-transparent text-body5 text-text-primary outline-none"
        />
      </label>

      {userCity ? (
        <button type="button" onClick={() => choose(userCity)} className="pressable mb-s2 flex w-full items-center gap-s2 rounded-lg bg-primary-light p-s3 text-left">
          <Icon name="mapPin" size={18} className="text-on-primary-light" />
          <span>
            <span className="block text-body4 text-text-primary">Cari məkanımı istifadə et</span>
            <span className="block text-caption1 text-text-muted">Profilinizdəki şəhər təyin olunsun</span>
          </span>
        </button>
      ) : null}

      {loading ? (
        <div className="flex flex-col gap-s3 py-s2">
          {Array.from({ length: 8 }, (_, i) => <Skeleton key={i} className="h-5" />)}
        </div>
      ) : error ? (
        <p role="alert" className="py-s4 text-center text-body5 text-danger">{error}</p>
      ) : filtered.length === 0 ? (
        <p className="py-s4 text-center text-body5 text-text-secondary">Şəhər tapılmadı</p>
      ) : (
        <ul role="listbox" aria-label={title}>
          {filtered.map((city, i) => {
            const selected = city.id === selectedCityId;
            return (
              <li key={city.id} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => choose(city)}
                  className={cn("pressable flex min-h-12 w-full items-center justify-between py-s3 text-left", i < filtered.length - 1 && "border-b border-border-light")}
                >
                  <span className="text-body4 text-text-primary">{city.name}</span>
                  {selected ? (
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary text-on-primary">
                      <Icon name="check" size={12} />
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </Modal>
  );
}
