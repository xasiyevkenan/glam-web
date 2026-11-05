"use client";

import { localApi } from "@/lib/api/client";

/** Socket.io handshake üçün qısa ömürlü access token (bax `/api/auth/socket-token`). */
export async function getSocketToken(): Promise<string | null> {
  try {
    const res = await localApi.get<{ token: string }>("/api/auth/socket-token");
    return res.token;
  } catch {
    return null;
  }
}
