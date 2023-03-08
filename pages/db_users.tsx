import  { connectToDatabase } from './mongodb';

async function addUser(user : any) {
  const db = await connectToDatabase();

  const collection = db.collection('users');

  const result = await collection.insertOne(user);

  return result;
}

export { addUser };