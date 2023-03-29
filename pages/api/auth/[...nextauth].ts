// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       credentials: {},
//       authorize(credentials, req) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };
//         // perform you login logic
//         // find out user from db
//         if (email !== "john@gmail.com" || password !== "1234") {
//           throw new Error("invalid credentials");
//         }

//         // if everything is fine
//         return {
//           id: "1234",
//           name: "John Doe",
//           email: "john@gmail.com",
//           role: "admin",
//         };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//     // error: '/auth/error',
//     // signOut: '/auth/signout'
//   },
// };

// export default NextAuth(authOptions);


import { connectToDatabase } from '../../mongodb';
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ObjectId } from 'mongodb';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  imgURL: string;
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
        // perform you login logic

        const db = await connectToDatabase();

        const user = await db.collection('users').findOne({ email });
        // find out user from db
        if (user && password == user.password) {
          // if everything is fine
          return {
            id: user._id.toHexString(),
            name: user.nama,
            email: user.email,
            phone: user.phone,
            imgURL: user.imgURL,
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
