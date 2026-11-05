"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/layout/PageShell";
import { Skeleton } from "@/components/ui";
import { useAuth } from "@/features/auth/AuthProvider";
import { CustomerProfile } from "./CustomerProfile";
import { StoreProfile } from "./StoreProfile";

/** /profil — rol üzrə müştəri və ya mağaza profili. Giriş tələbini proxy yoxlayır. */
export function ProfileView() {
  const { user, status } = useAuth();
  const firstName = user?.full_name?.split(" ")[0] ?? "";

  return (
    <>
      <PageHeader title="Profil" eyebrow={firstName ? `Salam, ${firstName}` : undefined} />
      <Container className="py-s5 md:py-s7">
        {status === "loading" || !user ? (
          <div className="flex flex-col gap-s3" aria-busy>
            <Skeleton className="h-[84px] rounded-lg" />
            <div className="flex gap-s3">
              <Skeleton className="h-[66px] flex-1 rounded-lg" />
              <Skeleton className="h-[66px] flex-1 rounded-lg" />
            </div>
            <Skeleton className="mt-s5 h-40 rounded-lg" />
          </div>
        ) : user.role === "store" ? (
          <StoreProfile user={user} />
        ) : (
          <CustomerProfile user={user} />
        )}
      </Container>
    </>
  );
}
