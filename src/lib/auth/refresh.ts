import { BACKEND_API_URL } from "@/lib/api/config";
import { request } from "@/lib/api/core";
import type { AuthTokens } from "@/types/api";

/**
 * Backend refresh tokeni hər dəfə dəyişir (rotation) və istifadəçi başına bir dənədir.
 * Eyni anda gələn bir neçə sorğu köhnə tokenlə refresh etsə, ikincisi 401 alıb
 * istifadəçini çıxarar. Ona görə:
 *  - eyni refresh token üçün yalnız bir sorğu gedir (single-flight),
 *  - nəticə 30 san. yadda saxlanılır ki, gecikən sorğular da eyni yeni tokenləri alsın.
 * Qeyd: bu, bir server prosesi daxilində işləyir.
 */
const inflight = new Map<string, Promise<AuthTokens | null>>();
const recent = new Map<string, { tokens: AuthTokens; at: number }>();
const GRACE_MS = 30_000;

export function refreshTokens(refreshToken: string): Promise<AuthTokens | null> {
  const cached = recent.get(refreshToken);
  if (cached && Date.now() - cached.at < GRACE_MS) return Promise.resolve(cached.tokens);

  const pending = inflight.get(refreshToken);
  if (pending) return pending;

  const promise = request<AuthTokens & { success: boolean }>(BACKEND_API_URL, "/auth/refresh-token", {
    method: "POST",
    body: { refreshToken },
    cache: "no-store",
  })
    .then(({ accessToken, refreshToken: next }) => {
      const tokens = { accessToken, refreshToken: next };
      recent.set(refreshToken, { tokens, at: Date.now() });
      for (const [key, value] of recent) {
        if (Date.now() - value.at > GRACE_MS) recent.delete(key);
      }
      return tokens;
    })
    .catch(() => null)
    .finally(() => inflight.delete(refreshToken));

  inflight.set(refreshToken, promise);
  return promise;
}
