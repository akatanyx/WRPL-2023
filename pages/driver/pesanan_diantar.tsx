import Link from "next/link";
import { useState } from "react";

import Navbar_driver from "@/components/Driver/Navbar_driver";
import MapContainer from "@/components/Customer/testmap/MapContainer"


export default function Pesanan_diterima() {
    // Untuk Merubah Status
    const [status, setStatus] = useState(0);

    const handleClick = () => {
        setStatus((prevStatus) => (prevStatus + 1) % 3);
    };

    let backgroundColor = "";
    let buttonText = "";

    switch (status) {
        case 0:
            
            backgroundColor = "#E8505B";
            buttonText = "Busy";
            break;
        case 1:
            backgroundColor = "#9A9A9A";
            buttonText = "Offline";
            break;
        case 2:
            backgroundColor = "#0FBC0B";
            buttonText = "Online";
            break;
        default:
            backgroundColor = "#E8505B";
            buttonText = "Busy";
            break;
    }

    return (
        <div className="font-poppins">
            
            {/* Status Driver */}
            {/* Misal button di click langsung berubah status */}
            <div className="relative w-[236px] mx-auto flex items-center">
                <div className="bg-[#0FBC0B] flex justify-center items-center
                                w-[165px] h-10 rounded-xl mx-auto 
                                fixed right-1/2 translate-x-1/2 top-[27px] z-10"
                                style={{ backgroundColor }}
                >
                    <h1 className="text-white text-xl font-bold">{buttonText}</h1>
                </div>

                <button className="fixed right-[38px] top-[25px] z-10" onClick={handleClick}>
                    <img src="/d_pesananbaru_circle.svg" alt="" />
                </button>
            </div>

            {/* Map */}
            <MapContainer />

            {/* Content */}
            <div className="rounded-t-3xl mx-auto shadow-lg fixed w-[360px] -translate-y-[165px] bg-white pt-[17px] pb-[44px]">          
                
                {/* Nama Pemesan */}
                <div className="flex pl-[35px] pt-[20px] items-center w-[320px] justify-between">
                    <h1 className="font-semibold text-lg">
                        Kamado Tanjiro
                    </h1>
                    <img src="/d_pesananditerima_arrow.svg" alt="" />
                </div>

                {/* Isi Pesanan */}
                <div className="flex flex-col ml-[31px] gap-y-[13px] mt-[17px]">
                    
                    {/* Alamat Customer*/}
                    <div className="flex items-center gap-x-2 translate-x-1">
                        <img src="/d_profil_location.svg" />
                        <h1 className="font-medium text-[14px]">
                            Jl. Lowalah No 123, Kotabaru
                        </h1>
                    </div>

                    {/* Catatan Pembeli */}
                    <h1 className="bg-[#FAE5DB] text-[14px] w-[288px] -translate-y-[5px] py-[14px] px-3 rounded-md">
                        Esnya jangan terlalu banyak, gulanya juga jangan terlalu banyak
                    </h1>

                    {/* Pendapatan */}
                    <div className="flex items-center gap-x-2 -translate-y-[5px]">
                        <img src="/d_pesananditerima_gaji.svg" alt="" />
                        <h1 className="font-semibold text-[14px]">
                            Rp.50.000
                        </h1>
                    </div>
                </div>
                
                {/* Terima */}
                <Link href="/driver/pesanan_selesai">
                    <button className="w-[288px] h-[45px] bg-[#D84A05] rounded-lg
                                        flex justify-center items-center mx-auto mt-[5px]"
                    >
                        <h1 className="font-semibold text-[18px] text-white">
                            Pesanan Selesai
                        </h1>
                    </button>
                </Link>
            </div>

            <Navbar_driver />
            
        </div>
    )
}