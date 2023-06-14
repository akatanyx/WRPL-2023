import { connectToDatabase } from "../mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === "PUT" && req.query.type === "customer") {
    const { userID, imgURL } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("users"); // nama databasenya users ... bukan customer

    // Mengganti profil customer
    const cursor = await collection.updateOne(
      { _id: userID },
      { $set: { imgURL: imgURL } }
    );

    const results = await cursor;

    res.status(200).json(results);
  } else if (req.method === "PUT" && req.query.type === "merchant") {
    const { merchantID, imgURL } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("merchants");

    // Mengganti profil merchant
    const cursor = await collection.updateOne(
      { _id: merchantID },
      { $set: { imgURL: imgURL } }
    );

    const results = await cursor;

    res.status(200).json(results);
  } else {
    res.status(400).json({ message: "Only PUT requests allowed" });
  }
}
