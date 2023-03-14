import  { connectToDatabase } from './mongodb';

async function addMenu(menu : any) {
  const db = await connectToDatabase();

  const collection = db.collection('menus');

  const result = await collection.insertOne(menu);

  return result;
}

export { addMenu };