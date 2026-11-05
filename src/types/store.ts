/** Mobil `glam-mobile/src/types/store.ts`-dən. */
export type StoreProfile = {
  id: number;
  storeName: string;
  contactPersonName: string;
  avatarInitials: string | null;
  description: string | null;
  isVerified: boolean | null;
  rating: string | null;
  reviewCount: number;
  followerCount: number | null;
  yearsExperience: number | null;
  location: string | null;
  activeListingCount: number;
};

export type StoreSummary = {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  verified?: boolean;
  initials: string;
  avatarColor: string;
  isFollowing?: boolean;
  description?: string;
  listingCount?: number;
  followerCount?: number;
  experienceYears?: number;
};

export type StoreSortOption = "popular" | "newest" | "rating" | "followers";

export type Paginated<T> = { items: T[]; total: number; page: number; pageSize: number; hasMore?: boolean };
