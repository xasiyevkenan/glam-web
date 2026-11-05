import { NextResponse } from "next/server";
import { BACKEND_API_URL } from "@/lib/api/config";
import { request } from "@/lib/api/core";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import { writeAuthCookies } from "@/lib/auth/cookies";
import { errorResponse, readJson } from "@/lib/auth/handlers";
import type { AuthResponse } from "@/types/api";
import type { LoginPayload, User } from "@/types/auth";

/** POST /api/auth/login { phone, password } → tokenlər cookie-yə, cavabda yalnız istifadəçi. */
export async function POST(req: Request) {
  const body = await readJson<LoginPayload>(req);
  if (!body?.phone || !body?.password) {
    return NextResponse.json(
      { success: false, message: "Telefon nömrəsi və şifrə mütləqdir" },
      { status: 400 },
    );
  }

  try {
    const res = await request<AuthResponse<User>>(BACKEND_API_URL, AUTH_ENDPOINTS.LOGIN, {
      method: "POST",
      body: { phone: body.phone, password: body.password },
      cache: "no-store",
    });
    const response = NextResponse.json({ success: true, data: res.data });
    writeAuthCookies(response.cookies, res);
    return response;
  } catch (error) {
    return errorResponse(error);
  }
}
