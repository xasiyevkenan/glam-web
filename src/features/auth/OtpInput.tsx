"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/** Mobil `auth/OtpInput`: 4 qutu 72×64, rounded-lg, 1.5px; doldurulub — primaryLight + primary haşiyə, mətn h3. */
export function OtpInput({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const setDigit = (index: number, digit: string) => {
    const next = [...value];
    next[index] = digit;
    onChange(next);
  };

  return (
    <div className="mb-s1 flex justify-center gap-s2 sm:justify-start" role="group" aria-label="Təsdiq kodu">
      {value.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={digit}
          inputMode="numeric"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          maxLength={1}
          aria-label={`${i + 1}-ci rəqəm`}
          onChange={(e) => {
            const d = e.target.value.replace(/\D/g, "").slice(-1);
            setDigit(i, d);
            if (d && i < value.length - 1) refs.current[i + 1]?.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !digit && i > 0) refs.current[i - 1]?.focus();
          }}
          onPaste={(e) => {
            const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, value.length).split("");
            if (!digits.length) return;
            e.preventDefault();
            onChange(value.map((_, k) => digits[k] ?? ""));
            refs.current[Math.min(digits.length, value.length - 1)]?.focus();
          }}
          className={cn(
            "h-16 w-[72px] min-w-0 rounded-lg border-[1.5px] text-center text-h3 text-text-primary outline-none focus:border-primary",
            digit ? "border-primary bg-primary-light" : "border-border bg-surface-muted",
          )}
        />
      ))}
    </div>
  );
}
