/** Mobil `glam-mobile/src/data/productOptions.ts` və `utils/formatters.ts`-dən. */
import type { ProductSortOption } from "@/types/product";

export type Option = { key: string; label: string };

/** Ana səhifə chip-ləri. Backend `category` dəyəri bu açarlardır (bridal, evening, ...). */
export const CATEGORIES: Option[] = [
  { key: "all", label: "Hamısı" },
  { key: "bridal", label: "Gəlinlik" },
  { key: "evening", label: "Don" },
  { key: "suit", label: "Kostyum" },
  { key: "accessory", label: "Aksesuar" },
  { key: "shoes", label: "Ayaqqabı" },
  { key: "national", label: "Milli geyim" },
];

/** Köhnə/əl ilə daxil edilmiş kateqoriyalar üçün ad xəritəsi (CATEGORY_OPTIONS). */
const CATEGORY_SLUG_LABELS: Record<string, string> = {
  gelinlik: "Gəlinlik",
  "axsam-geyimi": "Don",
  kostyum: "Kostyum",
  "milli-geyim": "Milli geyim",
  "gundelik-geyim": "Gündəlik geyim",
  ayaqqabi: "Ayaqqabı",
  canta: "Çanta",
  "zinet-esyalari": "Zinət əşyaları",
  aksesuar: "Aksesuar",
};

export const categoryLabel = (key?: string | null) =>
  key ? (CATEGORIES.find((c) => c.key === key)?.label ?? CATEGORY_SLUG_LABELS[key] ?? key) : null;

export const GENDERS: Option[] = [
  { key: "female", label: "Qadın" },
  { key: "male", label: "Kişi" },
  { key: "kids", label: "Uşaq" },
  { key: "unisex", label: "Uniseks" },
];
export const genderLabel = (key?: string | null) => (key ? (GENDERS.find((g) => g.key === key)?.label ?? key) : null);

export const CONDITIONS: Option[] = [
  { key: "new", label: "Yeni (etiketli)" },
  { key: "like-new", label: "Az istifadə olunub" },
  { key: "used", label: "İstifadə olunub" },
];
const CONDITION_DETAIL_LABELS: Record<string, string> = { new: "Yeni", like_new: "Az istifadə olunub", "like-new": "Az istifadə olunub", used: "İstifadə olunub" };
export const conditionLabel = (key?: string | null) => (key ? (CONDITION_DETAIL_LABELS[key] ?? key) : null);

export const RATING_OPTIONS = [3, 3.5, 4, 4.5];

export const COLOR_OPTIONS: Option[] = [
  { key: "white", label: "Ağ" },
  { key: "black", label: "Qara" },
  { key: "red", label: "Qırmızı" },
  { key: "pink", label: "Çəhrayı" },
  { key: "blue", label: "Mavi" },
  { key: "navy", label: "Tünd göy" },
  { key: "green", label: "Yaşıl" },
  { key: "yellow", label: "Sarı" },
  { key: "orange", label: "Narıncı" },
  { key: "purple", label: "Bənövşəyi" },
  { key: "brown", label: "Qəhvəyi" },
  { key: "beige", label: "Bej" },
  { key: "gray", label: "Boz" },
  { key: "gold", label: "Qızılı" },
  { key: "silver", label: "Gümüşü" },
  { key: "multicolor", label: "Rəngarəng" },
];
export const colorLabel = (key?: string | null) => (key ? (COLOR_OPTIONS.find((c) => c.key === key)?.label ?? key) : null);
/** Rəng nümunəsi — `tokens.css` `--swatch-*`. Naməlum rəngdə `null`. */
export const colorSwatch = (key?: string | null) => (key && COLOR_OPTIONS.some((c) => c.key === key) ? `var(--swatch-${key})` : null);

const SIZES_LIST = ["XS", "S", "M", "L", "XL", "XXL"];
const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => String(from + i));
/** Mobil `getSizeOptions` — kateqoriyaya görə ölçü sxemi. */
export function sizeOptions(category: string | null): string[] {
  switch (category) {
    case "bridal":
      return ["S", "M", "L", "S-M", "36", "38", "40", "42", "44", "46", "48", "50"];
    case "evening":
      return ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL", "6XL", "S-M", "L-XL", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52"];
    case "suit":
      return ["XS", "S", "M", "L", "XL", "2XL", "3XL", ...range(39, 64)];
    case "shoes":
      return ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "45"];
    case "national":
      return ["XS", "S", "M", "L", "XL", "XXL", "1-2 yaş", "3-4 yaş", "5-6 yaş", "7-8 yaş", "9-10 yaş", "11-12 yaş", "13-14 yaş", "Universal"];
    case "accessory":
      return ["Standart"];
    default:
      return SIZES_LIST;
  }
}

export const SORT_OPTIONS: { key: ProductSortOption; label: string }[] = [
  { key: "popular", label: "Ən populyar" },
  { key: "newest", label: "Ən yeni" },
  { key: "price_asc", label: "Qiymət: ucuzdan bahaya" },
  { key: "price_desc", label: "Qiymət: bahadan ucuza" },
  { key: "rating", label: "Reytinqi ən yüksək" },
];
export const DEFAULT_SORT: ProductSortOption = "popular";

/** Mobil `formatMoney`: 1500 → "1 500", 12.5 → "12.50" */
export function formatMoney(value: number | string | null | undefined): string {
  const n = Number(value);
  if (!Number.isFinite(n)) return "0";
  const fixed = Number.isInteger(n) ? n.toFixed(0) : n.toFixed(2);
  const [whole, decimals] = fixed.split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return decimals ? `${grouped}.${decimals}` : grouped;
}
export const formatMoneyRange = (min: number | string, max: number | string) =>
  Number(min) === Number(max) ? formatMoney(min) : `${formatMoney(min)} – ${formatMoney(max)}`;
