// api to upadate cart using aggregate function mongodb
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../mongodb";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  if (req.method === "PUT") {
    const { cartItemId, jumlah } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("carts");
    if (!cartItemId) {
      res.status(400).json({ error: "Missing cartItemId" });
      return;
    }
    if (jumlah < 1) {
      const result = await collection.deleteOne({
        _id: new ObjectId(cartItemId),
      });
      res.status(200).json({ result, message: "Item deleted" });
      return;
    } else {
      try {
        const itemIdObject = new ObjectId(cartItemId); // Convert itemId to ObjectId
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
    }
  } else {
    res.status(400).json({ error: "Method not allowed" });
  }
}
