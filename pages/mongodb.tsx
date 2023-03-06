import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://fadyanabila:Fayzatha1412@wrpl-2023.t4vhx85.mongodb.net/?retryWrites=true&w=majority';
const uri: string = MONGODB_URI;

const client: MongoClient = new MongoClient(uri);

export async function connectToDatabase(): Promise<Db> {
  // if (!client.isConnected()) {
  await client.connect();
  // }
  return client.db('letseat');
}