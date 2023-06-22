import { connectToDatabase } from '../../mongodb';
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const db = await connectToDatabase();
        const user = await db.collection('users').findOne({ email });
        //compare the password
        if (user && await bcrypt.compare(password, user.password)) {
          return {
            id: user._id.toHexString(),
            name: user.name,
            email: user.email,
            roles: user.roles,
          } as User;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
