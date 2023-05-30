import MapContainer from "@/components/Customer/testmap/MapContainer"

import Link from "next/link"

export default function PesananDiterima() {
    return (
        <div className="font-poppins">

            <button className="absolute top-5 left-4 z-10">
                <Link href="/customer/hero">
                    <img src="/b_pesananproses_arrow_navigationsvg.svg" alt="" />
                </Link>
            </button>

            <MapContainer />

            <div className="absolute bottom-0">
                <div className="bg-[#E89005] rounded-t-3xl w-screen h-[40px] translate-y-6 z-10"></div>
                <div className="bg-white w-screen rounded-t-3xl translate-y-0.5">
                    <div className="w-[330px] mx-auto pb-[30px]">
                        <img src="/e_transberhasil_icon.svg" className="mx-auto pt-[6px] mb-5"/>
                        
                        <img src="/b_pesanber_gambar.svg" className="mx-auto mb-[1px]" />

                        <div className="font-medium text-[16px] text-center">
                            <h1>Pesanan anda telah diterima</h1>
                            <h1>oleh restoran</h1>
                        </div>

                        <h1 className="text-[14px] text-[#838080] text-center">
                            Pesanan akan selesai sekitar 30 - 50 menit lagi
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}