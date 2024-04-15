// THIS FILE IS WRONG

import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcrypt";

import { z } from "zod";

const credentialsSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

export const { auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "Settlement" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = credentialsSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          // Invalid credentials structure
          return null;
        }

        const { username, password } = parsedCredentials.data;
        const user = { id: "SOME_ID", password: "password" } as User;

        if (!bcrypt.compareSync(password, (user as any).password)) {
          // Invalid credentials value
          return null;
        }

        return user;
      },
    }),
  ],
});
