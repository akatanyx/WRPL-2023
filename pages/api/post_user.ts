import { connectToDatabase } from "../mongodb";
import bcrypt from "bcrypt";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    let result = {};
    let resultUpdateWallet = {};
    let resultInsertWallet = {};
    const db = await connectToDatabase();
    const collection = db.collection("users");

    // Define data
    const data = {
      nama: req.body.nama,
      email: req.body.email,
      nomor_hp: req.body.nomor_hp,
      imgURL: req.body.imgURL,
      password: await bcrypt.hash(req.body.password, 10),
      alamat: req.body.alamat,
      roles: ["customer", "wallet"],
    };

    // Insert data ke database dan dapatkan id user
    result = await collection.insertOne(data);
    const user = await collection
      .findOne({ email: req.body.email })
      .then((user) => user);

    if (!user) {
      res.status(400).json({ message: "Error, User has not been added" });
    } else {
      // Insert wallet to database
      resultInsertWallet = await db.collection("wallets").insertOne({
        id_user: user._id.toString(),
        nomor_wallet: "null",
        saldo: 0,
        pin: "null",
      });
    }

    res.status(201).json({
      message: "Success, new User including Ewallet has been added!",
      result,
      resultInsertWallet,
      resultUpdateWallet,
    });
  } else {
    res.status(400).json({ message: "Only POST requests allowed" });
  }
}
