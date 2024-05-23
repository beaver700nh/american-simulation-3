import NextAuth, { CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { compare } from "bcryptjs";

import { authConfig } from "@/auth.config";
import { LoginSchema, loginSchema } from "@/lib/schema";
import { getSettlements } from "@/lib/database";

async function getUser(credentials: LoginSchema) {
  const [settlement] = await getSettlements({ account: true }, { id: credentials.username });

  if (settlement == null) {
    throw Object.assign(new CredentialsSignin("Settlement does not exist"), { source: "username" });
  }

  const user = {
    name: settlement.id,
  };

  if (settlement.account.password != null && !await compare(credentials.password, settlement.account.password)) {
    throw Object.assign(new CredentialsSignin("Incorrect username or password"), { source: "password" });
  }

  return user satisfies User;
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
        if (!parsed.data.username) {
          throw Object.assign(new CredentialsSignin("You must select a settlement"), { source: "username" });
        }

        return await getUser(parsed.data);
      },
    }),
  ]
});
