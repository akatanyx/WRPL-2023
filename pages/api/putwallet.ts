import { connectToDatabase } from "../mongodb";

export default async function handler(req: any, res: any) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("wallets");
    if (req.method === "PUT" && req.query.type === "addsaldo") {
      const { id_user, saldo } = req.body;

      // Menambah saldo e-wallet
      const cursor = await collection.updateOne(
        { id_user: id_user },
        {
          $inc: { saldo: saldo },
        }
      );
      const results = cursor.acknowledged;
      res.status(200).json(results);
    } else if (req.method === "PUT" && req.query.type === "subsaldo") {
      const { id_user, total } = req.body;

      // Mengurangi saldo e-wallet
      const cursor = await collection.updateOne(
        { id_user: id_user },
        {
          $inc: { saldo: -total },
        }
      );
      const results = cursor.acknowledged;
      res.status(200).json(results);
    } else if (req.method === "PUT" && req.query.type === "addphone") {
      const { id_user, phone } = req.body;

      // Menambahkan nomor hp e-wallet
      const cursor = await collection.updateOne(
        { id_user: id_user },
        {
          $set: { nomor_wallet: phone },
        }
      );
      const results = cursor.acknowledged;
      res.status(200).json(results);
    } else if (req.method === "PUT" && req.query.type === "editpin") {
      const { id_user, pin } = req.body;

      // Menambahkan pin e-wallet
      const cursor = await collection.updateOne(
        { id_user: id_user },
        {
          $set: { pin: pin },
        }
      );
      const results = cursor.acknowledged;
      res.status(200).json(results);
    } else {
      res.status(400).json({ message: "Only PUT requests allowed" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Couldn't establish connection to MongoDB" });
  }
}
