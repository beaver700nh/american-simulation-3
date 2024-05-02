import NextAuth, { CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { compare } from "bcryptjs";

import { authConfig } from "@/auth.config";
import { LoginSchema, loginSchema } from "@/lib/schema";

async function getUser(credentials: LoginSchema) {
  const user = {
    name: credentials.username,
    password: "$2y$10$ANUAkR0nXVHKurftlQQ85.IRuNoUg89p1xJxB9qIpKI2ln3Z6pjky",
  };

  if (!await compare(credentials.password, user.password)) {
    throw Object.assign(new CredentialsSignin("Incorrect username or password"), { source: "password" });
  }

  const { password: _, ...profile } = user;
  return profile satisfies User;
}

export const {
  auth,
  signIn,
  signOut,
  handlers,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);

        if (!parsed.success) {
          throw Object.assign(new CredentialsSignin("Invalid format for credentials"), { source: "root" });
        }

        return await getUser(parsed.data);
      },
    }),
  ]
});
