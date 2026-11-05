import Link from "next/link";

/** Mobil `common/SectionTitle`: başlıq + "Hamısı" linki, alt boşluq 15. */
export function SectionTitle({ title, href, linkLabel = "Hamısı", as: Tag = "h2" }: { title: string; href?: string; linkLabel?: string; as?: "h1" | "h2" | "h3" }) {
  return (
    <div className="mb-s3 flex items-center justify-between gap-s2">
      <Tag className="text-h4 text-text-primary">{title}</Tag>
      {href ? (
        <Link href={href} className="pressable text-caption1 font-semibold text-link">
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}
