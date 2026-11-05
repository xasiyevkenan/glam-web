import { icons, type IconName } from "@/components/icons";

type Props = {
  name: IconName;
  size?: number;
  /** CSS rəngi; default `currentColor` — rəngi Tailwind `text-*` sinfi ilə ver. */
  color?: string;
  filled?: boolean;
  className?: string;
  /** Mənalı ikonlar üçün mətn; verilməsə dekorativ sayılır. */
  label?: string;
};

/** Mobil `components/common/Icon` qarşılığı. */
export function Icon({ name, size = 16, color = "currentColor", filled, className, label }: Props) {
  const Cmp = icons[name] as React.ComponentType<Record<string, unknown>>;
  return (
    <span
      className={["inline-flex shrink-0 items-center justify-center", className].filter(Boolean).join(" ")}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Cmp size={size} color={color} {...(filled !== undefined ? { filled } : {})} />
    </span>
  );
}
