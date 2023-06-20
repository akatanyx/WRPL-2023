import { connectToDatabase } from "../mongodb";

// API untuk read data dari database
export default async function handler(req: any, res: any) {
  const id: string = req.query.id_user;
  const db = await connectToDatabase();

  //find merchant by object id
  try {
    const merchant = await db.collection("merchants").findOne({ id_user: id });
    
    //find all menu by array menu id in merchant
    const collection = await db.collection("menus");
    const result = await collection.find({ _id: { $in: merchant?.menu } }).toArray();
    res.status(200).json(result);
    } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Error occurred" });
    }
}
