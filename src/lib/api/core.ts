import { ApiError, messageFrom, parseBody } from "./errors";
import { toQueryString, type Query } from "./query";
import { REQUEST_TIMEOUT_MS } from "./config";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type RequestOptions = {
  method?: HttpMethod;
  query?: Query;
  /** Obyekt JSON kimi göndərilir; FormData olduğu kimi (şəkil yükləmə). */
  body?: unknown;
  headers?: HeadersInit;
  signal?: AbortSignal;
  /** fetch keşi (server tərəfində). */
  cache?: RequestCache;
};

function isRawBody(body: unknown): body is BodyInit {
  return (
    typeof body === "string" ||
    body instanceof FormData ||
    body instanceof Blob ||
    body instanceof ArrayBuffer ||
    body instanceof URLSearchParams
  );
}

/**
 * Bütün HTTP sorğularının tək nöqtəsi (server və brauzer üçün ortaq).
 * Uğursuz cavabda `ApiError` atır, backend-in `message` mətni ilə.
 */
export async function request<T>(
  baseUrl: string,
  path: string,
  { method = "GET", query, body, headers, signal, cache }: RequestOptions = {},
): Promise<T> {
  const finalHeaders = new Headers(headers);
  finalHeaders.set("Accept", "application/json");

  let payload: BodyInit | undefined;
  if (body !== undefined && body !== null) {
    if (isRawBody(body)) {
      payload = body;
    } else {
      payload = JSON.stringify(body);
      finalHeaders.set("Content-Type", "application/json");
    }
  }

  const timeout = AbortSignal.timeout(REQUEST_TIMEOUT_MS);
  const finalSignal = signal ? AbortSignal.any([signal, timeout]) : timeout;

  let res: Response;
  try {
    res = await fetch(`${baseUrl}${path}${toQueryString(query)}`, {
      method,
      headers: finalHeaders,
      body: payload,
      signal: finalSignal,
      cache,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "TimeoutError") {
      throw new ApiError(408, "Server cavab vermir. Yenidən cəhd edin.");
    }
    if (error instanceof DOMException && error.name === "AbortError") throw error;
    throw new ApiError(0, "İnternet bağlantısını yoxlayın.");
  }

  const data = await parseBody(res);
  if (!res.ok) {
    throw new ApiError(res.status, messageFrom(data), data);
  }
  return data as T;
}
