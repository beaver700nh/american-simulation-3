import { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth }) {
      console.log("authorized:", auth);
      return !!auth?.user;
    },
  },
} satisfies NextAuthConfig;
