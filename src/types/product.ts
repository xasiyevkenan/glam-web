/** Mobil `glam-mobile/src/types/product.ts`-dən. Backend qiymətləri string ("100.00") qaytara bilər. */
export type ProductImage = { id: number; url: string; isMain: boolean };

export type ListingStatus = "active" | "inactive" | "pending" | "sold" | "rejected";
export type ProductCondition = "new" | "like-new" | "used";
export type ProductSortOption = "popular" | "newest" | "price_asc" | "price_desc" | "rating";

export const PRODUCT_SORT_LABELS: Record<ProductSortOption, string> = {
  popular: "Ən populyar",
  newest: "Ən yeni",
  price_asc: "Qiymət: ucuzdan bahaya",
  price_desc: "Qiymət: bahadan ucuza",
  rating: "Reytinqi ən yüksək",
};

export const STATUS_LABELS: Record<ListingStatus, string> = {
  active: "Aktiv",
  pending: "Gözləmədə",
  inactive: "Passiv",
  sold: "Kirayədə",
  rejected: "Rədd edilib",
};

export const CONDITION_LABELS: Record<ProductCondition, string> = {
  new: "Yeni",
  "like-new": "Yeni kimi",
  used: "İşlənmiş",
};

type Price = number | string;

export type Product = {
  id: number;
  title: string;
  description: string | null;
  store: string;
  storeId: number;
  storeAvatarInitials?: string;
  storeRating?: number;
  storeReviewCount?: number;
  storeLocation?: string;
  priceMin: Price;
  priceMax: Price;
  depositAmount: Price;
  size: string | null;
  availableSizes?: string[];
  color: string | null;
  brand: string | null;
  condition: ProductCondition;
  gender: "male" | "female" | "kids" | "unisex" | null;
  category: string;
  images: ProductImage[];
  favorite?: boolean;
  minRentalDays?: number;
  deliveryInfo?: string;
  availableFrom?: string | null;
  availableTo?: string | null;
  status?: ListingStatus;
  views?: number;
};

export type PaginationMeta = { page: number; limit: number; total: number; hasMore: boolean };
