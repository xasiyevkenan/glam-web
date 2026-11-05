import type { IconName } from "@/components/icons";
import type { AccountRole } from "@/types/auth";

export type NavItem = { href: string; label: string; icon: IconName };

/** Tab-lar — mobil `router/customer/tabConfig.ts` ilə eyni ad, ikon və sıra. */
export const GUEST_NAV: NavItem[] = [
  { href: "/", label: "Əsas", icon: "home" },
  { href: "/magazalar", label: "Mağazalar", icon: "stores" },
  // Mobil-də qonaq "Profil"-ə basanda girişə yönləndirilir.
  { href: "/giris", label: "Profil", icon: "profile" },
];

export const CUSTOMER_NAV: NavItem[] = [
  { href: "/", label: "Ana səhifə", icon: "home" },
  { href: "/magazalar", label: "Mağazalar", icon: "stores" },
  { href: "/sevimliler", label: "Sevimlilər", icon: "heart" },
  { href: "/chat", label: "Chat", icon: "chat" },
  { href: "/profil", label: "Profil", icon: "profile" },
];

export const STORE_NAV: NavItem[] = [
  { href: "/panel", label: "Ana səhifə", icon: "home" },
  { href: "/panel/elanlar", label: "Elanlarım", icon: "listings" },
  { href: "/chat", label: "Chat", icon: "chat" },
  { href: "/profil", label: "Profil", icon: "profile" },
];

export function navFor(role: AccountRole | null | undefined): NavItem[] {
  if (role === "store") return STORE_NAV;
  if (role === "customer") return CUSTOMER_NAV;
  return GUEST_NAV;
}

/** Aktiv tab: dəqiq uyğunluq və ya alt yol ("/" və "/panel" yalnız dəqiq). */
export function isActive(pathname: string, href: string) {
  if (href === "/" || href === "/panel") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const FOOTER_LINKS: { href: string; label: string }[] = [
  // Haqqımızda, Əlaqə, Qaydalar mobildə olmadığı üçün yoxdur (Qayda 10, "Sonraya saxlandı").
  { href: "/", label: "Ana səhifə" },
  { href: "/magazalar", label: "Mağazalar" },
  { href: "/komek", label: "Kömək mərkəzi" },
];
