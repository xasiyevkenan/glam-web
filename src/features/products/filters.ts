/**
 * Kataloq filtrləri ↔ URL (`/kataloq?category=bridal&size=S,M&sort=newest`).
 * URL tək həqiqət mənbəyidir: paylaşıla bilir, server render edir (SEO), geri düyməsi işləyir.
 * Mobil `filterStore` + `useHomeSearch` parametrləri ilə eynidir.
 */
import type { Query } from "@/lib/api/query";
import type { ProductSortOption } from "@/types/product";
import { DEFAULT_SORT, SORT_OPTIONS } from "./options";

export type CatalogFilters = {
  q: string;
  category: string | null;
  sort: ProductSortOption;
  cityId: number | null;
  sizes: string[];
  gender: string | null;
  colors: string[];
  condition: string | null;
  minPrice: string;
  maxPrice: string;
  minRating: number | null;
};

export const EMPTY_FILTERS: CatalogFilters = {
  q: "",
  category: null,
  sort: DEFAULT_SORT,
  cityId: null,
  sizes: [],
  gender: null,
  colors: [],
  condition: null,
  minPrice: "",
  maxPrice: "",
  minRating: null,
};

type Params = Record<string, string | string[] | undefined> | URLSearchParams;

function read(params: Params, key: string): string | undefined {
  if (params instanceof URLSearchParams) return params.get(key) ?? undefined;
  const v = params[key];
  return Array.isArray(v) ? v[0] : v;
}
const list = (v?: string) => (v ? v.split(",").map((s) => s.trim()).filter(Boolean) : []);
const num = (v?: string) => (v && Number.isFinite(Number(v)) && Number(v) >= 0 ? v : "");

export function parseFilters(params: Params): CatalogFilters {
  const sort = read(params, "sort");
  const city = Number(read(params, "city"));
  const rating = Number(read(params, "minRating"));
  const category = read(params, "category");
  return {
    q: (read(params, "q") ?? "").trim().slice(0, 100),
    category: category && category !== "all" ? category : null,
    sort: SORT_OPTIONS.some((o) => o.key === sort) ? (sort as ProductSortOption) : DEFAULT_SORT,
    cityId: Number.isInteger(city) && city > 0 ? city : null,
    sizes: list(read(params, "size")),
    gender: read(params, "gender") || null,
    colors: list(read(params, "color")),
    condition: read(params, "condition") || null,
    minPrice: num(read(params, "minPrice")),
    maxPrice: num(read(params, "maxPrice")),
    minRating: Number.isFinite(rating) && rating > 0 ? rating : null,
  };
}

/** Filtrləri URL query-sinə çevirir (default dəyərlər yazılmır). */
export function filtersToSearch(f: CatalogFilters): string {
  const p = new URLSearchParams();
  if (f.q) p.set("q", f.q);
  if (f.category) p.set("category", f.category);
  if (f.sort !== DEFAULT_SORT) p.set("sort", f.sort);
  if (f.cityId) p.set("city", String(f.cityId));
  if (f.sizes.length) p.set("size", f.sizes.join(","));
  if (f.gender) p.set("gender", f.gender);
  if (f.colors.length) p.set("color", f.colors.join(","));
  if (f.condition) p.set("condition", f.condition);
  if (f.minPrice) p.set("minPrice", f.minPrice);
  if (f.maxPrice) p.set("maxPrice", f.maxPrice);
  if (f.minRating) p.set("minRating", String(f.minRating));
  const s = p.toString();
  return s ? `?${s}` : "";
}

/** Backend `GET /products` parametrləri (mobil `productService.getProducts` kimi). */
export function filtersToApiQuery(f: CatalogFilters, page: number, limit: number): Query {
  return {
    page,
    limit,
    category: f.category ?? undefined,
    cityId: f.cityId ?? undefined,
    search: f.q || undefined,
    size: f.sizes.length ? f.sizes.join(",") : undefined,
    gender: f.gender ?? undefined,
    color: f.colors.length ? f.colors.join(",") : undefined,
    condition: f.condition ?? undefined,
    minRating: f.minRating ?? undefined,
    minPrice: f.minPrice || undefined,
    maxPrice: f.maxPrice || undefined,
    sort: f.sort,
  };
}

/** Mobil `filterStore.countActive` — filtr düyməsindəki sayğac (kateqoriya daxil). */
export function countActiveFilters(f: CatalogFilters): number {
  return (
    (f.category ? 1 : 0) +
    (f.sizes.length ? 1 : 0) +
    (f.gender ? 1 : 0) +
    (f.minPrice || f.maxPrice ? 1 : 0) +
    (f.colors.length ? 1 : 0) +
    (f.condition ? 1 : 0) +
    (f.minRating ? 1 : 0)
  );
}

export const PAGE_SIZE = 20;
