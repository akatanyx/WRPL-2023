import { MongoClient, Db } from 'mongodb';

const uri: string = process.env.MONGODB_URI as string;
const client: MongoClient = new MongoClient(uri);

export async function connectToDatabase(): Promise<Db> {
  // if (!client.isConnected()) {
  await client.connect();
  // }
  return client.db('letseat');
}