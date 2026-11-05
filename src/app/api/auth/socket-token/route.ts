import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/auth/session";

/**
 * GET /api/auth/socket-token → { token }.
 * Socket.io brauzerdən birbaşa backend-ə qoşulur və handshake-də access token istəyir.
 * Token qısa ömürlüdür (15 dəq.); refresh token heç vaxt verilmir.
 */
export async function GET() {
  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json({ success: false, message: "Giriş tələb olunur" }, { status: 401 });
  }
  return NextResponse.json({ success: true, token }, { headers: { "Cache-Control": "no-store" } });
}
