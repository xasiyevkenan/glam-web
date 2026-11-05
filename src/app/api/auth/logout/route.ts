import { NextResponse, type NextRequest } from "next/server";
import { BACKEND_API_URL } from "@/lib/api/config";
import { request } from "@/lib/api/core";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import { REFRESH_COOKIE, clearAuthCookies } from "@/lib/auth/cookies";

/** POST /api/auth/logout — backend-də refresh tokeni ləğv edir, cookie-ləri silir (mobil kimi: nəticədən asılı olmayaraq). */
export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get(REFRESH_COOKIE)?.value;
  if (refreshToken) {
    await request(BACKEND_API_URL, AUTH_ENDPOINTS.LOGOUT, {
      method: "POST",
      body: { refreshToken },
      cache: "no-store",
    }).catch(() => undefined);
  }
  const response = NextResponse.json({ success: true });
  clearAuthCookies(response.cookies);
  return response;
}
