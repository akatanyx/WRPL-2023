import { connectToDatabase } from "../mongodb";
// import bcrypt from 'bcryptjs';

export default async function login(req: any, res: any) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const client = await connectToDatabase();

    const user = await client
      .collection("users")
      .findOne({ email });

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
    console.log(user)
    if (user) {
      if (password == user.password) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
