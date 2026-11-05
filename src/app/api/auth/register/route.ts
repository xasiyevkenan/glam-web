import { NextResponse } from "next/server";
import { BACKEND_API_URL } from "@/lib/api/config";
import { request } from "@/lib/api/core";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import { writeAuthCookies } from "@/lib/auth/cookies";
import { errorResponse, readJson } from "@/lib/auth/handlers";
import type { AuthResponse } from "@/types/api";
import type { RegisterCustomerPayload, RegisterStorePayload, Store, User } from "@/types/auth";

type Body =
  | ({ accountType: "customer" } & RegisterCustomerPayload)
  | ({ accountType: "store" } & RegisterStorePayload);

/** POST /api/auth/register { accountType: 'customer' | 'store', ...payload } */
export async function POST(req: Request) {
  const body = await readJson<Body>(req);
  if (!body || (body.accountType !== "customer" && body.accountType !== "store")) {
    return NextResponse.json({ success: false, message: "Hesab növü seçilməyib" }, { status: 400 });
  }

  const { accountType, ...payload } = body;
  const path =
    accountType === "store" ? AUTH_ENDPOINTS.REGISTER_STORE : AUTH_ENDPOINTS.REGISTER_CUSTOMER;

  try {
    const res = await request<AuthResponse<User | { user: User; store: Store }>>(
      BACKEND_API_URL,
      path,
      { method: "POST", body: payload, cache: "no-store" },
    );
    const user = "user" in res.data ? res.data.user : res.data;
    const response = NextResponse.json({ success: true, data: user }, { status: 201 });
    writeAuthCookies(response.cookies, res);
    return response;
  } catch (error) {
    return errorResponse(error);
  }
}
