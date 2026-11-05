import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";

/** GET /api/auth/session → { data: User | null }. Client tərəfi sessiyanı yeniləmək üçün. */
export async function GET() {
  const user = await getCurrentUser();
  return NextResponse.json(
    { success: true, data: user },
    { headers: { "Cache-Control": "no-store" } },
  );
}
