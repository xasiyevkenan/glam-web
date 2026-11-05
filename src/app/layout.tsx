import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glam.az",
  description: "Zərif geyim, bir kirayə uzağında",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
