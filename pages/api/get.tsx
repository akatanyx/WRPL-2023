import { connectToDatabase } from "../mongodb";

async function get_data(id: string, collection_name: string) {
  let db;
  try {
    db = await connectToDatabase();
    const collection = db.collection(collection_name);
    const result = await collection.findOne({ id_user: id });
    return result;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// API untuk read data user, merchant, driver, wallet
export default async function handler(req: any, res: any) {
  try {
    const email = req.query.email;
    const type: string = req.query.type;

    const db = await connectToDatabase();
    const collection = db.collection("users");
    const result = await collection.findOne({ email });

    if (!result) {
      res.status(404).json({ message: "User not found" });
    } else {
      if (type === "user") {
        res.status(200).json(result);
      } else if (type === "merchant") {
        const merchant = await get_data(result._id.toString(), "merchants");
        if (merchant) {
          res.status(200).json(merchant);
        } else {
          res.status(404).json({ message: "Merchant not found" });
        }
      } else if (type === "driver") {
        const driver = await get_data(result._id.toString(), "drivers");
        if (driver) {
          res.status(200).json(driver);
        } else {
          res.status(404).json({ message: "Driver not found" });
        }
      } else if (type === "wallet") {
        const wallet = await get_data(result._id.toString(), "wallets");
        if (wallet) {
          res.status(200).json(wallet);
        } else {
          res.status(404).json({ message: "Wallet not found" });
        }
      } else {
        res.status(405).json({ message: "Method not allowed" });
      }
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
