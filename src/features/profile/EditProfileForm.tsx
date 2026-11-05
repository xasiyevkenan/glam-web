"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { Button, Icon, Input, Skeleton, useToast } from "@/components/ui";
import { useAuth } from "@/features/auth/AuthProvider";
import { CityPicker } from "@/features/cities/CityPicker";
import { api } from "@/lib/api/client";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { User } from "@/types/auth";
import Link from "next/link";

/** Mobil `Customer/Profile/EditProfile` + `CustomerEditProfileForm` (PUT /auth/me). */
export function EditProfileForm() {
  const { user, refresh } = useAuth();
  if (!user) {
    return (
      <div className="flex flex-col gap-s4" aria-busy>
        {Array.from({ length: 3 }, (_, i) => <Skeleton key={i} className="h-[78px] rounded-lg" />)}
      </div>
    );
  }
  return <Form user={user} onSaved={refresh} />;
}

function Form({ user, onSaved }: { user: User; onSaved: () => Promise<void> }) {
  const router = useRouter();
  const toast = useToast();
  const [fullName, setFullName] = useState(user.full_name);
  const [email, setEmail] = useState(user.email ?? "");
  const [cityId, setCityId] = useState<number | null>(user.city?.id ?? null);
  const [loading, setLoading] = useState(false);

  // Mobil-də redaktə yalnız müştəri üçündür (mağaza profili redaktəsi TODO).
  useEffect(() => {
    if (user.role !== "customer") router.replace("/profil");
  }, [user.role, router]);

  const isDirty = fullName !== user.full_name || email !== (user.email ?? "") || cityId !== (user.city?.id ?? null);
  const isValid = fullName.trim().length > 0 && cityId !== null;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid || !isDirty || loading || cityId === null) return;
    setLoading(true);
    try {
      await api.put<ApiResponse<User>>(AUTH_ENDPOINTS.UPDATE_PROFILE, {
        fullName: fullName.trim(),
        cityId,
        ...(email.trim() ? { email: email.trim() } : {}),
      });
      await onSaved();
      toast.success("Məlumatlarınız uğurla yeniləndi");
      router.push("/profil");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Naməlum xəta baş verdi, yenidən cəhd edin");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <Input label="Ad və Soyad" placeholder="Aysel Cəfərova" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" required />
      <CityPicker value={cityId} onChange={(c) => setCityId(c.id)} required />
      <Input label="E-poçt (istəyə bağlı)" type="email" placeholder="aysel.cafarova@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
      <div className="mt-s2 flex flex-col-reverse gap-s2 sm:flex-row">
        <Link href="/profil" className="pressable inline-flex h-button items-center sm:flex-1 justify-center gap-s1 rounded-lg border border-border text-button text-text-primary">
          <Icon name="chevronLeft" size={16} /> Ləğv et
        </Link>
        <Button type="submit" className="sm:flex-1" disabled={!isValid || !isDirty} loading={loading}>
          Yadda saxla
        </Button>
      </div>
    </form>
  );
}
