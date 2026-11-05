/** Mobil `glam-mobile/src/types/auth.ts`-dən. */
export type AccountRole = "customer" | "store";

export interface City {
  id: number;
  name: string;
}

export interface User {
  id: number;
  full_name: string;
  phone: string;
  email: string | null;
  role: AccountRole;
  city: City | null;
  created_at: string;
}

export interface Store {
  id: number;
  store_name: string;
  contact_person_name: string;
  created_at: string;
}

export interface LoginPayload {
  phone: string;
  password: string;
}

export interface RegisterCustomerPayload {
  fullName: string;
  phone: string;
  email?: string;
  password: string;
  cityId: number;
}

export interface RegisterStorePayload {
  storeName: string;
  contactPersonName: string;
  phone: string;
  email?: string;
  password: string;
  cityId: number;
}

export interface UpdateCustomerProfilePayload {
  fullName: string;
  email?: string;
  cityId: number;
}
