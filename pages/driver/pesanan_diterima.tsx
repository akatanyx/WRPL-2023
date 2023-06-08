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
            <div className="rounded-t-3xl mx-auto shadow-lg fixed w-[360px] -translate-y-[50px] bg-white pt-[17px] pb-[44px]">          
                
                {/* Nama Pemesan */}
                <div className="flex pl-[35px] pt-[20px] items-center w-[296px] justify-between">
                    <h1 className="font-semibold text-lg">
                        Kamado Tanjiro
                    </h1>
                    <img src="/d_pesananditerima_arrow.svg" alt="" />
                </div>

                {/* Isi Pesanan */}
                <div className="flex flex-col ml-[31px] gap-y-[13px] mt-[17px]">
                    
                    {/* Nama dan Alamat */}
                    <div className="flex items-center gap-x-2">
                        <img src="/d_pesananditerima_makanan.svg" alt="" />
                        <div className="flex-col flex">
                            
                            {/* Nama Toko */}
                            <h1 className="font-semibold text-[14px] translate-y-0.5">
                                Anteiku Coffee
                            </h1>

                            {/* Alamat Toko */}
                            <p className="text-[14px] text-[#737373] -translate-y-1">
                                Jl. Lowalah No 123, Kotabaru
                            </p>
                        </div>
                    </div>

                    {/* Pendapatan */}
                    <div className="flex items-center gap-x-2">
                        <img src="/d_pesananditerima_gaji.svg" alt="" />
                        <h1 className="font-semibold text-[14px]">
                            Rp.50.000
                        </h1>
                    </div>
                </div>
                
            </div>

            <Navbar_driver />
            
        </div>
    )
}