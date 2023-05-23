import Link from "next/link";
import { useState } from "react";

import Navbar_driver from "@/components/Driver/Navbar_driver";

export default function Pesanan_baru() {
    // Untuk Merubah Status
    const [status, setStatus] = useState(0);

    const handleClick = () => {
        setStatus((prevStatus) => (prevStatus + 1) % 3);
    };

    let backgroundColor = "";
    let buttonText = "";

    switch (status) {
        case 0:
            backgroundColor = "#0FBC0B";
            buttonText = "Online";
            break;
        case 1:
            backgroundColor = "#9A9A9A";
            buttonText = "Offline";
            break;
        case 2:
            backgroundColor = "#E8505B";
            buttonText = "Busy";
            break;
        default:
            backgroundColor = "#0FBC0B";
            buttonText = "Online";
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
            <img src="/d_pesananbaru_map.svg" />

            {/* Pesanan Baru */}
            <div className="rounded-t-3xl mx-auto shadow-lg fixed w-[360px] -translate-y-11 bg-white pt-[17px] py-[19px]">          
                <div className="flex-col flex justify-center">
                    <h1 className="text-[24px] font-semibold text-center">Pesanan Baru</h1>
                    
                    <div className="flex items-center justify-center text-center mt-[27px]">
                        {/* Jarak */}
                        <div className="flex-col justify-center items-center text-[14px] text-[#838080]">
                            <h1 className="font-semibold">Jarak</h1>
                            <p>
                                5.2 KM
                            </p>
                        </div>
                        <img src="/d_pesananbaru_border.svg" className="mx-[28px]" />

                        {/* Waktu */}
                        <div className="flex-col justify-center items-center text-[14px] text-[#838080]">
                            <h1 className="font-semibold">Waktu</h1>
                            <p>
                                20 min
                            </p>
                        </div>
                        <img src="/d_pesananbaru_border.svg" className="mx-[28px]" />

                        {/* Jumlah */}
                        <div className="flex-col justify-center items-center text-[14px] text-[#838080]">
                            <h1 className="font-semibold">Jarak</h1>
                            <p>
                                Rp. 50.000
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Terima */}
                <div className="flex w-[297px] mx-auto mt-[27px] ">
                    <Link href="#">
                        <button className="w-[142px] h-[53px] bg-[#D84A05] rounded-[10px]
                                        flex justify-center items-center"
                        >
                            <h1 className="font-semibold text-[19px] text-white flex">
                                {/* Terima (30) */}
                                Terima (30)
                            </h1>
                        </button>
                    </Link>

                    <Link href="#">
                        <button className="ml-[13px] w-[142px] h-[53px] bg-[#E8505B] rounded-[10px]
                                        flex justify-center items-center mb-[25px]"
                        >
                            <h1 className="font-semibold text-[19px] text-white flex">
                                {/* Terima (30) */}
                                Abaikan
                            </h1>
                        </button>
                    </Link>
                </div>
            </div>

            <Navbar_driver />
            
        </div>
    )
}