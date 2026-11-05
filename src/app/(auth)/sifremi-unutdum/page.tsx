import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/features/auth/ForgotPasswordForm";

export const metadata: Metadata = { title: "Şifrəni bərpa et", robots: { index: false, follow: true } };

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
