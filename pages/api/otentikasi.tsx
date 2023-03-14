import { connectToDatabase } from '../mongodb';
// import bcrypt from 'bcryptjs';

export default async function login(req : any, res : any) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const db = await connectToDatabase();

    const user = await db.collection('users').findOne({ email });

//     if (user && bcrypt.compareSync(password, user.password)) {
//       // User is authenticated, set session data
//       req.session.user = { email: user.email };
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
if (user){
    if (password == user.password) {
        // User is authenticated, set session data
        // req.session.user = { email: user.email };
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
    } else {
    res.status(405).json({ message: 'Method not allowed' });
    }
} else {
    res.status(401).json({ message: 'Invalid credentials' });
}
}

// import { connectToDatabase } from '../mongodb';

// export default async function login(req : any, res : any) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     const db = await connectToDatabase();

//     const user = await db.collection('users').findOne({ email });

// if (user){
//     if (password == user.password) {
//         res.status(200).json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
//     } else {
//     res.status(405).json({ message: 'Method not allowed' });
//     }
// } else {
//     res.status(401).json({ message: 'Invalid credentials' });
// }
// }


// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
// import { connectToDatabase } from '../mongodb';

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       async authorize(credentials) {
//         const db = await connectToDatabase();
//         const user = await db.collection('users').findOne({
//           email: credentials.email,
//           password: credentials.password,
//         });

//         if (user) {
//           return user;
//         } else {
//           throw new Error('Invalid email or password');
//         }
//       },
//     }),
//   ],
//   session: {
//     jwt: true,
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   database: process.env.MONGODB_URI,
// });