import  { connectToDatabase } from './mongodb';

async function addMerchant(merchant : any) {
  const db = await connectToDatabase();

  const collection = db.collection('merchants');

  const result = await collection.insertOne(merchant);

  return result;
}

export { addMerchant };