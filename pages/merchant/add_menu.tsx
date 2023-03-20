import Head from "next/head"
import Link from "next/link"
import { useState } from 'react';
import { useRouter } from 'next/router';

import Header_TambahMenu from "@/components/Merchant/Add_Menu/Header_TambahMenu"
import Header_w_notif from "@/components/Merchant/Header_w_notif"
import M_Navbar from "@/components/Merchant/M_Navbar"

export default function add_menu () {
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
        router.push('/merchant/list_menu');
        } else {
        console.error(response.statusText);
        }
    };

    return (
        <>
            <Head>
                <title>Tambah Menu</title>
            </Head>
            
            {/* Header 1 */}
            <div>
                <Header_w_notif>
                    List Menu
                </Header_w_notif>
            </div>

            {/* Header 2 */}
            <div>
                <Header_TambahMenu />
            </div>

            {/* Input Gambar */}
            <div className="mx-[78px] mt-6  md:flex md:justify-center">
                <input type="image" src="/icon_m_inputimage.svg" alt=""className="shadow-lg rounded-lg w-[203px]" />
            </div>

            {/* Form */}
            <div className="mx-5 mt-4">
                <form onSubmit={handleSubmit}
                action="/"
                method="POST">     
                    <div className="flex-col">
                        {/* Nama Makanan */}
                        <div className="flex-col">
                            <h1 className="font-poppins font-bold text-[15px]">Nama Makanan</h1>
                            <input type="text" className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg" 
                             value={nama}
                             onChange={(event) => setNama(event.target.value)}
                             />
                        </div>
                        
                        {/* Harga */}
                        <div className="flex-col mt-2">
                            <h1 className="font-poppins font-bold text-[15px]">Harga</h1>
                            <input type="text" className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg" 
                             value={harga}
                             onChange={(event) => setHarga(event.target.value)}
                             />
                        </div>
                        
                        {/* Kategori */}
                        <div className="flex-col mt-2">
                            <h1 className="font-poppins font-bold text-[15px]">Kategori</h1>
                            
                            <Link href='/merchant/add_kategori'>
                                <button className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                                rounded-lg">
                                    <h1 className="font-popins font-semibold text-[15px] text-[#000000] text-opacity-60">Pilih</h1>
                                </button>
                            </Link>
                        </div>

                        {/* Deskripsi */}
                        <div className="flex-col mt-2">
                            <h1 className="font-poppins font-bold text-[15px]">Deskripsi Makanan</h1>
                            <input type="text" className="w-[314px] h-[142px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg" 
                             value={desk}
                             onChange={(event) => setDesk(event.target.value)}
                             />
                        </div>

                        {/* Save */}
                        <button className="w-[314px] h-[44px] bg-[#EC7505] z-10 rounded-lg flex 
                            justify-center shadow-lg items-center my-4">
                            <h1 className="text-white font-poppins font-semibold text-[19px]">
                                Save
                            </h1>
                        </button>
                    </div>
                </form>
            </div>

            <div className="mb-96"></div>

            <div>
                <M_Navbar />
            </div>
            
        </>
    )
}