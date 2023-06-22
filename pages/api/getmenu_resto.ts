import { connectToDatabase } from "../mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req: any, res: any) {
  const id_resto = req.query.id_resto;
  const db = await connectToDatabase();

  try {
    const merchant = await db.collection("merchants").findOne({ _id: new ObjectId(id_resto) });

    // Convert menu_resto array to an array of ObjectId
    const menuIds = merchant?.menu_resto.map((menuId: string) => new ObjectId(menuId));

    // Find all menus that have an _id in the menuIds array
    const collection = await db.collection("menus");
    const result = await collection.find({ _id: { $in: menuIds } }).toArray();

    res.status(200).json(result);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Error occurred" });
  }
}
