import  { connectToDatabase } from './mongodb';

async function addDriver(driver : any) {
  const db = await connectToDatabase();

  const collection = db.collection('drivers');

  const result = await collection.insertOne(driver);

  return result;
}

export { addDriver };