/** Mobil PhoneInput `formatPhoneNumber`: "553209707" → "(55) 320 97 07" */
export function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").slice(0, 9);
  let out = "";
  if (d.length > 0) out += "(" + d.substring(0, 2);
  if (d.length >= 2) out += ")";
  if (d.length > 2) out += " " + d.substring(2, 5);
  if (d.length > 5) out += " " + d.substring(5, 7);
  if (d.length > 7) out += " " + d.substring(7, 9);
  return out;
}

/** Backend `isValidAzPhone`: 9 rəqəm. */
export const isCompletePhone = (digits: string) => /^\d{9}$/.test(digits);
