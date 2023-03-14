import { useState } from 'react';
import { useRouter } from 'next/router';

export default function signup_resto() {
    const [nama, setNama] = useState('');
    const [jam_buka, setBuka] = useState('');
    const [jam_tutup, setTutup] = useState('');
    const [jarak, setJarak] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (event : any) => {
      event.preventDefault();
      const response = await fetch('/api/resto_signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, jam_buka, jam_tutup, jarak }),
      });
      if (response.ok) {
        router.push('/success');
      } else {
        console.error(response.statusText);
      }
    };
}
