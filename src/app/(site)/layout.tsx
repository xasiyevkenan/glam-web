import { SiteLayout } from "@/components/layout/SiteLayout";

export default function Layout({ children }: LayoutProps<"/">) {
  return <SiteLayout>{children}</SiteLayout>;
}
