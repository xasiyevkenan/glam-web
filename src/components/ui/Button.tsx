import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Spinner } from "./Spinner";

/**
 * Mobil PrimaryButton / SecondaryButton / ActionButton.
 * h 54, rounded-lg (14), text-button (15/600).
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "destructive";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary",
  destructive: "bg-danger text-on-strong",
  // SecondaryButton və ActionButton(outline) mobil-də eyni görünür
  secondary: "border border-border bg-transparent text-text-primary",
  outline: "border border-border bg-transparent text-text-primary",
};

type CommonProps = {
  variant?: ButtonVariant;
  /** PrimaryButton `isSmall`: h 35, mətn 14 */
  size?: "md" | "sm";
  loading?: boolean;
  icon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

function classes({ variant = "primary", size = "md", fullWidth, className }: CommonProps) {
  return cn(
    "pressable touch-target relative inline-flex items-center justify-center gap-s1 rounded-lg px-s5 text-button select-none",
    "disabled:cursor-not-allowed disabled:opacity-60 aria-disabled:pointer-events-none aria-disabled:opacity-60",
    size === "sm" ? "h-button-sm text-body5 font-semibold" : "h-button",
    fullWidth && "w-full",
    variants[variant],
    className,
  );
}

function Content({ loading, icon, children }: Pick<CommonProps, "loading" | "icon" | "children">) {
  if (loading) return <Spinner />;
  return (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
}

type ButtonProps = CommonProps & Omit<ComponentProps<"button">, "children" | "className">;

export function Button({ variant, size, loading, icon, fullWidth, className, children, disabled, type = "button", ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes({ variant, size, fullWidth, className, children })}
      {...rest}
    >
      <Content loading={loading} icon={icon}>
        {children}
      </Content>
    </button>
  );
}

type ButtonLinkProps = CommonProps & Omit<ComponentProps<typeof Link>, "children" | "className">;

/** Düymə görünüşlü link (naviqasiya üçün — SEO və əlçatanlıq). */
export function ButtonLink({ variant, size, loading, icon, fullWidth, className, children, ...rest }: ButtonLinkProps) {
  return (
    <Link className={classes({ variant, size, fullWidth, className, children })} {...rest}>
      <Content loading={loading} icon={icon}>
        {children}
      </Content>
    </Link>
  );
}
