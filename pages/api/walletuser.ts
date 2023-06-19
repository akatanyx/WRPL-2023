import { connectToDatabase } from "../mongodb";

// API untuk read data dari database
export default async function handler(req: any, res: any) {
  const email: string = req.query.id;
  const db = await connectToDatabase();

  const user = await db.collection("users").findOne({ email });
 
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  } else {
    try {
      const collection = db.collection("wallets");
      const result = await collection.findOne({ id_user: user._id.toString() });
      res.status(200).json(result);
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ error: "Error occurred" });
    }
  }
}
