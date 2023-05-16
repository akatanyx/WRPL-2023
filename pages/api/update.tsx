import { connectToDatabase } from "../mongodb";
import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb://fadyanabila:Fayzatha1412@ac-4n2ekr3-shard-00-00.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-01.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-02.t4vhx85.mongodb.net:27017/?ssl=true&replicaSet=atlas-bzii5w-shard-0&authSource=admin&retryWrites=true&w=majority";

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

// // Select the database to use.
// use("letseat");

// db.getCollection("e-wallet").drop();

// db.getCollection("e-wallet").insertMany([
//   {
//     id_wallet: "1",
//     no_telepon: "081234567890",
//     nama: "bambang",
//     saldo: 1000000,
//     pin_wallet: "123456",
//   },
//   {
//     id_wallet: "2",
//     no_telepon: "081234567891",
//     nama: "bimbang",
//     saldo: 500000,
//     pin_wallet: "234567",
//   },
//   {
//     id_wallet: "3",
//     no_telepon: "081234567892",
//     nama: "bombang",
//     saldo: 250000,
//     pin_wallet: "345678",
//   },
// ]);

// db.getCollection("e-wallet").updateOne(
//   { id_wallet: "2" },
//   { $inc: { saldo: 10000 } }
// );

// db.getCollection("e-wallet").find({});
