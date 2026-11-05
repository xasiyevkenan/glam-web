import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Məzmun konteyneri: mobil yan boşluq 18 (padding4), planşetdən 25, maks en 1200. */
export function Container({ className, ...rest }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-content px-s4 md:px-s6", className)} {...rest} />;
}

/** Səhifə qabığı: main + şaquli boşluq. */
export function PageShell({ className, children, ...rest }: ComponentProps<"main">) {
  return (
    <main id="main" className={cn("flex-1 py-s5 md:py-s7", className)} {...rest}>
      <Container>{children}</Container>
    </main>
  );
}
