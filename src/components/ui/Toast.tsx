"use client";

import { createContext, use, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { IconName } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type ToastType = "success" | "error" | "info";
type ToastOptions = { message: string; type?: ToastType; duration?: number };
type ActiveToast = Required<Omit<ToastOptions, "duration">> & { id: number };

const DEFAULT_DURATION = 2600;

const variants: Record<ToastType, { cls: string; icon: IconName }> = {
  success: { cls: "bg-status-active text-on-primary", icon: "checkCircle" },
  error: { cls: "bg-danger text-on-primary", icon: "alertCircle" },
  // Mobil-də info fonu `surface`, mətn `textOnPrimary` idi (açıq rejimdə oxunmur) — burada mətn textPrimary.
  info: { cls: "bg-surface text-text-primary border border-border", icon: "infoCircle" },
};

type ToastApi = {
  show: (options: ToastOptions) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
};

const ToastContext = createContext<ToastApi | null>(null);

/** Mobil `common/Toast`: yuxarıda mərkəzdə, rounded-lg, shadow-md, 2.6 san. */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ActiveToast | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idRef = useRef(0);

  const show = useCallback(({ message, type = "info", duration = DEFAULT_DURATION }: ToastOptions) => {
    idRef.current += 1;
    setToast({ id: idRef.current, message, type });
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), duration);
  }, []);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const api = useMemo<ToastApi>(
    () => ({
      show,
      success: (message) => show({ message, type: "success" }),
      error: (message) => show({ message, type: "error" }),
      info: (message) => show({ message, type: "info" }),
    }),
    [show],
  );

  const variant = toast ? variants[toast.type] : null;

  return (
    <ToastContext value={api}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 top-s2 z-[999] flex justify-center px-s4">
        {toast && variant ? (
          <button
            key={toast.id}
            type="button"
            onClick={() => setToast(null)}
            className={cn(
              "pointer-events-auto flex max-w-md animate-[toast-in_var(--duration-toast-in)_cubic-bezier(0.33,1,0.68,1)] items-center gap-s2 rounded-lg px-s4 py-s3 text-left text-body4 shadow-md",
              variant.cls,
            )}
          >
            <Icon name={variant.icon} size={18} />
            <span className="line-clamp-2">{toast.message}</span>
          </button>
        ) : null}
      </div>
    </ToastContext>
  );
}

export function useToast() {
  const ctx = use(ToastContext);
  if (!ctx) throw new Error("useToast ToastProvider daxilində istifadə olunmalıdır");
  return ctx;
}
