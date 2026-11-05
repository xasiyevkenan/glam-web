"use client";

import { useId, useState } from "react";
import { Field, Icon, fieldBoxClass } from "@/components/ui";
import type { City } from "@/types/auth";
import { CitySelectModal } from "./CitySelectModal";
import { useCities } from "./useCities";

/** Mobil `common/CityPicker`: input görünüşlü sahə, basanda şəhər modalı. */
export function CityPicker({ label = "Şəhər", value, onChange, required, error }: { label?: string; value: number | null; onChange: (city: City) => void; required?: boolean; error?: string }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const { cities } = useCities();
  const selected = cities?.find((c) => c.id === value);

  return (
    <Field id={id} label={label} required={required} error={error}>
      <button
        id={id}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldBoxClass(error, "pressable w-full justify-between text-left")}
      >
        <span className={selected ? "text-body4 text-text-primary" : "text-body4 text-text-secondary"}>{selected?.name ?? "Seçin"}</span>
        <Icon name="chevronDown" size={16} className="text-text-muted" />
      </button>
      <CitySelectModal open={open} onClose={() => setOpen(false)} onSelect={onChange} selectedCityId={value} />
    </Field>
  );
}
