"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  /**
   * sheet — mobil `BottomSheetModal` (kiçik ekranda aşağıdan, kompüterdə mərkəzdə);
   * dialog — mobil `ConfirmActionModal` (həmişə mərkəzdə).
   */
  variant?: "sheet" | "dialog";
  /** Yüklənmə zamanı bağlamağı qadağan et. */
  dismissible?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Native <dialog> üzərində modal: fokus tələsi, Esc, fon kliki ilə bağlanma.
 * Görünüş: bg screen, rounded-xl, overlay rgba(0,0,0,.4).
 */
export function Modal({ open, onClose, title, variant = "sheet", dismissible = true, className, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const isSheet = variant === "sheet";

  return (
    <dialog
      ref={ref}
      aria-label={title}
      onCancel={(e) => {
        e.preventDefault();
        if (dismissible) onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && dismissible) onClose();
      }}
      className={cn(
        "m-auto max-h-[80dvh] w-full overflow-y-auto bg-screen text-text-primary backdrop:bg-overlay",
        "open:animate-[modal-in_var(--duration-sheet)_ease-out]",
        isSheet
          ? "mb-0 max-w-none rounded-t-xl px-s4 pb-s5 sm:mb-auto sm:max-w-lg sm:rounded-xl"
          : "max-w-[calc(100%-44px)] rounded-xl px-s4 py-s6 sm:max-w-md",
        className,
      )}
    >
      {isSheet ? (
        <div className="flex items-center justify-center py-s2 sm:justify-between">
          <span aria-hidden className="h-1 w-10 rounded-full bg-border sm:hidden" />
          {title ? <h2 className="hidden text-h4 sm:block">{title}</h2> : null}
          {dismissible ? (
            <button type="button" onClick={onClose} aria-label="Bağla" className="pressable hidden p-1 text-text-muted sm:block">
              <Icon name="close" size={18} />
            </button>
          ) : null}
        </div>
      ) : null}
      {isSheet && title ? <h2 className="mb-s3 text-h4 sm:hidden">{title}</h2> : null}
      {children}
    </dialog>
  );
}
