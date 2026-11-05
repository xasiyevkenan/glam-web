import type { Metadata } from "next";
import { Suspense } from "react";
import { RegisterForm } from "@/features/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Qeydiyyat",
  description: "Glam.az-da alıcı və ya mağaza hesabı yaradın: geyim kirayə edin və ya kirayəyə verin.",
  alternates: { canonical: "/qeydiyyat" },
};

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  );
}
