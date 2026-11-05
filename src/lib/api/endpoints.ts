/**
 * Backend endpointləri — `glam-mobile/src/constants/endpoints.ts` ilə eynidir.
 * Yollar `/api`-dən sonradır.
 */
export const AUTH_ENDPOINTS = {
  REGISTER_CUSTOMER: "/auth/register/customer",
  REGISTER_STORE: "/auth/register/store",
  LOGIN: "/auth/login",
  REFRESH_TOKEN: "/auth/refresh-token",
  ME: "/auth/me",
  LOGOUT: "/auth/logout",
  SEND_OTP: "/auth/send-otp",
  VERIFY_OTP: "/auth/verify-otp",
  UPDATE_PROFILE: "/auth/me",
} as const;

export const CITY_ENDPOINTS = {
  LIST: "/cities",
} as const;

export const PRODUCT_ENDPOINTS = {
  LIST: "/products",
  SUGGESTIONS: "/products/suggestions",
} as const;

export const LISTING_ENDPOINTS = {
  LIST: "/listings",
  DETAIL: (id: number | string) => `/listings/${id}`,
  STATUS: (id: number | string) => `/listings/${id}/status`,
} as const;

export const FAVORITE_ENDPOINTS = {
  LIST: "/favorites",
  IDS: "/favorites/ids",
  TOGGLE: (productId: number | string) => `/favorites/${productId}`,
} as const;

export const UPLOAD_ENDPOINTS = {
  IMAGE: "/uploads/image",
} as const;

export const CHAT_ENDPOINTS = {
  CONVERSATIONS: "/chat/conversations",
  START_DIRECT: "/chat/conversations/direct",
  MESSAGES: (conversationId: number | string) =>
    `/chat/conversations/${conversationId}/messages`,
  MARK_READ: (conversationId: number | string) =>
    `/chat/conversations/${conversationId}/read`,
} as const;

export const STORE_ENDPOINTS = {
  ME: "/stores/me",
  FEATURED: "/stores/featured",
  LIST: "/stores",
  FOLLOWED: "/stores/followed",
  DETAIL: (id: number | string) => `/stores/${id}`,
  FOLLOW: (id: number | string) => `/stores/${id}/follow`,
  LISTINGS: (id: number | string) => `/stores/${id}/listings`,
} as const;

export const HELP_ENDPOINTS = {
  FAQS: "/help/faqs",
} as const;
