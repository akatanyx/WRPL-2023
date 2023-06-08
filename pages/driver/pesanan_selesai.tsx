import Header_w_notif from "@/components/Merchant/Header_w_notif"
import List_Menu from "@/components/Merchant/Rincian_Pes/list_Menu"
import Navbar_driver from "@/components/Driver/Navbar_driver";

import Link from 'next/link'

export default function rincian_pesanan () {
    return (
        <div className="font-poppins">
            <Header_w_notif>
                Budi Santosos
            </Header_w_notif>

            <Link href="/driver/pesanan_baru">
                <div className="bg-[#EC7505] w-screen flex gap-x-3 pl-5 py-3 rounded-b-md">
                    <img src="/m_rincian_arrowback.svg" alt="" />
                    <h1 className="font-semibold text-lg text-white">
                        Detail Pesanan
                    </h1>
                </div>
            </Link>

            {/* Isi Pesanan */}
            <div className="mx-[18px] mt-[26px] md:flex md:justify-center">
                {/* Nama Pemesan */}
                <h1 className="font-medium text-[16px]">
                    Kamado Tanjiro
                </h1>

                {/* Border Pembatas */}
                <div className="border-b-2 border-[#D9D9D9] w-[323px] mx-auto my-[15px]"></div>

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

                <img src="/d_pesananselesai_line.svg" className="translate-x-[14px]" />

                {/* Alamat Customer*/}
                <div className="flex items-center gap-x-2 translate-x-1 mt-[5px]">
                    <img src="/d_profil_location.svg" />
                    <h1 className="font-medium text-[14px]">
                        Jl. Lowalah No 123, Kotabaru
                    </h1>
                </div>

                {/* Catatan Pembeli */}
                <h1 className="bg-[#FAE5DB] text-[14px] w-[323px] py-[14px] px-3 rounded-md mt-[9px] mb-[17px]">
                    Esnya jangan terlalu banyak, gulanya juga jangan terlalu banyak
                </h1>

                {/* Border Pembatas */}
                <div className="border-b-2 border-[#D9D9D9] w-[323px] mx-auto mb-[23px]"></div>

                <h1 className="font-semibold text-[16px] mb-[15px]">
                    Detail Makanan
                </h1>

                {/* List Menu */}
                <div className="flex flex-col gap-y-2">
                    <List_Menu>Biji Kopi</List_Menu>
                    <List_Menu>Biji Onta</List_Menu>
                    <List_Menu>Biji Kuda</List_Menu>
                    <List_Menu>Biji Kedelai</List_Menu>
                </div>

                {/* Border Pembatas */}
                <div className="border-b-2 border-[#D9D9D9] w-[323px] mx-auto my-[15px]"></div>

                {/* Pendapatan */}
                <h1 className="font-semibold text-[16px] mb-[10px]">Pendapatan</h1>
                <div className="flex items-center gap-x-2 -translate-y-[5px]">
                    <img src="/d_pesananditerima_gaji.svg" alt="" />
                    <h1 className="font-semibold text-[14px]">
                        Rp.50.000
                    </h1>
                </div>

                
            </div>

            {/* Navbar */}
            <Navbar_driver />
        </div>
    )
}