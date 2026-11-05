"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { Button, Icon } from "@/components/ui";
import { formatPhone } from "@/lib/phone";
import { OtpInput } from "./OtpInput";

const RESEND_SECONDS = 59;
const CODE_LENGTH = 4;

/** Mobil `Auth/OTP`. Mobil-də təsdiq və təkrar göndərmə backend-ə qoşulmayıb (TODO) — vebdə də. */
export function OtpForm() {
  const raw = useSearchParams().get("phone") ?? "";
  const phone = raw.startsWith("+994") ? `+994 ${formatPhone(raw.slice(4))}` : raw;
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [loading, setLoading] = useState(false);
  const isComplete = code.every((d) => d.length === 1);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isComplete) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <>
      <Link href="/sifremi-unutdum" aria-label="Geri" className="pressable touch-target relative mb-s4 flex size-circle items-center justify-center rounded-full bg-surface-muted text-text-primary">
        <Icon name="goBack" size={18} />
      </Link>
      <h1 className="text-h2 font-extrabold text-text-primary">Kodu daxil edin</h1>
      <p className="mt-s1 mb-s6 text-body4 text-text-muted">
        {phone ? <span className="font-semibold text-text-primary">{phone}</span> : null} nömrəsinə göndərilən 4 rəqəmli təsdiq kodunu daxil edin
      </p>
      <form onSubmit={onSubmit} noValidate>
        <OtpInput value={code} onChange={setCode} />
        <p className="mt-s3 mb-s5 flex min-h-11 flex-wrap items-center gap-1 text-body5 text-text-muted" aria-live="polite">
          Kodu almadınız?
          {secondsLeft > 0 ? (
            <span className="font-bold text-accent">00:{String(secondsLeft).padStart(2, "0")}</span>
          ) : (
            <button type="button" onClick={() => setSecondsLeft(RESEND_SECONDS)} className="pressable inline-flex min-h-11 items-center font-semibold text-link">
              Kodu yenidən göndər
            </button>
          )}
        </p>
        <Button type="submit" fullWidth disabled={!isComplete} loading={loading}>
          Təsdiqlə
        </Button>
      </form>
      <p className="mt-s4 flex flex-wrap items-center justify-center gap-1 text-body5 text-text-muted">
        Nömrəni səhv daxil etmisiniz?
        <Link href="/sifremi-unutdum" className="pressable inline-flex min-h-11 min-w-11 items-center justify-center text-link">Dəyiş</Link>
      </p>
    </>
  );
}
