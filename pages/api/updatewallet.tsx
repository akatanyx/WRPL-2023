import { connectToDatabase } from "../mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === "PUT" && req.query.type === "add") {
    const { idwallet, saldo } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("wallets");

    // Menambah saldo e-wallet
    const cursor = await collection.updateOne(
      { id_wallet: idwallet }, 
      {
        $inc: { saldo: saldo },
      }
    );
  
    const results = cursor.acknowledged;

    res.status(200).json(results);
  } else if (req.method === "PUT" && req.query.type === "sub") {
    const { idwallet, total } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("wallets");

    // Mengurangi saldo e-wallet
    const cursor = await collection.updateOne(
      { id_wallet: idwallet },
      {
        $inc: { saldo: -total },
      }
    );
  
    const results = cursor.acknowledged;

    res.status(200).json(results);
  }
  else {
    res.status(400).json({ message: "Only PUT requests allowed" });
  }
}