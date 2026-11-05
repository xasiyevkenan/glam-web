import "server-only";
import { BACKEND_API_URL } from "./config";
import { request, type RequestOptions } from "./core";
import { ApiError } from "./errors";
import { getAccessToken } from "@/lib/auth/session";

type ServerRequestOptions = RequestOptions & {
  /**
   * - `none` (default): cookie oxunmur → nəticə keşlənə və statik render oluna bilər (SEO səhifələri).
   * - `optional`: giriş varsa token əlavə olunur (məs. sevimli işarələri).
   * - `required`: token yoxdursa 401 atır.
   */
  auth?: "none" | "optional" | "required";
};

/**
 * Server Component, Server Function və Route Handler-lərdən backend-ə sorğu.
 * Token httpOnly cookie-dən oxunur; refresh `src/proxy.ts`-də edilir.
 */
async function serverRequest<T>(path: string, { auth = "none", headers, ...options }: ServerRequestOptions = {}) {
  const finalHeaders = new Headers(headers);
  if (auth !== "none") {
    const token = await getAccessToken();
    if (token) finalHeaders.set("Authorization", `Bearer ${token}`);
    else if (auth === "required") throw new ApiError(401, "Giriş tələb olunur");
  }
  return request<T>(BACKEND_API_URL, path, { cache: "no-store", ...options, headers: finalHeaders });
}

export const serverApi = {
  get: <T>(path: string, options?: Omit<ServerRequestOptions, "method" | "body">) =>
    serverRequest<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: unknown, options?: Omit<ServerRequestOptions, "method" | "body">) =>
    serverRequest<T>(path, { ...options, method: "POST", body }),
  put: <T>(path: string, body?: unknown, options?: Omit<ServerRequestOptions, "method" | "body">) =>
    serverRequest<T>(path, { ...options, method: "PUT", body }),
  patch: <T>(path: string, body?: unknown, options?: Omit<ServerRequestOptions, "method" | "body">) =>
    serverRequest<T>(path, { ...options, method: "PATCH", body }),
  delete: <T>(path: string, options?: Omit<ServerRequestOptions, "method" | "body">) =>
    serverRequest<T>(path, { ...options, method: "DELETE" }),
};
