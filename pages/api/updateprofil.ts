import { ObjectId } from "mongodb";
import { connectToDatabase } from "../mongodb";
import { Merchant, User } from "../interface";
import { m } from "framer-motion";

export default async function handler(req: any, res: any) {
  if (req.method === "PUT" && req.query.type === "customer") {
    const user:User = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("users");

    // Mengganti profil customer
    const cursor = await collection.updateOne(
      { _id: new ObjectId(user._id) },
      {
        $set: {
          imgURL: user.imgURL,
          name: user.nama,
          nomor_hp: user.nomor_hp,
          email: user.email,
          alamat: user.alamat,
        },
      }
    );

    const results = await cursor;

    res.status(200).json(results);
  } else if (req.method === "PUT" && req.query.type === "merchant") {
    const merchant:Merchant = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("merchants");

    // Mengganti profil merchant
    const cursor = await collection.updateOne(
      { id_user: merchant.id_user },
      {
        $set: {
          nama_resto: merchant.nama_resto,
          alamat_resto: merchant.alamat_resto,
          deskripsi_resto: merchant.deskripsi_resto,
          imgURL_resto: merchant.imgURL_resto,
          nomor_ktp_merchant: merchant.nomor_ktp_merchant,
          email_merchant: merchant.email_merchant,
          jam_buka: merchant.jam_buka,
          jam_tutup: merchant.jam_tutup,
        },
      }
    );

    const results = await cursor;

    res.status(200).json(results);
  } else if (req.method === "PUT" && req.query.type === "driver") {
    const { id, imgURL, nomor_stnk, nomor_sim, nomor_plat, jenis_motor } =
      req.body;

    const db = await connectToDatabase();
    const collection = db.collection("drivers");

    // Mengganti profil driver
    const driverID = new ObjectId(id);
    const cursor = await collection.updateOne(
      { _id: driverID },
      {
        $set: {
          imgURL_driver: imgURL,
          nomor_stnk: nomor_stnk,
          nomor_sim: nomor_sim,
          nomor_plat: nomor_plat,
          jenis_motor: jenis_motor,
        },
      }
    );

    const results = await cursor;

    res.status(200).json(results);
  } else {
    res.status(400).json({ message: "Only PUT requests allowed" });
  }
}
