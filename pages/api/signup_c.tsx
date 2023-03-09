import { addUser } from "../db_users";

export default async function handler(req : any, res : any) {
  if (req.method === 'POST') {
    const { nama, email, username, no, password, repassword } = req.body;

    // Validate user input

    const user = { nama, email, username, no, password, repassword };

    const result = await addUser(user);

    res.status(201).json({ message: 'User added!', result });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}