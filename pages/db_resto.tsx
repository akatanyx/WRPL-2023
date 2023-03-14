import  { connectToDatabase } from './mongodb';

async function addResto(resto : any) {
  const db = await connectToDatabase();

  const collection = db.collection('restos');

  const result = await collection.insertOne(resto);

  return result;
}

export { addResto };