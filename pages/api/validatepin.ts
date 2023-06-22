import { connectToDatabase } from "../mongodb";
import bcrypt from "bcrypt";

export default async function handler(req: any, res: any) {
    try {
        if(req.query.method === "POST"){
            const db = await connectToDatabase();
            const collection = db.collection("wallets");
            const { id_user, pin } = req.body;
            const cursor = await collection.findOne({ id_user: id_user });
            const results = await bcrypt.compare(pin, cursor?.pin);
            res.status(200).json(results);
        }
    } catch (error) {
        res.status(400).json({ message: "Only POST requests allowed" });
    }
}