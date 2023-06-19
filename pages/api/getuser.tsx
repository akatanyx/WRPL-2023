import { connectToDatabase } from "../mongodb";

// API untuk read data dari database
export default async function handler(req: any, res: any) {
  const email = req.query.id;
  let db;
  try {
    db = await connectToDatabase();
    const collection = db.collection("users");
    const result = await collection.findOne({ email: email });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Error occurred" });
  }
}
