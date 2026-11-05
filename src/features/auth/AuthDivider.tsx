/** Mobil `auth/AuthDivider`: xətt — "və ya" — xətt. */
export function AuthDivider() {
  return (
    <div className="my-s4 flex items-center gap-s2" aria-hidden>
      <span className="h-px flex-1 bg-border" />
      <span className="text-caption1 text-text-secondary">və ya</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
