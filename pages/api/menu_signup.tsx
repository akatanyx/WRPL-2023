import { addMenu } from "../db_menu";

export default async function handler(req : any, res : any) {
  if (req.method === 'POST') {
    const {nama, harga, desk, tag, kategori, rating, deskripsi} = req.body;

    // Validate user input

    const menu = {nama, harga, desk, tag, kategori, rating, deskripsi};

    const result = await addMenu(menu);

    res.status(201).json({ message: 'Menu added!', result });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}