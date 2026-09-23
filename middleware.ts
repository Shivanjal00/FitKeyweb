// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "gymbym.com";

export function middleware(req: NextRequest) {
  const forwardedHost = req.headers.get("x-forwarded-host");
  const host = forwardedHost || req.headers.get("host") || "";
  const hostWithoutPort = host.split(":")[0];

  if (hostWithoutPort === "localhost" || hostWithoutPort === "") {
    return NextResponse.next();
  }

  if (hostWithoutPort !== CANONICAL_HOST) {
    const url = req.nextUrl.clone();
    url.protocol = "https";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
