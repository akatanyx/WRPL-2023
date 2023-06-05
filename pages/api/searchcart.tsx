import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const collectionName:string = "carts";
    let client;
  try {
    client = await connectToDatabase();
    const collection = client.collection(collectionName);
    const result = await collection.aggregate([
      {
        $addFields: {
          menuIdObj: { $toObjectId: "$menuId" }
        }
      },
      {
        $lookup: {
          from: "menus",
          localField: "menuIdObj",
          foreignField: "_id",
          as: "menuItems"
        }
      },
      {
        $unwind: "$menuItems"
      },
      {
        $project: {
          "_id": 1,
          "menuId": 1,
          "jumlah": 1,
          "menuItems.nama": 1,
          "menuItems.harga": 1,
          "menuItems.desk": 1,
          "menuItems.tag": 1,
          "menuItems.kategori": 1,
          "menuItems.rating": 1,
          "menuItems.imgURL": 1
        }
      }
    ]).toArray();
    
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
}
