import { ObjectId } from "mongodb";
import { connectToDatabase } from "../mongodb";
import bcrypt from "bcrypt";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const db = await connectToDatabase();

    let result = {};
    const { type } = req.query;
    const collectionName = getTypeCollectionName(type);

    if (collectionName) {
      const collection = db.collection(collectionName);
      let data = {};

      switch (type) {
        case "user":
          data = {
            nama: req.body.nama,
            email: req.body.email,
            nomor_hp: req.body.nomor_hp,
            imgURL: req.body.imgURL,
            password: await bcrypt.hash(req.body.password, 10),
            address: req.body.address,
            roles: ["customer"],
          };
          break;
        case "driver":
          data = {
            id_user: req.body.id_user,
            nomor_stnk: req.body.nomor_stnk,
            nomor_sim: req.body.nomor_sim,
            nomor_plat: req.body.nomor_plat,
            jenis_motor: req.body.jenis_motor,
            rating_driver: req.body.rating_driver,
          };
          break;
        case "merchant":
          data = {
            id_user: req.body.id_user,
            nama_resto: req.body.nama_resto,
            alamat_resto: req.body.alamat_resto,
            deskripsi_resto: req.body.deskripsi_resto,
            imgURL_resto: req.body.imgURL_resto,
            nomor_ktp_merchant: req.body.nomor_ktp_merchant,
            email_merchant: req.body.email_merchant,
            jam_buka: req.body.jam_buka,
            jam_tutup: req.body.jam_tutup,
            rating_resto: req.body.rating,
            menu_resto: req.body.menu_resto, // Array id menu yang dijual merchant
          };
          break;
        case "menu":
          data = {
            nama_menu: req.body.nama,
            harga_menu: req.body.harga,
            deskripsi_menu: req.body.desk,
            tag: req.body.tag,
            kategori: req.body.kategori,
            rating_menu: req.body.rating_menu,
            imgURL_menu: req.body.imgURL_menu,
          };
          break;
        case "cart":
          data = {
            id_user: req.body.id_user,
            id_menu: req.body.id_menu,
            jumlah: req.body.jumlah,
          };
          break;
        case "wallet":
          data = {
            id_user: req.body.id_user,
            nomor_wallet: req.body.nomor_wallet,
            saldo: req.body.saldo,
            pin: await bcrypt.hash(req.body.pin, 10),
          };
          break;
        case "riwayat":
          data = {
            id_user: req.body.id_user,
            id_menu: req.body.id_menu,
            id_driver: req.body.id_driver,
            id_merchant: req.body.id_merchant,
            jumlah: req.body.jumlah,
            total_harga: req.body.total_harga,
            status: req.body.status,
            tanggal: req.body.tanggal,
          };
          break;
        default:
          res
            .status(404)
            .json({ message: `Collection not found for type: ${type}` });
          return;
      }

      // Insert the data to MongoDB and get the result
      result = await collection.insertOne(data);

      res.status(201).json({ message: `${type} added!`, result });
    } else {
      res
        .status(404)
        .json({ message: `Collection not found for type: ${type}` });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

function getTypeCollectionName(type: string): string {
  switch (type) {
    case "user":
      return "users";
    case "driver":
      return "drivers";
    case "merchant":
      return "merchants";
    case "resto":
      return "restos";
    case "menu":
      return "menus";
    case "cart":
      return "carts";
    case "wallet":
      return "wallets";
    default:
      return ""; // Return an empty string for unknown types
  }
}
