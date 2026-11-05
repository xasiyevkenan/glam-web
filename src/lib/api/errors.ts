/** Backend xətası. Backend cavabı: `{ success: false, message }`. */
export class ApiError extends Error {
  readonly status: number;
  readonly data: unknown;

  constructor(status: number, message: string, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }

  get isUnauthorized() {
    return this.status === 401;
  }
}

export const DEFAULT_ERROR_MESSAGE = "Xəta baş verdi. Yenidən cəhd edin.";

/** Backend iki formada xəta qaytarır: `{ message }` (controller-lər) və `{ error: { message } }` (errorHandler). */
export function messageFrom(body: unknown, fallback = DEFAULT_ERROR_MESSAGE) {
  if (!body || typeof body !== "object") return fallback;
  const b = body as { message?: unknown; error?: unknown };
  const nested = b.error && typeof b.error === "object" ? (b.error as { message?: unknown }).message : b.error;
  for (const candidate of [b.message, nested]) {
    if (typeof candidate === "string" && candidate.trim()) return candidate;
  }
  return fallback;
}

export async function parseBody(res: Response): Promise<unknown> {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
