"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button, ButtonLink, Input, PhoneInput, useToast } from "@/components/ui";
import { isCompletePhone } from "@/lib/phone";
import { useAuth } from "./AuthProvider";
import { AuthDivider } from "./AuthDivider";
import { afterAuthPath } from "./redirect";

/** Mobil `Auth/Login`. */
export function LoginForm() {
  const { login } = useAuth();
  const toast = useToast();
  const router = useRouter();
  const next = useSearchParams().get("next");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid = isCompletePhone(phone) && password.length > 0;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid || loading) return;
    setLoading(true);
    try {
      const user = await login({ phone, password });
      toast.success(`Xoş gəldiniz, ${user.full_name?.split(" ")[0] ?? ""}`);
      router.replace(afterAuthPath(user.role, next));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Naməlum xəta baş verdi, yenidən cəhd edin");
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="text-h2 font-extrabold text-text-primary">Xoş gəldiniz</h1>
      <p className="mt-s1 mb-[27px] text-body4 text-text-muted">Hesabınıza daxil olun</p>

      <form onSubmit={onSubmit} noValidate>
        <PhoneInput label="Telefon nömrəsi" value={phone} onChange={setPhone} autoComplete="username" required />
        <Input
          label="Şifrə"
          icon="lock"
          placeholder="Şifrə daxil et"
          isPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          containerClassName="mb-s2"
        />
        <div className="mb-s4 flex justify-end">
          <Link href="/sifremi-unutdum" className="pressable inline-flex min-h-11 items-center text-body5 text-link">
            Şifrəmi unutdum
          </Link>
        </div>
        <Button type="submit" fullWidth disabled={!isValid} loading={loading}>
          Daxil ol
        </Button>
      </form>

      <AuthDivider />
      {/* Mobil "Qonaq kimi daxil ol": vebdə qonaq sadəcə girişsiz baxır. */}
      <ButtonLink href="/" variant="secondary" fullWidth>
        Qonaq kimi daxil ol
      </ButtonLink>

      <p className="mt-s4 flex flex-wrap items-center justify-center gap-1 text-body5 text-text-muted">
        Hesabın yoxdur?
        <Link href="/qeydiyyat" className="pressable inline-flex min-h-11 min-w-11 items-center justify-center text-link">
          Qeydiyyatdan keç
        </Link>
      </p>
    </>
  );
}
