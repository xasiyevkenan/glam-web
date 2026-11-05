"use client";

import { createContext, use, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { localApi } from "@/lib/api/client";
import type {
  LoginPayload,
  RegisterCustomerPayload,
  RegisterStorePayload,
  User,
} from "@/types/auth";

type Status = "loading" | "authenticated" | "guest";

export type RegisterInput =
  | ({ accountType: "customer" } & RegisterCustomerPayload)
  | ({ accountType: "store" } & RegisterStorePayload);

type AuthContextValue = {
  user: User | null;
  status: Status;
  login: (payload: LoginPayload) => Promise<User>;
  register: (payload: RegisterInput) => Promise<User>;
  logout: () => Promise<void>;
  /** Sessiyanı serverdən yenidən oxu (məs. profil dəyişəndən sonra). */
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type Envelope<T> = { success: boolean; data: T };

/**
 * Client tərəfi sessiya vəziyyəti (mobil `zustand/authStore` qarşılığı).
 * Tokenlər brauzerdə saxlanmır — httpOnly cookie-lərdədir; burada yalnız istifadəçi obyekti var.
 * Layout statik qalsın deyə istifadəçi açılışda `/api/auth/session`-dan oxunur.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  const applyUser = useCallback((next: User | null) => {
    setUser(next);
    setStatus(next ? "authenticated" : "guest");
  }, []);

  const refresh = useCallback(async () => {
    try {
      const res = await localApi.get<Envelope<User | null>>("/api/auth/session");
      applyUser(res.data);
    } catch {
      applyUser(null);
    }
  }, [applyUser]);

  useEffect(() => {
    // Açılışda bir dəfə sessiyanı oxu (xarici sistemlə sinxronizasiya).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refresh();
  }, [refresh]);

  const login = useCallback(
    async (payload: LoginPayload) => {
      const res = await localApi.post<Envelope<User>>("/api/auth/login", payload);
      applyUser(res.data);
      router.refresh();
      return res.data;
    },
    [applyUser, router],
  );

  const register = useCallback(
    async (payload: RegisterInput) => {
      const res = await localApi.post<Envelope<User>>("/api/auth/register", payload);
      applyUser(res.data);
      router.refresh();
      return res.data;
    },
    [applyUser, router],
  );

  const logout = useCallback(async () => {
    await localApi.post("/api/auth/logout").catch(() => undefined);
    applyUser(null);
    router.refresh();
  }, [applyUser, router]);

  const value = useMemo(
    () => ({ user, status, login, register, logout, refresh }),
    [user, status, login, register, logout, refresh],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
}

export function useAuth() {
  const ctx = use(AuthContext);
  if (!ctx) throw new Error("useAuth AuthProvider daxilində istifadə olunmalıdır");
  return ctx;
}
