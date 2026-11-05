"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api/client";
import { CITY_ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiResponse } from "@/types/api";
import type { City } from "@/types/auth";

// Mobil `zustand/cityStore` kimi: siyahı bir dəfə yüklənir və yaddaşda qalır.
let cache: City[] | null = null;
let pending: Promise<City[]> | null = null;

function loadCities() {
  if (cache) return Promise.resolve(cache);
  pending ??= api
    .get<ApiResponse<City[]>>(CITY_ENDPOINTS.LIST)
    .then((res) => (cache = res.data))
    .finally(() => (pending = null));
  return pending;
}

export function useCities() {
  const [cities, setCities] = useState<City[] | null>(cache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache) return;
    let alive = true;
    loadCities()
      .then((list) => alive && setCities(list))
      .catch((e: Error) => alive && setError(e.message));
    return () => {
      alive = false;
    };
  }, []);

  return { cities, loading: !cities && !error, error };
}
