import Header_w_notif from "@/components/Merchant/Header_w_notif"
import List_Menu from "@/components/Merchant/Rincian_Pes/List_Menu"

import Link from 'next/link'

export default function rincian_pesanan () {
    return (
        <div className="font-poppins">
            <Header_w_notif>
                Anteiku
            </Header_w_notif>

            <Link href="/merchant/landing_merchant">
                <div className="bg-[#EC7505] w-screen flex gap-x-3 pl-5 py-3 rounded-b-md">
                    <img src="/m_rincian_arrowback.svg" alt="" />
                    <h1 className="font-semibold text-lg text-white">
                        Rincian Pesanan
                    </h1>
                </div>
            </Link>

            {/* Isi Pesanan */}
            <div className="mx-[18px] mt-[34px] md:flex md:justify-center">
                {/* Nama Pemesan */}
                <h1 className="font-medium text-[16px]">
                    Kamado Tanjiro
                </h1>

                {/* Border Pembatas */}
                <div className="border-b-2 border-[#D9D9D9] w-[323px] mx-auto my-[15px]"></div>

                {/* List Menu */}
                <div className="flex flex-col gap-y-2">
                    <List_Menu>Biji Kopi</List_Menu>
                    <List_Menu>Biji Onta</List_Menu>
                    <List_Menu>Biji Kuda</List_Menu>
                    <List_Menu>Biji Kedelai</List_Menu>
                </div>

                {/* Border Pembatas */}
                <div className="border-b-2 border-[#D9D9D9] w-[323px] mx-auto my-[15px]"></div>

                <h1 className="font-medium text-[16px] mb-3">Catatan</h1>

                {/* Isi Catatan */}
                <h1 className="bg-[#FAE5DB] text-[14px] w-[323px] py-[14px] px-3 rounded-md">
                    Esnya jangan terlalu banyak, gulanya juga jangan terlalu banyak
                </h1>

                {/* Border Pembatas */}
                <div className="border-b-2 border-[#D9D9D9] w-[323px] mx-auto my-[15px]"></div>

                <div className="flex justify-between w-[323px] text-[16px]">
                    <h1 className="font-medium">
                        Total
                    </h1>

                    {/* Total Harga */}
                    <h1 className="font-semibold">
                        Rp. 60.000
                    </h1>
                </div>
            </div>

            {/* Terima Pesanan */}
            <button className="w-[323px] h-[42px] bg-[#EC7505] rounded-md mx-auto
                            flex justify-center items-center mt-6
            ">
                <h1 className="text-white text-[20px] font-semibold">
                    Terima Pesanan
                </h1>
            </button>

            {/* Tolak Pesanan */}
            <button className="w-[323px] h-[42px] border-2 border-[#EC7505] rounded-md mx-auto
                            flex justify-center items-center mt-3
            ">
                <h1 className="text-[#EC7505] text-[20px] font-semibold">
                    Tolak Pesanan
                </h1>
            </button>
        </div>
    )
}