import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { UiPreview } from "./UiPreview";

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** Yalnız `next dev`-də: ortaq komponentlərin vizual yoxlaması (Playwright ekran görüntüləri üçün). */
export default function Page() {
  if (process.env.NODE_ENV === "production") notFound();
  return <UiPreview />;
}
