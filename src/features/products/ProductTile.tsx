"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { useFavorites } from "@/features/favorites/FavoritesProvider";
import { productPath } from "@/lib/slug";
import type { Product } from "@/types/product";

/** ProductCard + sevimli vəziyyəti (müştəri görünüşü). */
export function ProductTile({ product, priority }: { product: Product; priority?: boolean }) {
  const { isFavorite, toggle } = useFavorites();
  return (
    <ProductCard
      product={{ ...product, favorite: isFavorite(product.id) }}
      href={productPath(product)}
      onToggleFavorite={toggle}
      priority={priority}
    />
  );
}
