import { useState } from 'react';
import { useRouter } from 'next/router';

export default function signup_menu() {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [desk, setDesk] = useState('');
    const [tag, setTag] = useState('');
    const [kategori, setKategori] = useState('');
    const [rating, setRating] = useState('');
    const [deskripsi, setDekripsi] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (event : any) => {
      event.preventDefault();
      const response = await fetch('/api/menu_signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, harga, desk, tag, kategori, rating, deskripsi }),
      });
      if (response.ok) {
        router.push('/success');
      } else {
        console.error(response.statusText);
      }
    };
}
