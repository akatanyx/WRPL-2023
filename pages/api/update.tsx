import { connectToDatabase } from "../mongodb";
import { MongoClient } from "mongodb";

// export default async function handler(req: any, res: any) {
//   const { query, namainput } = req.query;

//   const client = await MongoClient.connect(MONGODB_URI);

//   const db = client.db("letseat");
//   const collection = db.collection("menus");

//   const queryObject = { $text: { $search: query } };
//   const options = { projection: { _id: 0 } };

//   const cursor = await collection.updateOne(
//     { nama: { $regex: query, $options: "i" } },
//     {
//       $set: { nama: namainput },
//     }
//   );
//   const results = cursor.acknowledged;

//   await client.close();

//   res.status(200).json(results);
// }

export default async function updateSaldo(req: any, res: any) {
  if (req.method === "PUT") {
    const { saldo } = req.query;

    const db = await connectToDatabase();
    const collection = db.collection("e-wallet");

    // Menambah saldo e-wallet
    const cursor = await collection.updateOne(
      { id_wallet: "1" },
      {
        $inc: { saldo: saldo },
      }
    );
    const results = cursor.acknowledged;

    res.status(200).json(results);
  } else {
    res.status(400).json({ message: "Only PUT requests allowed" });
  }
}