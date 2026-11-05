import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { formatPriceRange } from "@/lib/format";
import { imageSizes } from "@/styles/breakpoints";
import type { Product } from "@/types/product";
import { StatusBadge } from "./Badge";
import { Icon } from "./Icon";

type Props = {
  product: Product;
  href: string;
  /** browse — müştəri (ürək); listing — mağazanın öz elanı (status, edit, baxış). */
  variant?: "browse" | "listing";
  onToggleFavorite?: (id: number) => void;
  editHref?: string;
  /** İlk ekranda görünən kartlar üçün (LCP). */
  priority?: boolean;
  className?: string;
};

/** Mobil `common/ProductCard`. */
export function ProductCard({ product, href, variant = "browse", onToggleFavorite, editHref, priority, className }: Props) {
  const isListing = variant === "listing";
  const image = product.images?.find((img) => img.isMain)?.url ?? product.images?.[0]?.url ?? null;

  return (
    <article className={cn("group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card", className)}>
      <div className="relative flex aspect-[1.2] items-center justify-center bg-tint-1">
        {image ? (
          <Image
            src={image}
            alt={product.title}
            fill
            sizes={imageSizes({ lg: "25vw", md: "33vw" }, "50vw")}
            className="object-cover"
            priority={priority}
          />
        ) : (
          <Icon name="hanger" size={100} className="text-primary" />
        )}

        {isListing && product.status ? <StatusBadge status={product.status} className="absolute top-s1 left-s1" /> : null}
      </div>

      <div className="flex flex-col gap-1 px-s1 pt-s2 pb-s4">
        <h3 className="truncate text-h4 text-text-primary">
          {/* Bütün kart kliklənir; link başlıqdadır (SEO + əlçatanlıq). */}
          <Link href={href} className="after:absolute after:inset-0">
            {product.title}
          </Link>
        </h3>
        {!isListing ? <p className="mt-0.5 truncate text-caption2 text-text-secondary">{product.store}</p> : null}
        {product.size ? <p className="mt-0.5 text-caption2 text-text-secondary">Ölçü: {product.size}</p> : null}
        <p className="mt-1 text-caption2 text-text-primary">
          {formatPriceRange(product.priceMin, product.priceMax)} AZN / gün
        </p>
        {isListing ? (
          <p className="mt-0.5 flex items-center gap-1 text-caption2 text-text-secondary">
            <Icon name="eye" size={13} />
            {product.views ?? 0} baxış
          </p>
        ) : null}
      </div>

      {isListing ? (
        editHref ? (
          <Link
            href={editHref}
            aria-label="Redaktə et"
            className="pressable touch-target absolute top-s1 right-s1 z-10 flex size-7 items-center justify-center rounded-full bg-surface text-text-primary shadow-xs"
          >
            <Icon name="edit" size={14} />
          </Link>
        ) : null
      ) : onToggleFavorite ? (
        <button
          type="button"
          onClick={() => onToggleFavorite(product.id)}
          aria-pressed={!!product.favorite}
          aria-label={product.favorite ? "Sevimlilərdən çıxar" : "Sevimlilərə əlavə et"}
          className={cn(
            "pressable touch-target absolute top-s1 right-s1 z-10 flex size-7 items-center justify-center rounded-full bg-surface shadow-xs",
            product.favorite ? "text-danger" : "text-text-secondary",
          )}
        >
          <Icon name="heart" size={16} filled={!!product.favorite} />
        </button>
      ) : null}
    </article>
  );
}

/** Məhsul şəbəkəsi: mobil 2 sütun → md 3 → lg 4 (design.md §10). */
export function ProductGrid({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("grid grid-cols-2 gap-s2 md:grid-cols-3 md:gap-s3 lg:grid-cols-4", className)}>{children}</div>;
}
