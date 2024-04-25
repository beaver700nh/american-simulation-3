import NextAuth, { CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { compare } from "bcryptjs";

import { authConfig } from "@/auth.config";
import { LoginSchema, loginSchema } from "@/lib/schema";

async function getUser(credentials: LoginSchema) {
  const user = {
    id: "SOME_ID",
    name: credentials.username,
    password: "$2y$12$ZmiX0wPD4BC8LgnDUpHUDuxK2EkBITGW23dkuocBIv2E5vrQ.8.d.",
  };

  if (!await compare(credentials.password, user.password)) {
    throw new CredentialsSignin("Incorrect username or password");
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
      name: "credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);

        if (!parsed.success) {
          throw new CredentialsSignin("Invalid format for credentials");
        }

        return await getUser(parsed.data);
      },
    }),
  ]
});
