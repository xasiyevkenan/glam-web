import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Mobil AuthHeader loqosu: krem dairə içində shoppingBag (primary) + "Glam.az".
 * `size="lg"` — giriş səhifələri (64px dairə, h1), `md` — yuxarı menyu.
 */
export function Logo({ size = "md", href = "/", className }: { size?: "md" | "lg"; href?: string | null; className?: string }) {
  const lg = size === "lg";
  const content = (
    <>
      <span className={cn("flex items-center justify-center rounded-full bg-on-primary text-primary", lg ? "mb-s3 size-16" : "size-9")}>
        <Icon name="shoppingBag" size={lg ? 28 : 18} />
      </span>
      <span className={cn("text-on-primary", lg ? "text-h1" : "text-h3")}>Glam.az</span>
    </>
  );
  const cls = cn("inline-flex items-center", lg ? "flex-col" : "gap-s2", className);
  return href ? (
    <Link href={href} className={cls} aria-label="Glam.az — ana səhifə">
      {content}
    </Link>
  ) : (
    <span className={cls}>{content}</span>
  );
}
