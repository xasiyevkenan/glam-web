"use client";

import type { ReactNode } from "react";
import { ToastProvider } from "@/components/ui/Toast";
import { AuthProvider } from "@/features/auth/AuthProvider";
import { FavoritesProvider } from "@/features/favorites/FavoritesProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <AuthProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </AuthProvider>
    </ToastProvider>
  );
}
