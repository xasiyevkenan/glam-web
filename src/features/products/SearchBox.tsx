"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { api } from "@/lib/api/client";
import { PRODUCT_ENDPOINTS } from "@/lib/api/endpoints";
import { cn } from "@/lib/cn";
import { addHistory, clearHistory, readHistory, removeHistory } from "./searchHistory";

const SUGGESTION_DEBOUNCE_MS = 300;
const SUGGESTION_LIMIT = 8;

type Props = {
  defaultValue?: string;
  cityId?: number | null;
  onSubmit: (query: string) => void;
  onFilterClick?: () => void;
  filterCount?: number;
  placeholder?: string;
  className?: string;
  /** Hero (primary fon) üzərində — kölgəli. */
  elevated?: boolean;
};

/**
 * Mobil `SearchBarBlock` + `useHomeSearch`: yazanda 300ms sonra təkliflər (`/products/suggestions`),
 * boş fokusda son axtarışlar; Enter və ya təklif seçimi axtarışı təsdiqləyir.
 */
export function SearchBox({ defaultValue = "", cityId, onSubmit, onFilterClick, filterCount, placeholder = "Gəlinlik, kostyum, mağaza axtar...", className, elevated }: Props) {
  const listId = useId();
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  // URL dəyişəndə (geri düyməsi) inputu sinxronlaşdır.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const term = value.trim();
    if (!open || !term) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSuggestions([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    const t = setTimeout(() => {
      api
        .get<{ data: string[] }>(PRODUCT_ENDPOINTS.SUGGESTIONS, { query: { q: term, limit: SUGGESTION_LIMIT, cityId: cityId ?? undefined } })
        .then((res) => !cancelled && setSuggestions(res.data))
        .catch(() => !cancelled && setSuggestions([]))
        .finally(() => !cancelled && setLoading(false));
    }, SUGGESTION_DEBOUNCE_MS);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [value, open, cityId]);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  const submit = (term: string) => {
    const t = term.trim();
    setValue(t);
    if (t) setHistory(addHistory(t));
    setOpen(false);
    setActive(-1);
    onSubmit(t);
  };

  const items = value.trim() ? suggestions : history;
  const showPanel = open;

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    submit(active >= 0 && items[active] ? items[active] : value);
  }

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      <form role="search" onSubmit={onFormSubmit} className="flex items-center">
        <div className={cn("flex h-control flex-1 items-center rounded-lg border border-border bg-surface px-s3 focus-within:border-primary", elevated && "shadow-sm")}>
          <Icon name="search" size={18} className="text-text-secondary" />
          <label htmlFor={`${listId}-input`} className="sr-only">Axtarış</label>
          <input
            id={`${listId}-input`}
            type="search"
            role="combobox"
            aria-expanded={showPanel}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
            autoComplete="off"
            enterKeyHint="search"
            value={value}
            placeholder={placeholder}
            onFocus={() => {
              setHistory(readHistory());
              setOpen(true);
            }}
            onChange={(e) => {
              setValue(e.target.value);
              setOpen(true);
              setActive(-1);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, items.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, -1));
              } else if (e.key === "Escape") setOpen(false);
            }}
            className="ml-s1 h-full min-w-0 flex-1 bg-transparent text-body4 text-text-primary outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {value ? (
            <button type="button" aria-label="Təmizlə" onClick={() => submit("")} className="pressable touch-target relative p-1 text-text-secondary">
              <Icon name="close" size={16} />
            </button>
          ) : null}
        </div>
        {onFilterClick ? (
          <button
            type="button"
            onClick={onFilterClick}
            aria-label={filterCount ? `Filtrlər (${filterCount} aktiv)` : "Filtrlər"}
            className={cn("pressable relative ml-s1 flex size-control shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary", elevated && "shadow-sm")}
          >
            <Icon name="filter" size={18} />
            {filterCount ? (
              <span className="absolute -top-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-[1.5px] border-screen bg-danger px-[3px] text-micro text-on-strong">
                {filterCount}
              </span>
            ) : null}
          </button>
        ) : null}
      </form>

      {showPanel ? (
        <div className="absolute inset-x-0 top-full z-30 mt-s1 max-h-[60dvh] overflow-y-auto rounded-lg border border-border bg-surface p-s3 shadow-md">
          {!value.trim() ? (
            <div className="mb-s1 flex items-center justify-between">
              <span className="text-body4 text-text-primary">Son axtarışlar</span>
              {history.length ? (
                <button type="button" onClick={() => setHistory(clearHistory())} className="pressable inline-flex min-h-11 items-center px-1 text-caption1 text-text-secondary">
                  Təmizlə
                </button>
              ) : null}
            </div>
          ) : null}
          {items.length ? (
            <ul id={listId} role="listbox" aria-label={value.trim() ? "Təkliflər" : "Son axtarışlar"}>
              {items.map((item, i) => (
                <li key={item} id={`${listId}-${i}`} role="option" aria-selected={active === i} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => submit(item)}
                    className={cn("pressable flex min-h-11 flex-1 items-center gap-s2 rounded-sm px-1 text-left text-body4 text-text-primary", active === i && "bg-surface-muted")}
                  >
                    <Icon name={value.trim() ? "search" : "clock"} size={16} className="text-text-secondary" />
                    <span className="truncate">{item}</span>
                  </button>
                  {!value.trim() ? (
                    <button type="button" aria-label={`"${item}" sil`} onClick={() => setHistory(removeHistory(item))} className="pressable touch-target relative p-1 text-text-secondary">
                      <Icon name="close" size={14} />
                    </button>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-s1 text-caption1 text-text-secondary" id={listId}>
              {value.trim() ? (loading ? "Axtarılır..." : "Təklif tapılmadı, Enter basaraq axtarış edin") : "Hələ ki axtarış tarixçəniz yoxdur"}
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
