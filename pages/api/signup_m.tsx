import { addMerchant } from "../db_merchant";

export default async function handler(req : any, res : any) {
  if (req.method === 'POST') {
    const { nama, email, username, no, password, repassword/*, ktp */} = req.body;

    // Validate user input

    const merchant = { nama, email, username, no, password, repassword/*, ktp*/};

    const result = await addMerchant(merchant);

    res.status(201).json({ message: 'Merchant added!', result });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}