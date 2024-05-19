import { NextResponse } from "next/server";

export function middleware(request: any) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
`;

  const requestHeaders = new Headers();
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    // Replace newline characters and spaces
    cspHeader.replace(/\s{2,}/g, " ").trim()
  );

  return NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  });
}
