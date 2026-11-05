import { NextResponse, type NextRequest } from "next/server";
import { BACKEND_API_URL, REQUEST_TIMEOUT_MS } from "@/lib/api/config";
import { ACCESS_COOKIE } from "@/lib/auth/cookies";

/**
 * BFF: brauzer → `/api/backend/<yol>` → backend `/api/<yol>`.
 * Access token httpOnly cookie-dən götürülüb `Authorization: Bearer` kimi əlavə olunur
 * (refresh artıq `src/proxy.ts`-də edilib).
 *
 * Tokenləri qaytaran auth endpointləri buradan keçmir — onlar üçün `/api/auth/*` var.
 * Admin endpointləri də bağlıdır (glam-admin-in işidir).
 */
const BLOCKED = [/^admin(\/|$)/, /^auth\/(login|register|refresh-token|logout|admin)/];

async function forward(request: NextRequest, ctx: RouteContext<"/api/backend/[...path]">) {
  const { path } = await ctx.params;
  const joined = path.map(encodeURIComponent).join("/");

  if (BLOCKED.some((re) => re.test(joined))) {
    return NextResponse.json({ success: false, message: "İcazə yoxdur" }, { status: 403 });
  }

  const headers = new Headers({ Accept: "application/json" });
  const contentType = request.headers.get("content-type");
  if (contentType) headers.set("Content-Type", contentType);
  const token = request.cookies.get(ACCESS_COOKIE)?.value;
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const hasBody = request.method !== "GET" && request.method !== "HEAD";

  let upstream: Response;
  try {
    upstream = await fetch(`${BACKEND_API_URL}/${joined}${request.nextUrl.search}`, {
      method: request.method,
      headers,
      body: hasBody ? await request.arrayBuffer() : undefined,
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS * 3),
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server cavab vermir. Yenidən cəhd edin." },
      { status: 502 },
    );
  }

  const responseHeaders = new Headers();
  const upstreamType = upstream.headers.get("content-type");
  if (upstreamType) responseHeaders.set("Content-Type", upstreamType);
  responseHeaders.set("Cache-Control", "no-store");

  return new NextResponse(upstream.body, { status: upstream.status, headers: responseHeaders });
}

export const GET = forward;
export const POST = forward;
export const PUT = forward;
export const PATCH = forward;
export const DELETE = forward;
