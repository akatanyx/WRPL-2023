import { addResto } from "../db_resto";

export default async function handler(req : any, res : any) {
  if (req.method === 'POST') {
    const {nama, jam_buka, jam_tutup, jarak} = req.body;

    // Validate user input

    const resto = {nama, jam_buka, jam_tutup, jarak};

    const result = await addResto(resto);

    res.status(201).json({ message: 'Restaurant added!', result });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}