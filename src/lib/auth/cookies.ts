import { decodeJwt } from "./jwt";

/** httpOnly cookie adları. Tokenlər heç vaxt brauzer JS-inə verilmir (socket tokeni istisna). */
export const ACCESS_COOKIE = "glam_at";
export const REFRESH_COOKIE = "glam_rt";

/** Backend `JWT_REFRESH_EXPIRES=30d`. */
const REFRESH_MAX_AGE = 60 * 60 * 24 * 30;

type CookieWriter = {
  set(name: string, value: string, options: Record<string, unknown>): unknown;
  delete(name: string): unknown;
};

const baseOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
});

/** `NextResponse.cookies`, `request.cookies` və `await cookies()` ilə işləyir. */
export function writeAuthCookies(
  store: CookieWriter,
  tokens: { accessToken: string; refreshToken?: string },
) {
  const exp = decodeJwt(tokens.accessToken)?.exp;
  const accessMaxAge = exp ? Math.max(exp - Math.floor(Date.now() / 1000), 0) : 15 * 60;
  store.set(ACCESS_COOKIE, tokens.accessToken, { ...baseOptions(), maxAge: accessMaxAge });
  if (tokens.refreshToken) {
    store.set(REFRESH_COOKIE, tokens.refreshToken, { ...baseOptions(), maxAge: REFRESH_MAX_AGE });
  }
}

export function clearAuthCookies(store: CookieWriter) {
  store.delete(ACCESS_COOKIE);
  store.delete(REFRESH_COOKIE);
}
