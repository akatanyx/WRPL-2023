// api to upadate cart using aggregate function mongodb
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query)
  if (req.method === "PUT") {
    const { itemId, jumlah } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("carts");

    try {
      const itemIdObject = new ObjectId(itemId); // Convert itemId to ObjectId
      const result = await collection.updateOne(
        {
          _id: itemIdObject,
        },
        {
          $set: {
            jumlah: jumlah,
          },
        }
      );

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error" });
    }
  } else {
    res.status(400).json({ error: "Method not allowed" });
  }
}
