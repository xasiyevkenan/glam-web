"use client";

import type { IconName } from "@/components/icons";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { AccountRole } from "@/types/auth";

const OPTIONS: { role: AccountRole; title: string; description: string; icon: IconName }[] = [
  { role: "customer", title: "Alıcıyam", description: "Paltar kirayə etmək istəyirəm", icon: "buyer" },
  { role: "store", title: "Mağaza sahibiyəm", description: "Paltar kirayəyə vermək istəyirəm", icon: "store" },
];

/** Mobil `auth/accountType/AccountTypeSelector` + `AccountTypeCard`. */
export function AccountTypeSelector({ role, onChange }: { role: AccountRole; onChange: (role: AccountRole) => void }) {
  return (
    <div role="radiogroup" aria-label="Hesab növü" className="mb-s4 grid grid-cols-2 gap-s2">
      {OPTIONS.map((o) => {
        const selected = o.role === role;
        return (
          <button
            key={o.role}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(o.role)}
            className={cn(
              "pressable relative flex flex-col items-center rounded-lg border-[1.2px] p-s3 text-center",
              selected ? "border-primary bg-primary-light" : "border-border bg-surface",
            )}
          >
            {selected ? (
              <span className="absolute top-2.5 right-2.5 flex size-[18px] items-center justify-center rounded-full bg-primary text-on-primary">
                <Icon name="check" size={10} />
              </span>
            ) : null}
            <span className={cn("flex size-10 items-center justify-center rounded-full", selected ? "bg-primary text-white" : "bg-surface-muted text-icon-purple")}>
              <Icon name={o.icon} size={20} />
            </span>
            <span className="mt-s3 text-body5 font-bold text-text-primary">{o.title}</span>
            <span className="mt-s2 text-caption2 text-text-secondary">{o.description}</span>
          </button>
        );
      })}
    </div>
  );
}
