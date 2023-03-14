// import { MongoClient } from 'mongodb';

// export default async function handler(req: any, res: any) {
//   const MONGODB_URI = 'mongodb://fadyanabila:Fayzatha1412@ac-4n2ekr3-shard-00-00.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-01.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-02.t4vhx85.mongodb.net:27017/?ssl=true&replicaSet=atlas-bzii5w-shard-0&authSource=admin&retryWrites=true&w=majority';
//   const uri: string = MONGODB_URI;
//   const client = new MongoClient(uri, {});

//   if (req.method === 'POST') {
//     const { query } = req.body;
//     if (!query) {
//       return res.status(400).json({ message: 'No search query provided.' });
//     }

//     try {
//       await client.connect();
//       const collection = client.db('letseat').collection('menus');
//       const posts = await collection.find({ $text: { $search: query } }).toArray();
//       res.status(200).json(posts);
//     } catch (error) {
//       res.status(500).json({ error: 'error' });
//     } finally {
//       await client.close();
//     }
//   }
// }

import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb://fadyanabila:Fayzatha1412@ac-4n2ekr3-shard-00-00.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-01.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-02.t4vhx85.mongodb.net:27017/?ssl=true&replicaSet=atlas-bzii5w-shard-0&authSource=admin&retryWrites=true&w=majority';

export default async function handler(req : any, res : any) {
  const { query } = req.query;

  const client = await MongoClient.connect(MONGODB_URI, {
  });

  const db = client.db('letseat');
  const collection = db.collection('menus');

  const queryObject = { $text: { $search: query } };
  const options = { projection: { _id: 0 } };

  const cursor = await collection.find({ nama: { $regex: query, $options:'i'}});
  const results = await cursor.toArray();

  await client.close();

  res.status(200).json(results);
}
