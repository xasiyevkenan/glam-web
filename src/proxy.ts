import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, REFRESH_COOKIE, clearAuthCookies, writeAuthCookies } from "@/lib/auth/cookies";
import { decodeJwt, isExpired } from "@/lib/auth/jwt";
import { refreshTokens } from "@/lib/auth/refresh";
import {
  AUTH_REQUIRED_PREFIXES,
  GUEST_ONLY_PREFIXES,
  LOGIN_PATH,
  STORE_ONLY_PREFIXES,
  matchesPrefix,
} from "@/lib/auth/routes";
import type { AuthTokens } from "@/types/api";

/**
 * Hər səhifə və BFF sorğusunda:
 * 1. Access token bitibsə (və ya 30 san. qalıbsa) refresh token ilə yenilənir.
 *    Yeni tokenlər həm cavaba (brauzerə), həm də sorğuya (Server Component / Route Handler) yazılır.
 * 2. Qorunan səhifələr üçün sadə yönləndirmə (əsl yoxlama backend-dədir).
 */
export async function proxy(request: NextRequest) {
  const access = request.cookies.get(ACCESS_COOKIE)?.value;
  const refresh = request.cookies.get(REFRESH_COOKIE)?.value;

  let refreshed: AuthTokens | null = null;
  let sessionLost = false;

  if (refresh && isExpired(access)) {
    refreshed = await refreshTokens(refresh);
    if (refreshed) {
      request.cookies.set(ACCESS_COOKIE, refreshed.accessToken);
      request.cookies.set(REFRESH_COOKIE, refreshed.refreshToken);
    } else {
      request.cookies.delete(ACCESS_COOKIE);
      request.cookies.delete(REFRESH_COOKIE);
      sessionLost = true;
    }
  } else if (!refresh && access && isExpired(access, 0)) {
    request.cookies.delete(ACCESS_COOKIE);
    sessionLost = true;
  }

  const currentAccess = refreshed?.accessToken ?? (sessionLost ? undefined : access);
  const role = currentAccess ? decodeJwt(currentAccess)?.role ?? null : null;

  const { pathname, search } = request.nextUrl;
  let response: NextResponse;

  if (!role && matchesPrefix(pathname, [...AUTH_REQUIRED_PREFIXES, ...STORE_ONLY_PREFIXES])) {
    const url = new URL(LOGIN_PATH, request.url);
    url.searchParams.set("next", `${pathname}${search}`);
    response = NextResponse.redirect(url);
  } else if (role && role !== "store" && matchesPrefix(pathname, STORE_ONLY_PREFIXES)) {
    response = NextResponse.redirect(new URL("/", request.url));
  } else if (role && matchesPrefix(pathname, GUEST_ONLY_PREFIXES)) {
    response = NextResponse.redirect(new URL(role === "store" ? "/panel" : "/", request.url));
  } else {
    response = NextResponse.next({ request: { headers: request.headers } });
  }

  if (refreshed) writeAuthCookies(response.cookies, refreshed);
  else if (sessionLost) clearAuthCookies(response.cookies);

  return response;
}

export const config = {
  matcher: [
    // Statik fayllar, şəkillər və metadata faylları istisnadır.
    "/((?!_next/static|_next/image|brand/|favicon.ico|icon|apple-icon|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|webp|ico|ttf|woff2?)$).*)",
  ],
};
