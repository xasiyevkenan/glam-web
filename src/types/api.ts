/** Backend cavab formaları (mobil `src/types/auth.ts` ilə eyni). */
export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export type ApiMessageResponse = {
  success: boolean;
  message: string;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type AuthResponse<T> = ApiResponse<T> & AuthTokens;
