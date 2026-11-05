/** Giriş tələb edən səhifələr (proxy yönləndirir). URL-lər "Ekranlar" cədvəlindədir. */
export const LOGIN_PATH = "/giris";
export const REGISTER_PATH = "/qeydiyyat";

export const AUTH_REQUIRED_PREFIXES = ["/profil", "/sevimliler", "/chat", "/bildirisler"];
export const STORE_ONLY_PREFIXES = ["/panel"];
/** Daxil olmuş istifadəçi bu səhifələrə girəndə ana səhifəyə qaytarılır. */
export const GUEST_ONLY_PREFIXES = [LOGIN_PATH, REGISTER_PATH, "/sifremi-unutdum"];

export const matchesPrefix = (pathname: string, prefixes: string[]) =>
  prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));

/** `?next=` parametrini yalnız daxili yol olduqda qəbul et (open redirect-in qarşısı). */
export function safeNextPath(next: string | null | undefined, fallback = "/") {
  if (!next || !next.startsWith("/") || next.startsWith("//")) return fallback;
  return next;
}
