import { ObjectId } from "mongodb";
import { connectToDatabase } from "../mongodb";

export default async function handler(req: any, res: any) {
  if (req.method === "PUT" && req.query.type === "customer") {
    const { id, imgURL, name, phone, email, address } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("users");

    // Mengganti profil customer
    const userID = new ObjectId(id);
    const cursor = await collection.updateOne(
      { _id: userID },
      {
        $set: {
          imgURL: imgURL,
          name: name,
          phoneNumber: phone,
          email: email,
          address: address,
        },
      }
    );

    const results = await cursor;

    res.status(200).json(results);
  } else if (req.method === "PUT" && req.query.type === "merchant") {
    const {
      id,
      imgURLToko,
      namaToko,
      alamatToko,
      deskripsiToko,
      nomorKTP,
      emailToko,
      jam_buka,
      jam_tutup,
    } = req.body;
    const db = await connectToDatabase();
    const collection = db.collection("merchants");

    // Mengganti profil merchant
    const merchantID = new ObjectId(id);
    const cursor = await collection.updateOne(
      { _id: merchantID },
      {
        $set: {
          nama_resto: namaToko,
          alamat_resto: alamatToko,
          deskripsi_resto: deskripsiToko,
          imgURL_resto: imgURLToko,
          nomor_ktp_merchant: nomorKTP,
          email_merchant: emailToko,
          jam_buka: jam_buka,
          jam_tutup: jam_tutup,
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
