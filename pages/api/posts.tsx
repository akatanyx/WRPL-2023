import { MongoClient } from 'mongodb';

export default async function handler(req: any, res: any) {
  const collectionName = req.query.type as string;
  const uri: string = process.env.MONGODB_URI as string;
  const client = new MongoClient(uri, {});
  try {
    await client.connect();
    const collection = client.db('letseat').collection(collectionName);
    const result = await collection.find().toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  } finally {
    await client.close();
  }
}
