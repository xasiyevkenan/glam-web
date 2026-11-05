"use client";

import { BFF_PREFIX } from "./config";
import { request, type RequestOptions } from "./core";

/**
 * Brauzerdən backend-ə sorğu. Sorğu öz domenimizdəki BFF-ə gedir
 * (`/api/backend/...`), o da httpOnly cookie-dəki tokeni əlavə edib backend-ə ötürür.
 * Yol mobil endpointləri ilə eynidir: `api.get(PRODUCT_ENDPOINTS.LIST, { query })`.
 */
type ClientOptions = Omit<RequestOptions, "method" | "body" | "cache">;

export const api = {
  get: <T>(path: string, options?: ClientOptions) =>
    request<T>(BFF_PREFIX, path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: unknown, options?: ClientOptions) =>
    request<T>(BFF_PREFIX, path, { ...options, method: "POST", body }),
  put: <T>(path: string, body?: unknown, options?: ClientOptions) =>
    request<T>(BFF_PREFIX, path, { ...options, method: "PUT", body }),
  patch: <T>(path: string, body?: unknown, options?: ClientOptions) =>
    request<T>(BFF_PREFIX, path, { ...options, method: "PATCH", body }),
  delete: <T>(path: string, options?: ClientOptions) =>
    request<T>(BFF_PREFIX, path, { ...options, method: "DELETE" }),
};

/** Öz route handler-lərimizə (`/api/auth/...`) sorğu. */
export const localApi = {
  get: <T>(path: string, options?: ClientOptions) => request<T>("", path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: unknown, options?: ClientOptions) =>
    request<T>("", path, { ...options, method: "POST", body }),
};
