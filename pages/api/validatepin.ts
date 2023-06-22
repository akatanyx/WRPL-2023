import { connectToDatabase } from "../mongodb";
import bcrypt from "bcrypt";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { id_user, pin } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("wallets");
    const cursor = await collection.findOne({ id_user: id_user });
    const results = await bcrypt.compare(pin, cursor?.pin);
    if (results) {
      res.status(200).json({ message: "Pin is correct" });
    } else {
      res.status(401).json({ message: "Pin is incorrect" });
    }
  } else {
    res.status(400).json({ message: "Only POST requests allowed" });
  }
}
