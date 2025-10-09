export { auth as middleware } from "@/_lib/auth";
export const config = {
  matcher: ["/profile/:path*", "/login"],
};
