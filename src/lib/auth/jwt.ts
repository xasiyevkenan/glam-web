/**
 * JWT payload-unu YOXLAMADAN oxuyur (imza yoxlaması backend-dədir).
 * Yalnız vaxtın bitməsini və rolu bilmək üçündür — təhlükəsizlik qərarı üçün deyil.
 */
export type AccessTokenPayload = {
  id: number;
  role: "customer" | "store" | "admin";
  exp: number;
  iat?: number;
};

export function decodeJwt<T = AccessTokenPayload>(token: string | undefined | null): T | null {
  if (!token) return null;
  const part = token.split(".")[1];
  if (!part) return null;
  try {
    const base64 = part.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    return JSON.parse(atob(padded)) as T;
  } catch {
    return null;
  }
}

/** Token yoxdursa, oxunmursa və ya `skewSeconds` ərzində bitəcəksə `true`. */
export function isExpired(token: string | undefined | null, skewSeconds = 30): boolean {
  const payload = decodeJwt<{ exp?: number }>(token);
  if (!payload?.exp) return true;
  return payload.exp * 1000 <= Date.now() + skewSeconds * 1000;
}
