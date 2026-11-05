"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button, Checkbox, Icon, Input, PhoneInput, useToast } from "@/components/ui";
import { CityPicker } from "@/features/cities/CityPicker";
import { isCompletePhone } from "@/lib/phone";
import type { AccountRole } from "@/types/auth";
import { AccountTypeSelector } from "./AccountTypeSelector";
import { useAuth } from "./AuthProvider";
import { afterAuthPath } from "./redirect";

const MIN_PASSWORD = 8;
const firstName = (name?: string | null) => name?.split(" ")[0] ?? "";

/** Mobil `Auth/Register` + `CustomerRegisterForm` / `StoreRegisterForm`. */
export function RegisterForm() {
  const { register } = useAuth();
  const toast = useToast();
  const router = useRouter();
  const next = useSearchParams().get("next");

  const [role, setRole] = useState<AccountRole>("customer");
  const [fullName, setFullName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [phone, setPhone] = useState("");
  const [cityId, setCityId] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const isStore = role === "store";
  const passwordError = passwordTouched && password.length > 0 && password.length < MIN_PASSWORD ? `Ən azı ${MIN_PASSWORD} simvol` : undefined;
  const isValid =
    fullName.trim().length > 0 &&
    (!isStore || storeName.trim().length > 0) &&
    isCompletePhone(phone) &&
    cityId !== null &&
    password.length >= MIN_PASSWORD &&
    agreed;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid || loading || cityId === null) return;
    setLoading(true);
    const common = { phone, password, cityId, ...(email.trim() ? { email: email.trim() } : {}) };
    try {
      const user = await register(
        isStore
          ? { accountType: "store", storeName: storeName.trim(), contactPersonName: fullName.trim(), ...common }
          : { accountType: "customer", fullName: fullName.trim(), ...common },
      );
      toast.success(
        isStore
          ? `Mağazanız uğurla qeydiyyatdan keçdi, xoş gəldiniz ${firstName(user.full_name)}`
          : `Hesabınız uğurla yaradıldı, xoş gəldiniz ${firstName(user.full_name)}`,
      );
      router.replace(afterAuthPath(user.role, next));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Naməlum xəta baş verdi, yenidən cəhd edin");
      setLoading(false);
    }
  }

  return (
    <>
      <Link href="/giris" aria-label="Geri" className="pressable touch-target relative mb-s4 flex size-circle items-center justify-center rounded-full bg-surface-muted text-text-primary">
        <Icon name="goBack" size={18} />
      </Link>
      <h1 className="text-h2 text-text-primary">Hesab yarat</h1>
      <p className="mt-1 mb-s4 text-body4 text-text-secondary">Necə istifadə etmək istəyirsiniz?</p>

      <AccountTypeSelector role={role} onChange={setRole} />

      <form onSubmit={onSubmit} noValidate>
        {isStore ? (
          <>
            <p className="mb-s3 rounded-md border border-border-soft bg-tint-3 p-s3 text-caption1 leading-[18px] text-text-primary">
              ℹ️ Mağaza hesabları qeydiyyatdan sonra Glam.az komandası tərəfindən 24 saat ərzində təsdiqlənir
            </p>
            <Input label="Mağaza adı" placeholder="Zara Bridal" value={storeName} onChange={(e) => setStoreName(e.target.value)} autoComplete="organization" required />
            <Input label="Əlaqədar şəxsin adı" placeholder="Zeynəb Quliyeva" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" required />
          </>
        ) : (
          <Input label="Ad və Soyad" placeholder="Aysel Cəfərova" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" required />
        )}
        <PhoneInput label="Telefon nömrəsi" value={phone} onChange={setPhone} required />
        <CityPicker value={cityId} onChange={(c) => setCityId(c.id)} required />
        <Input label="E-poçt (istəyə bağlı)" type="email" placeholder="aysel.cafarova@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        <Input
          label="Şifrə"
          placeholder="Ən azı 8 simvol"
          isPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          error={passwordError}
          autoComplete="new-password"
          required
        />
        {/* Məxfilik siyasəti / Satıcı müqaviləsi səhifələri hələ yoxdur — keçid göstərilmir ("Sonraya saxlandı"). */}
        <Checkbox checked={agreed} onChange={setAgreed}>
          İstifadə şərtləri və {isStore ? "Satıcı müqaviləsi" : "Məxfilik siyasəti"} ilə razıyam
        </Checkbox>
        <Button type="submit" fullWidth disabled={!isValid} loading={loading}>
          {isStore ? "Mağazanı qeydiyyatdan keçir" : "Qeydiyyatdan keç"}
        </Button>
      </form>

      <p className="mt-s4 flex flex-wrap items-center justify-center gap-1 text-caption1 text-text-secondary">
        Artıq hesabınız var?
        <Link href="/giris" className="pressable inline-flex min-h-11 min-w-11 items-center justify-center text-link">
          Daxil ol
        </Link>
      </p>
    </>
  );
}
