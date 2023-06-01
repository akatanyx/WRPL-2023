import { MongoClient, Db } from 'mongodb';

const uri: string = process.env.MONGODB_URI as string;

export async function connectToDatabase(): Promise<MongoClient> {
  const client: MongoClient = new MongoClient(uri, { retryWrites: true });
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
}
