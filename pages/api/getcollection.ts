import { connectToDatabase } from "../mongodb";

// API untuk read data dari database
export default async function handler(req: any, res: any) {
  const collectionName:string = req.query.type;
  let db;
  try {
    db = await connectToDatabase();
    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: "Error occurred" });
  } 
}
