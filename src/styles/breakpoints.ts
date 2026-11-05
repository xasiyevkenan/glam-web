/**
 * Breakpoint-lərin JS surəti — yalnız `next/image` `sizes` atributu kimi JS tələb edən yerlər üçün.
 * MƏNBƏ `src/styles/tokens.css`-dəki `--breakpoint-*` dəyərləridir;
 * `npm run lint` (`scripts/check-breakpoints.mjs`) bu faylın onlarla eyni olduğunu yoxlayır.
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Bp = keyof typeof BREAKPOINTS;

/** `imageSizes({ lg: "25vw", md: "33vw" }, "50vw")` → "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" */
export function imageSizes(rules: Partial<Record<Bp, string>>, fallback: string) {
  const parts = (Object.keys(BREAKPOINTS) as Bp[])
    .filter((bp) => rules[bp])
    .sort((a, b) => BREAKPOINTS[b] - BREAKPOINTS[a])
    .map((bp) => `(min-width: ${BREAKPOINTS[bp]}px) ${rules[bp]}`);
  return [...parts, fallback].join(", ");
}
