import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";

export default function NotFound() {
  return (
    <SiteLayout>
      <PageShell>
        <EmptyState
          icon="search"
          title="Səhifə tapılmadı"
          subtitle="Axtardığınız səhifə silinib və ya ünvan səhvdir."
          action={<ButtonLink href="/">Ana səhifə</ButtonLink>}
        />
      </PageShell>
    </SiteLayout>
  );
}
