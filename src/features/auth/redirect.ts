import { safeNextPath } from "@/lib/auth/routes";
import type { AccountRole } from "@/types/auth";

/** Girişdən sonra: `?next=` varsa ora, yoxdursa rol üzrə ana səhifə (mağaza → panel). */
export function afterAuthPath(role: AccountRole, next: string | null) {
  return safeNextPath(next, role === "store" ? "/panel" : "/");
}
