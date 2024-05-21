import NextAuth, { CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { compare } from "bcryptjs";

import { authConfig } from "@/auth.config";
import { LoginSchema, loginSchema } from "@/lib/schema";
import { getSettlements, updatePassword } from "@/lib/database";

async function getUser(credentials: LoginSchema) {
  const [settlement] = await getSettlements({ account: true }, { id: credentials.username });

  if (settlement == null) {
    throw Object.assign(new CredentialsSignin("Settlement does not exist"), { source: "username" });
  }

  const user = {
    id: settlement.id,
    password: settlement.account.password,
  };

  if (user.password == null) {
    updatePassword(settlement.id, { plain: credentials.password });
  }
  else if (!await compare(credentials.password, user.password)) {
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
        if (!parsed.data.username) {
          throw Object.assign(new CredentialsSignin("You must select a settlement"), { source: "username" });
        }

        return await getUser(parsed.data);
      },
    }),
  ]
});
