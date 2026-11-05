import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/PageShell";
import { EditProfileForm } from "@/features/profile/EditProfileForm";

export const metadata: Metadata = { title: "Profili redaktə et", robots: { index: false, follow: false } };

export default function EditProfilePage() {
  return (
    <>
      <PageHeader title="Profili redaktə et" eyebrow="Məlumatlarınızı yeniləyin" backHref="/profil" />
      <Container className="max-w-[640px] py-s5 md:py-s7">
        <EditProfileForm />
      </Container>
    </>
  );
}
