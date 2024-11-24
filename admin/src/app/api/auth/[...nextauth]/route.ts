import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/utils/prisma";

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      type: "credentials",

      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // const user = await prisma.admin.findFirst({
        //   where: { username },
        // });
        if (username !== "admin") throw new Error("email mismatch");
        // if (!user?.username) throw new Error("email mismatch");
        if (password !== "admin") throw new Error("password mismatch");
        // if (user?.password !== password) throw new Error("password mismatch");
        return { username: "admin", id: 1 } as any;
      },
    }),
  ],

  pages: { signIn: "/login" },

  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider) {
        token.sub = user.id;
        token.name = user.id;
        token.email = user.username;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("id" in token) {
        session.user.id = token.sub;
      }
      if ("name" in token) {
        session.user.name = token.name;
      }
      if ("email" in token) {
        session.user.email = token.email;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
