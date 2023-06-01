// api to upadate cart using aggregate mongodb
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const collectionName:string = "carts"
    let client;
  
  try {
    client = await connectToDatabase();
    const collection = client.db("letseat").collection(collectionName);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
}