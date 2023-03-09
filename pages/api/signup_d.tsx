import { addDriver } from "../db_driver";

export default async function handler(req : any, res : any) {
  if (req.method === 'POST') {
    const { nama_driver, alamat, kendaraan, plat_motor, password } = req.body;

    // Validate user input

    const driver = { nama_driver, alamat, kendaraan, plat_motor, password};

    const result = await addDriver(driver);

    res.status(201).json({ message: 'Driver added!', result });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}