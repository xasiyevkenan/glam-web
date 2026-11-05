"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Props = Omit<ComponentProps<"input">, "size"> & {
  onFilterClick?: () => void;
  filterCount?: number;
  containerClassName?: string;
};

/** Mobil `common/SearchBar`: h 52, bg surface, sağda 52×52 primary filtr düyməsi. */
export function SearchBar({ onFilterClick, filterCount, containerClassName, className, placeholder = "Axtar...", ...rest }: Props) {
  return (
    <div className={cn("flex items-center", containerClassName)}>
      <label className="flex h-control flex-1 items-center rounded-lg border border-border bg-surface px-s3 focus-within:border-primary">
        <Icon name="search" size={17} className="text-text-secondary" />
        <span className="sr-only">{placeholder}</span>
        <input
          type="search"
          placeholder={placeholder}
          className={cn("ml-s1 h-full min-w-0 flex-1 bg-transparent text-body5 text-text-primary outline-none", className)}
          {...rest}
        />
      </label>
      {onFilterClick ? (
        <button
          type="button"
          onClick={onFilterClick}
          aria-label="Filtrlər"
          className="pressable relative ml-s1 flex size-control items-center justify-center rounded-lg bg-primary text-white"
        >
          <Icon name="filter" size={18} />
          {filterCount ? (
            <span className="absolute -top-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-[1.5px] border-screen bg-danger px-[3px] text-micro text-white">
              {filterCount}
            </span>
          ) : null}
        </button>
      ) : null}
    </div>
  );
}
