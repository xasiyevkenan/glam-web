import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { ACCESS_COOKIE, REFRESH_COOKIE } from "./cookies";
import { decodeJwt } from "./jwt";
import { BACKEND_API_URL } from "@/lib/api/config";
import { request } from "@/lib/api/core";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { User } from "@/types/auth";

/**
 * Sessiya oxuma (Data Access Layer). `cookies()` oxuduğu üçün bunu işlədən
 * komponentlər `<Suspense>` içində olmalıdır (Cache Components qaydası).
 */
export async function getAccessToken(): Promise<string | undefined> {
  return (await cookies()).get(ACCESS_COOKIE)?.value;
}

export async function hasSession(): Promise<boolean> {
  const store = await cookies();
  return store.has(ACCESS_COOKIE) || store.has(REFRESH_COOKIE);
}

/** Tokendən rol (sorğusuz). */
export async function getSessionRole() {
  return decodeJwt(await getAccessToken())?.role ?? null;
}

/** Cari istifadəçi (`GET /auth/me`) və ya `null`. Bir render daxilində bir dəfə sorğu gedir. */
export const getCurrentUser = cache(async (): Promise<User | null> => {
  const token = await getAccessToken();
  if (!token) return null;
  try {
    const res = await request<ApiResponse<User>>(BACKEND_API_URL, AUTH_ENDPOINTS.ME, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    return res.data;
  } catch {
    return null;
  }
});
