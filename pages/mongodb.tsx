import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = 'mongodb://fadyanabila:Fayzatha1412@ac-4n2ekr3-shard-00-00.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-01.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-02.t4vhx85.mongodb.net:27017/?ssl=true&replicaSet=atlas-bzii5w-shard-0&authSource=admin&retryWrites=true&w=majority';
const uri: string = MONGODB_URI;

const client: MongoClient = new MongoClient(uri);

export async function connectToDatabase(): Promise<Db> {
  // if (!client.isConnected()) {
  await client.connect();
  // }
  return client.db('letseat');
}