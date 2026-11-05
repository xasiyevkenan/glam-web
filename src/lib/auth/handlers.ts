import "server-only";
import { NextResponse } from "next/server";
import { ApiError, DEFAULT_ERROR_MESSAGE } from "@/lib/api/errors";

/** Route handler-lərdə xətanı backend mesajı ilə JSON cavaba çevirir. */
export function errorResponse(error: unknown) {
  if (error instanceof ApiError) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: error.status || 500 },
    );
  }
  return NextResponse.json({ success: false, message: DEFAULT_ERROR_MESSAGE }, { status: 500 });
}

export async function readJson<T>(request: Request): Promise<T | null> {
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
}
