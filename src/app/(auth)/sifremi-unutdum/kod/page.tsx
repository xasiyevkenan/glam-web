import type { Metadata } from "next";
import { Suspense } from "react";
import { OtpForm } from "@/features/auth/OtpForm";

export const metadata: Metadata = { title: "Təsdiq kodu", robots: { index: false, follow: false } };

export default function OtpPage() {
  return (
    <Suspense>
      <OtpForm />
    </Suspense>
  );
}
