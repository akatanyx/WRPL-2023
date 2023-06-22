import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../mongodb";
import { User } from "../interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectToDatabase();
  const email = req.query.email;
  const user = await db.collection("users").findOne({ email: email });

  if (user) {
    try {
      const collection = db.collection("carts");
      const result = await collection
        .aggregate([
          {
            $match: {
              id_user: user._id.toString(),
            },
          },
          {
            $addFields: {
              menuIdObj: { $toObjectId: "$id_menu" },
            },
          },
          {
            $lookup: {
              from: "menus",
              localField: "menuIdObj",
              foreignField: "_id",
              as: "menuItems",
            },
          },
          {
            $unwind: "$menuItems",
          },
          {
            $project: {
              _id: 1,
              id_user: 1,
              id_menu: 1,
              jumlah: 1,
              "menuItems.nama_menu": 1,
              "menuItems.harga_menu": 1,
              "menuItems.desk": 1,
              "menuItems.tag": 1,
              "menuItems.kategori": 1,
              "menuItems.rating_menu": 1,
              "menuItems.imgURL_menu": 1,
            },
          },
        ])
        .toArray();

      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
}
