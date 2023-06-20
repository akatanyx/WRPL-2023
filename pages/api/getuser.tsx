import { connectToDatabase } from "../mongodb";

// API untuk read userId dari database
export default async function handler(req: any, res: any) {
  const email = req.query.email;
  let db;
  try {
    db = await connectToDatabase();
    const collection = db.collection("users");
    const result = await collection.findOne({ email: email });
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Error occurred" });
  }
}
