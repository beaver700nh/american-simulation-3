import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { compare } from "bcrypt";

import { loginSchema } from "@/app/lib/schema";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          throw new Error("Invalid format for login credentials");
        }

        const { username, password } = parsedCredentials.data;
        const user = { id: "SOME_ID", password: "$2a$12$0ZyLyY/B3ToUGC9feMEUPOfgqFIQKVMrNtJOMbjhYvYYBQDjd34uy" };

        if (!await compare(password, user.password)) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
