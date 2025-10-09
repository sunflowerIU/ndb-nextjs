import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { supabase } from "./supabase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      name: "Credentials",

      authorize: async (credentials) => {
        const email = credentials.email;
        const password = credentials.password;

        if (!email || !password) {
          return null;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (!data.user || error) {
          console.error("supabase error: ", error?.message);
          return null;
        }

        return {
          id: data.user.id,
          email: data.user.email,
          role: data.user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth, request }) => {
      const isLoggedIn = Boolean(auth?.user);
      // console.log(isLoggedIn);
      const isLoginPage = request.nextUrl.pathname === "/login";
      // console.log(request);
      //not logged in and going for logged in page
      if (isLoginPage && isLoggedIn) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      //not logged in and going for profile page
      if (!isLoggedIn && request.nextUrl.pathname.startsWith("/profile")) {
        return Response.redirect(new URL("/login", request.nextUrl));
      }

      return true;
    },
  },
});
