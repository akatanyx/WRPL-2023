import { ObjectId } from "mongodb";
import { connectToDatabase } from "../mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === "PUT") {
    const { id, roles } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("users"); 

    // Menambah role customer
    const userID = new ObjectId(id);
    const cursor = await collection.updateOne(
      { _id: userID },
      {
        $addToSet: { roles: { $each: [roles] } },
      }
    );

    const results = await cursor;

    res.status(200).json(results);
  } else {
    res.status(400).json({ message: "Only PUT requests allowed" });
  }
}
