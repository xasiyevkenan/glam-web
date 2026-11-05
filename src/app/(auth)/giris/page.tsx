import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/features/auth/LoginForm";

export const metadata: Metadata = {
  title: "Daxil ol",
  description: "Glam.az hesabınıza telefon nömrəsi və şifrə ilə daxil olun.",
  alternates: { canonical: "/giris" },
};

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
