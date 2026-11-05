"use client";

import type { IconName } from "@/components/icons";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Modal } from "./Modal";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  icon: IconName;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel?: string;
  destructive?: boolean;
  loading?: boolean;
};

/** Mobil `modals/ConfirmActionModal` (+ LogoutConfirmModal). */
export function ConfirmDialog({ open, onClose, onConfirm, icon, title, description, confirmLabel, cancelLabel, destructive, loading }: Props) {
  return (
    <Modal open={open} onClose={onClose} variant="dialog" title={title} dismissible={!loading}>
      <div className="flex flex-col items-center text-center">
        <span
          className={cn(
            "mb-s4 flex size-14 items-center justify-center rounded-full",
            destructive ? "bg-danger-bg text-danger" : "bg-primary-light text-on-primary-light",
          )}
        >
          <Icon name={icon} size={24} />
        </span>
        <h2 className="mb-s1 text-h3 text-text-primary">{title}</h2>
        <p className="mb-s6 text-body5 text-text-secondary">{description}</p>
        <Button fullWidth variant={destructive ? "destructive" : "primary"} loading={loading} onClick={onConfirm}>
          {confirmLabel}
        </Button>
        {cancelLabel ? (
          <Button fullWidth variant="outline" disabled={loading} onClick={onClose} className="mt-s2">
            {cancelLabel}
          </Button>
        ) : null}
      </div>
    </Modal>
  );
}
