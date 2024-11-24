import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      type: "credentials",

      credentials: {
        username: { label: "nisNisn", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        const { data }: any = await axios.post(
          `http://localhost:3000/api/loginSiswa`,
          {
            username,
            password,
          }
        );
        if (data.user) {
          return { username: data!.user.nisNisn, id: data!.user.id.toString() };
        } else {
          throw new Error("username password mismatch");
        }
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
