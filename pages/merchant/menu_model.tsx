import { useState } from 'react';
import { useRouter } from 'next/router';

export default function signup_menu() {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [desk, setDesk] = useState('');
    const [tag, setTag] = useState('');
    const [kategori, setKategori] = useState('');
    const [rating, setRating] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (event : any) => {
      event.preventDefault();
      const response = await fetch('/api/signup?type=menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, harga, desk, tag, kategori, rating}),
      });
      if (response.ok) {
        router.push('/success');
      } else {
        console.error(response.statusText);
      }
    };

    return (
      <form onSubmit={handleSubmit}
        action="/"
        method="POST"
        className="space-y-3">
        <div className="flex justify-center">
          <div className="max-w-full">
            <p className="text-left font-bold text-[15px]">
              Nama
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="nama"
              type="nama"
              aria-label="nama"
              placeholder="Nama"
              value={nama}
              onChange={(event) => setNama(event.target.value)}
            />
          </div>
        </div>
        {/* <!-- Harga  --> */}
        <div className="flex justify-center mt-2">
          <div className="max-w-full">
            <p className="text-left font-bold  text-[15px]">
              harga
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="harga"
              type="harga"
              aria-label="harga"
              placeholder="harga"
              value={harga}
              onChange={(event) => setHarga(event.target.value)}
            />
          </div>
        </div>
        {/* <!-- desk  --> */}
        <div className="flex justify-center mt-2">
          <div className="max-w-full">
            <p className="text-left font-bold  text-[15px]">
              desk
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="desk"
              type="desk"
              aria-label="desk"
              placeholder="desk"
              value={desk}
              onChange={(event) => setDesk(event.target.value)}
            />
          </div>
        </div>
  
        {/* <!-- tag  --> */}
        <div className="flex justify-center mt-2">
          <div className="max-w-full">
            <p className="text-left font-bold  text-[15px]">
              tag
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="tag"
              type="tag"
              aria-label="tag"
              placeholder="tag"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
            />
          </div>
        </div>
  
        {/* <!-- kategori --> */}
        <div className="flex justify-center mt-2">
          <div className="max-w-full">
            <p className="text-left font-bold  text-[15px]">
              kategori
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="kategori"
              type="kategori"
              aria-label="kategori"
              placeholder="kategori"
              value={kategori}
              onChange={(event) => setKategori(event.target.value)}
            />
          </div>
        </div>
        {/* <!-- rating --> */}
        <div className="flex justify-center mt-2">
          <div className="max-w-full">
            <p className="text-left font-bold  text-[15px]">
              rating
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="rating"
              type="rating"
              aria-label="rating"
              placeholder="rating"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
          </div>
        </div>
        {/* <!-- Button Signup --> */}
        <div className="flex justify-center py-4">
          {/* <Link
          href="Confirmation"> */}
            <button className="bg-[#EC7505] text-white
             text-[20px] px-4 py-2 rounded font-bold">
              SUBMIT
            </button>
          {/* </Link> */}
        </div>
      </form>
    )
}
