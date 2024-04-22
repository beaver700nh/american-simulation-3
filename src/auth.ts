import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { authConfig } from "./auth.config";

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
        console.log("authorize:", credentials);
        return { id: "SOME_ID", password: "$2a$12$0ZyLyY/B3ToUGC9feMEUPOfgqFIQKVMrNtJOMbjhYvYYBQDjd34uy" };

        // const { username, password } = parsedCredentials.data;
        // const user = { id: "SOME_ID", password: "$2a$12$0ZyLyY/B3ToUGC9feMEUPOfgqFIQKVMrNtJOMbjhYvYYBQDjd34uy" };

        // if (!await compare(password, user.password)) {
        //   throw new Error("Incorrect password");
        // }

        // return user;
      },
    }),
  ]
});
