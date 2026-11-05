"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button, Icon, PhoneInput } from "@/components/ui";
import { isCompletePhone } from "@/lib/phone";

/**
 * Mobil `Auth/ForgotPassword`. Mobil-də backend-ə qoşulmayıb (TODO, 800ms gözləyib OTP ekranına keçir) —
 * vebdə də eyni səviyyədədir (Qayda 10).
 */
export function ForgotPasswordForm() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const isValid = isCompletePhone(phone);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    setTimeout(() => router.push(`/sifremi-unutdum/kod?phone=${encodeURIComponent(`+994${phone}`)}`), 800);
  }

  return (
    <>
      <Link href="/giris" aria-label="Geri" className="pressable touch-target relative mb-s4 flex size-circle items-center justify-center rounded-full bg-surface-muted text-text-primary">
        <Icon name="goBack" size={18} />
      </Link>
      <h1 className="text-h2 font-extrabold text-text-primary">Şifrəni bərpa et</h1>
      <p className="mt-s1 mb-s6 text-body4 text-text-muted">
        Hesabınıza bağlı telefon nömrəsini daxil edin, biz sizə SMS ilə təsdiq kodu göndərəcəyik
      </p>
      <form onSubmit={onSubmit} noValidate>
        <PhoneInput label="Telefon nömrəsi" value={phone} onChange={setPhone} />
        <Button type="submit" fullWidth disabled={!isValid} loading={loading}>
          Kodu göndər
        </Button>
      </form>
      <p className="mt-s4 flex flex-wrap items-center justify-center gap-1 text-body5 text-text-muted">
        Şifrənizi xatırladınız?
        <Link href="/giris" className="pressable inline-flex min-h-11 min-w-11 items-center justify-center text-link">Daxil ol</Link>
      </p>
    </>
  );
}
