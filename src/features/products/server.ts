import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { serverApi } from "@/lib/api/server";
import { ApiError } from "@/lib/api/errors";
import { PRODUCT_ENDPOINTS } from "@/lib/api/endpoints";
import type { Query } from "@/lib/api/query";
import type { PaginationMeta, Product } from "@/types/product";

export type ProductsPage = { data: Product[]; pagination: PaginationMeta };

/**
 * İctimai məhsul məlumatı — cookie oxumur, keşlənir (SEO səhifələri statik/ISR kimi).
 * Sevimli işarələri client-də `FavoritesProvider` ilə üstünə qoyulur.
 */
export async function getProducts(query: Query): Promise<ProductsPage> {
  "use cache";
  cacheLife("minutes");
  cacheTag("products");
  return serverApi.get<ProductsPage>(PRODUCT_ENDPOINTS.LIST, { query });
}

/** `GET /products/:id` (glam-backend `web-support`). Tapılmasa `null`. */
export async function getProduct(id: number): Promise<Product | null> {
  "use cache";
  cacheLife("minutes");
  cacheTag("products", `product:${id}`);
  try {
    const res = await serverApi.get<{ data: Product }>(`${PRODUCT_ENDPOINTS.LIST}/${id}`);
    return res.data;
  } catch (error) {
    if (error instanceof ApiError && (error.status === 404 || error.status === 400)) return null;
    throw error;
  }
}
