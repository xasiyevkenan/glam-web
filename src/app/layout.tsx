import type { Metadata, Viewport } from "next";
import "./globals.css";
import { montserrat } from "@/styles/fonts";
import { themeInitScript } from "@/styles/theme";
import { SITE_URL } from "@/lib/api/config";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Glam.az — Zərif geyim, bir kirayə uzağında", template: "%s | Glam.az" },
  description: "Glam.az — Azərbaycanda geyim kirayəsi: donlar, kostyumlar, ayaqqabı və aksesuarlar mağazalardan.",
  applicationName: "Glam.az",
};

/** Meta teq CSS dəyişəni qəbul etmir — `primary` və `primaryDark` (tünd) dəyərləri, tokens.css ilə eyni. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e2140" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1428" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="az" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
