import { connectToDatabase } from '../mongodb';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const db = await connectToDatabase();

    let result = {};
    const { type } = req.query;
    const collectionName = getTypeCollectionName(type);

    if (collectionName) {
      const collection = db.collection(collectionName);
      let data = {};

      switch (type) {
        case 'user':
          data = { 
            nama: req.body.nama, 
            email: req.body.email,
            password: req.body.password, 
            repassword: req.body.repassword 
          };
          break;
        case 'driver':
          data = { 
            nama_driver: req.body.nama_driver, 
            alamat: req.body.alamat, 
            kendaraan: req.body.kendaraan, 
            plat_motor: req.body.plat_motor, 
            password: req.body.password 
          };
          break;
        case 'merchant':
          data = { 
            nama: req.body.nama, 
            email: req.body.email, 
            username: req.body.username, 
            no: req.body.no, 
            password: req.body.password, 
            repassword: req.body.repassword 
          };
          break;
        case 'resto':
          data = { 
            nama: req.body.nama, 
            jam_buka: req.body.jam_buka, 
            jam_tutup: req.body.jam_tutup, 
            jarak: req.body.jarak
          };
          break;
        case 'menu':
          data = { 
            nama: req.body.nama, 
            harga: req.body.harga, 
            desk: req.body.desk, 
            tag: req.body.tag, 
            kategori: req.body.kategori, 
            rating: req.body.rating, 
            imgURL: req.body.imgURL 
          };
          break;
        default:
          res.status(404).json({ message: `Collection not found for type: ${type}` });
          return;
      }

      result = await collection.insertOne(data);
      res.status(201).json({ message: `${type} added!`, result });
    } else {
      res.status(404).json({ message: `Collection not found for type: ${type}` });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

function getTypeCollectionName(type: string): string {
  switch (type) {
    case 'user':
      return 'users';
    case 'driver':
      return 'drivers';
    case 'merchant':
      return 'merchants';
    case 'resto':
      return 'restos';
    case 'menu':
      return 'menus';
    default:
      return '';
  }
}

