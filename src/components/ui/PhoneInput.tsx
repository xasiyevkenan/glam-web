"use client";

import { useId, type ComponentProps } from "react";
import { formatPhone } from "@/lib/phone";
import { Field, fieldBoxClass } from "./Field";
import { Icon } from "./Icon";

type Props = Omit<ComponentProps<"input">, "size" | "type" | "onChange" | "value"> & {
  label?: string;
  error?: string;
  value: string;
  /** Yalnız rəqəmlər (maks. 9), məs. "553209707" — backend bu formatı gözləyir. */
  onChange: (digits: string) => void;
};

/** Mobil `common/PhoneInput`: bayraq + "+994" ayırıcı ilə. */
export function PhoneInput({ label, error, required, id, value, onChange, ...rest }: Props) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <Field id={inputId} label={label} required={required} error={error}>
      <div className={fieldBoxClass(error, "pr-s1")}>
        <span className="mr-s2 flex h-6 items-center gap-s1 border-r border-border-light pr-s2 text-body4 text-text-primary">
          <Icon name="azFlag" size={16} />
          +994
        </span>
        <input
          id={inputId}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="(XX) XXX XX XX"
          maxLength={14}
          required={required}
          value={formatPhone(value)}
          onChange={(e) => {
            // Mobil kimi: formatlı mətndən yalnız rəqəmlər; mötərizə/boşluq silinəndə son rəqəm silinir.
            const text = e.target.value;
            let digits = text.replace(/\D/g, "").slice(0, 9);
            if (text.length < formatPhone(value).length && digits.length === value.length) digits = value.slice(0, -1);
            onChange(digits);
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className="h-full min-w-0 flex-1 bg-transparent text-body4 tracking-[0.3px] text-text-primary outline-none"
          {...rest}
        />
      </div>
    </Field>
  );
}
