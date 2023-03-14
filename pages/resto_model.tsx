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
        {/* <!-- jam_buka  --> */}
        <div className="flex justify-center mt-2">
          <div className="max-w-full">
            <p className="text-left font-bold  text-[15px]">
              jam_buka
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="jam_buka"
              type="jam_buka"
              aria-label="jam_buka"
              placeholder="jam_buka"
              value={jam_buka}
              onChange={(event) => setBuka(event.target.value)}
            />
          </div>
        </div>
        {/* <!-- jam_tutup  --> */}
        <div className="flex justify-center mt-2">
          <div className="max-w-full">
            <p className="text-left font-bold  text-[15px]">
              jam_tutup
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="jam_tutup"
              type="jam_tutup"
              aria-label="jam_tutup"
              placeholder="jam_tutup"
              value={jam_tutup}
              onChange={(event) => setTutup(event.target.value)}
            />
          </div>
        </div>
  
        {/* <!-- jarak  --> */}
        <div className="flex justify-center mt-2">
          <div className="max-w-full">
            <p className="text-left font-bold  text-[15px]">
              jarak
            </p>
            <input
              className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
              id="jarak"
              type="jarak"
              aria-label="jarak"
              placeholder="jarak"
              value={jarak}
              onChange={(event) => setJarak(event.target.value)}
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
