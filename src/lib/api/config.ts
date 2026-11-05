/** Backend ünvanları. Default dəyərlər mobil appın `.env`-i ilə eynidir. */
export const BACKEND_API_URL = (
  process.env.GLAM_API_URL ?? "https://glam-az-backend.onrender.com/api"
).replace(/\/$/, "");

export const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL ?? "https://glam-az-backend.onrender.com";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://glam.az";

/** Brauzerin istifadə etdiyi BFF prefiksi (bax `src/app/api/backend/[...path]/route.ts`). */
export const BFF_PREFIX = "/api/backend";

/** Backend-ə sorğunun maksimum gözləmə müddəti (mobil appda 10 san.). */
export const REQUEST_TIMEOUT_MS = 10_000;
