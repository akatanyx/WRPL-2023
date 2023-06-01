import { MongoClient } from 'mongodb';

export default async function handler(req : any, res : any) {
  const { query } = req.query;
  const URI:string = process.env.MONGODB_URI as string;
  const client = await MongoClient.connect(URI, {
  });

  const db = client.db('letseat');
  const collection = db.collection('menus');

  const cursor = await collection.find({ nama: { $regex: query, $options:'i'}});
  const results = await cursor.toArray();

  await client.close();

  res.status(200).json(results);
}