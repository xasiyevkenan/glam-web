"use client";

import { useId, useState, type ComponentProps } from "react";
import type { IconName } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Field, fieldBoxClass } from "./Field";
import { Icon } from "./Icon";

type Props = Omit<ComponentProps<"input">, "size"> & {
  label?: string;
  icon?: IconName;
  isPassword?: boolean;
  error?: string;
  hint?: string;
  containerClassName?: string;
};

/** Mobil `common/AppInput`. */
export function Input({ label, icon, isPassword, error, hint, required, id, type, className, containerClassName, ...rest }: Props) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [visible, setVisible] = useState(false);

  return (
    <Field id={inputId} label={label} required={required} error={error} hint={hint} className={containerClassName}>
      <div className={fieldBoxClass(error)}>
        {icon ? <Icon name={icon} size={18} className="mr-s2 text-text-muted" /> : null}
        <input
          id={inputId}
          required={required}
          type={isPassword ? (visible ? "text" : "password") : type}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn("h-full min-w-0 flex-1 bg-transparent text-body4 text-text-primary outline-none", className)}
          {...rest}
        />
        {isPassword ? (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Şifrəni gizlət" : "Şifrəni göstər"}
            className="pressable -mr-1 p-1 text-text-muted"
          >
            <Icon name={visible ? "eyeOff" : "eye"} size={18} />
          </button>
        ) : null}
      </div>
    </Field>
  );
}
