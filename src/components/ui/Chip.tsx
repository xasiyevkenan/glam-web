import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Props = Omit<ComponentProps<"button">, "type"> & {
  selected?: boolean;
  size?: "md" | "sm";
};

/** Mobil `SelectableChip` / `CategoryChips`: pill, seçilmiş — primary, passiv — surfaceMuted. */
export function Chip({ selected = false, size = "md", className, children, ...rest }: Props) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "pressable touch-target relative inline-flex shrink-0 items-center rounded-full border text-caption1 whitespace-nowrap",
        size === "sm" ? "px-[14px] py-s1" : "px-s3 py-s1",
        selected ? "border-primary bg-primary text-on-primary" : "border-border bg-surface-muted text-chip-text",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

/** Üfüqi sürüşən chip sırası (mobil CategoryChips). */
export function ChipRow({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      role="group"
      className={cn("flex gap-s1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", className)}
      {...rest}
    />
  );
}
