"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api/client";
import { FAVORITE_ENDPOINTS, STORE_ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiResponse } from "@/types/api";

/** Mobil Customer Profile `loadStats`: sevimli sayı (`/favorites/ids`) + izlənilən mağaza sayı (`/stores/followed` total). */
export function useProfileStats(enabled: boolean) {
  const [stats, setStats] = useState<{ favorites: number; followed: number } | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let alive = true;
    Promise.all([
      api.get<ApiResponse<number[]>>(FAVORITE_ENDPOINTS.IDS),
      api.get<ApiResponse<{ total: number }>>(STORE_ENDPOINTS.FOLLOWED, { query: { page: 1, pageSize: 1 } }),
    ])
      .then(([fav, followed]) => alive && setStats({ favorites: fav.data.length, followed: followed.data.total ?? 0 }))
      .catch(() => alive && setStats({ favorites: 0, followed: 0 }));
    return () => {
      alive = false;
    };
  }, [enabled]);

  return stats;
}
