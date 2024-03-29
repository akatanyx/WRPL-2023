import { ObjectId } from "mongodb";
import { connectToDatabase } from "../mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === "PUT" && req.query.type === "customer") {
    const { userId, nama, imgURL, phone, email, alamat } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("users"); // nama databasenya users ... bukan customer

    // Mengganti profil customer
    const userID = new ObjectId(userId)
    const cursor = await collection.updateOne(
      { _id: userID },
      { $set: { imgURL: imgURL, phone: phone, email: email, 'alamat':alamat} }
    );

    const results = await cursor;

    res.status(200).json(results);
  } else {
    res.status(400).json({ message: "Only PUT requests allowed" });
  }
}
