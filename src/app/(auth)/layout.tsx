import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Icon } from "@/components/ui/Icon";

/**
 * Hesab səhifələrinin qabığı.
 * Telefon: mobil AuthHeader (primary blok, aşağı küncləri rounded-xl, loqo + şüar), altında forma.
 * Kompüter (lg+): iki sütun — solda brend paneli, sağda forma (maks 440px). Qayda 7.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-screen lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <header className="relative flex flex-col items-center overflow-hidden rounded-b-xl bg-primary px-s4 pt-[60px] pb-[45px] text-center lg:sticky lg:top-0 lg:h-dvh lg:justify-center lg:rounded-none lg:px-s7">
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-accent opacity-70 lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-0.5" />
        <div className="absolute top-s2 right-s2 lg:top-s4 lg:right-s4">
          <ThemeToggle />
        </div>
        <Logo size="lg" />
        <p className="mt-s1 text-body4 text-on-primary-muted">Zərif geyim, bir kirayə uzağında</p>
        <ul className="mt-s7 hidden max-w-sm flex-col gap-s3 text-left text-body5 text-on-primary-muted lg:flex">
          {[
            { icon: "hanger", text: "Donlar, kostyumlar, ayaqqabı və aksesuarlar — kirayə ilə" },
            { icon: "stores", text: "Bütün Azərbaycandan mağazalar bir yerdə" },
            { icon: "chat", text: "Mağaza ilə birbaşa yazışma" },
          ].map((item) => (
            <li key={item.text} className="flex items-center gap-s2">
              <span className="flex size-circle shrink-0 items-center justify-center rounded-full border border-overlay-on-primary bg-overlay-on-primary text-accent">
                <Icon name={item.icon as "hanger"} size={18} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </header>
      <div className="flex min-h-[60dvh] flex-col lg:min-h-dvh">
        <main id="main" className="mx-auto flex w-full max-w-[440px] flex-1 flex-col px-s4 pt-s7 pb-s7 lg:justify-center">
          {children}
        </main>
        <footer className="pb-s5 text-center text-caption2 text-text-secondary">
          <Link href="/" className="pressable inline-flex min-h-11 items-center gap-1">
            <Icon name="chevronLeft" size={14} /> Ana səhifəyə qayıt
          </Link>
        </footer>
      </div>
    </div>
  );
}
