"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, use, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useToast } from "@/components/ui/Toast";
import { useAuth } from "@/features/auth/AuthProvider";
import { api } from "@/lib/api/client";
import { FAVORITE_ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiResponse } from "@/types/api";

type FavoritesContextValue = {
  ids: Set<number>;
  isFavorite: (id: number) => boolean;
  toggle: (id: number) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

/**
 * Mobil `zustand/favoriteStore`: `/favorites/ids` ilə hidrasiya, optimist toggle (POST/DELETE /favorites/:id),
 * xətada geri qaytarılır. Qonaq ürəyə basanda giriş səhifəsinə yönləndirilir (mobil-də səssiz 401 idi).
 */
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { status } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const toast = useToast();
  const [ids, setIds] = useState<Set<number>>(() => new Set());
  const pending = useRef(new Set<number>());

  useEffect(() => {
    if (status !== "authenticated") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIds(new Set());
      return;
    }
    let alive = true;
    api
      .get<ApiResponse<number[]>>(FAVORITE_ENDPOINTS.IDS)
      .then((res) => alive && setIds(new Set(res.data)))
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [status]);

  const toggle = useCallback(
    (id: number) => {
      if (status !== "authenticated") {
        router.push(`/giris?next=${encodeURIComponent(pathname)}`);
        return;
      }
      if (pending.current.has(id)) return;
      pending.current.add(id);
      const wasFavorite = ids.has(id);
      const apply = (fav: boolean) =>
        setIds((prev) => {
          const next = new Set(prev);
          if (fav) next.add(id);
          else next.delete(id);
          return next;
        });
      apply(!wasFavorite);
      const req = wasFavorite ? api.delete(FAVORITE_ENDPOINTS.TOGGLE(id)) : api.post(FAVORITE_ENDPOINTS.TOGGLE(id));
      req
        .catch((e: Error) => {
          apply(wasFavorite);
          toast.error(e.message);
        })
        .finally(() => pending.current.delete(id));
    },
    [ids, status, router, pathname, toast],
  );

  const value = useMemo(() => ({ ids, isFavorite: (id: number) => ids.has(id), toggle }), [ids, toggle]);
  return <FavoritesContext value={value}>{children}</FavoritesContext>;
}

export function useFavorites() {
  const ctx = use(FavoritesContext);
  if (!ctx) throw new Error("useFavorites FavoritesProvider daxilində istifadə olunmalıdır");
  return ctx;
}
