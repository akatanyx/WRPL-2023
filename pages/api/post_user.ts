import { connectToDatabase } from "../mongodb";
import bcrypt from "bcrypt";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    let result = {};
    const db = await connectToDatabase();
    const collection = db.collection("users");
    const data = {
      nama: req.body.nama,
      email: req.body.email,
      nomor_hp: req.body.nomor_hp,
      imgURL: req.body.imgURL,
      password: await bcrypt.hash(req.body.password, 10),
      alamat: req.body.alamat,
      roles: ["customer"],
    };
    result = await collection.insertOne(data);
    const user = await collection
      .findOne({ email: req.body.email })
      .then((user) => user);
    if (!user) {
      res.status(400).json({ message: "user not found" });
    } else {
      await db.collection("wallets").insertOne({
        id_user: user._id.toString(),
        nomor_wallet: "0000000000000000",
        saldo: 0,
      });
    }

    res.status(201).json({ message: "New User including ewallet has been added!", result });
  } else {
    res.status(400).json({ message: "Only POST requests allowed" });
  }
}
