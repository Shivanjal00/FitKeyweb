// src/lib/admin-auth.ts
import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "fk_admin_session";

/**
 * The session cookie used to contain the raw ADMIN_PASSWORD. Now it holds a
 * keyed hash of it, so a leaked cookie never reveals the password itself.
 */
export function makeAdminToken(password: string): string {
  return createHmac("sha256", password).update("fk-admin-session-v1").digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

export function passwordMatches(input: string): boolean {
  const real = process.env.ADMIN_PASSWORD;
  if (!real || typeof input !== "string") return false;
  return safeEqual(
    createHmac("sha256", "cmp").update(input).digest("hex"),
    createHmac("sha256", "cmp").update(real).digest("hex"),
  );
}

export function isAdminSession(cookieValue: string | undefined): boolean {
  const real = process.env.ADMIN_PASSWORD;
  if (!real || !cookieValue) return false;
  return safeEqual(cookieValue, makeAdminToken(real));
}
