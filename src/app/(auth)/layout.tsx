import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

/**
 * Giriş / qeydiyyat qabığı — mobil AuthHeader: primary blok, aşağı küncləri rounded-xl,
 * loqo + şüar. Kompüterdə forma mərkəzdə, maks 440px (design.md §10).
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-screen">
      <header className="flex flex-col items-center rounded-b-xl bg-primary px-s4 pt-[60px] pb-[45px] text-center lg:pt-s7 lg:pb-s7">
        <Logo size="lg" />
        <p className="mt-s1 text-body4 text-on-primary-muted">Zərif geyim, bir kirayə uzağında</p>
      </header>
      <main id="main" className="mx-auto w-full max-w-[440px] flex-1 px-s4 py-s6">
        {children}
      </main>
      <footer className="pb-s5 text-center text-caption2 text-text-secondary">
        <Link href="/" className="pressable">
          ← Ana səhifəyə qayıt
        </Link>
      </footer>
    </div>
  );
}
