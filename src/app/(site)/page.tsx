import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";

/** Müvəqqəti ana səhifə — əsl məzmun Addım 3 (Qrup B). */
export default function Home() {
  return (
    <PageShell>
      <EmptyState icon="hanger" title="Glam.az" subtitle="Zərif geyim, bir kirayə uzağında" />
    </PageShell>
  );
}
