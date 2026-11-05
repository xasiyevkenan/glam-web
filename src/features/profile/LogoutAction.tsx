"use client";

import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import { ConfirmDialog, useToast } from "@/components/ui";
import { useAuth } from "@/features/auth/AuthProvider";

/** Mobil `LogoutConfirmModal` + çıxış. `children` — modalı açan düymə (render prop). */
export function LogoutAction({ children }: { children: (open: () => void) => ReactNode }) {
  const { logout } = useAuth();
  const toast = useToast();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function confirm() {
    setLoading(true);
    await logout();
    toast.info("Hesabdan çıxış edildi");
    router.replace("/");
  }

  return (
    <>
      {children(() => setOpen(true))}
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={confirm}
        loading={loading}
        icon="logout"
        title="Çıxmaq istəyirsiniz?"
        description="Hesabdan çıxsanız, istənilən vaxt yenidən daxil ola bilərsiniz."
        confirmLabel="Bəli, çıxış et"
        cancelLabel="Ləğv et"
        destructive
      />
    </>
  );
}
