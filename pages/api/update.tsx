import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb://fadyanabila:Fayzatha1412@ac-4n2ekr3-shard-00-00.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-01.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-02.t4vhx85.mongodb.net:27017/?ssl=true&replicaSet=atlas-bzii5w-shard-0&authSource=admin&retryWrites=true&w=majority";

export default async function handler(req: any, res: any) {
  const { query, namainput } = req.query;

  const client = await MongoClient.connect(MONGODB_URI);

  const db = client.db("letseat");
  const collection = db.collection("menus");

  const queryObject = { $text: { $search: query } };
  const options = { projection: { _id: 0 } };

  const cursor = await collection.updateOne(
    { nama: { $regex: query, $options: "i" } },
    {
      $set: { nama: namainput },
    }
  );
  const results = cursor.acknowledged;

  await client.close();

  res.status(200).json(results);
}

export async function updateCart(req: any, res: any) {
  const { query, namainput } = req.query;

  const client = await MongoClient.connect(MONGODB_URI);

  const db = client.db("letseat");
  const collection = db.collection("carts");

  const queryObject = { $text: { $search: query } };
  const options = { projection: { _id: 0 } };

  const cursor = await collection.updateOne(
    { nama: { $regex: query, $options: "i" } },
    {
      $set: { nama: namainput },
    }
  );
  const results = cursor.acknowledged;

  await client.close();

  res.status(200).json(results);
}
