import Header_w_notif from "@/components/Merchant/Header_w_notif"
import Card_Transaksi from "@/components/Merchant/Riwayat_Pesanan/Card_Transaksi"
import M_Navbar from "@/components/Merchant/M_Navbar"

export default function riwayat_pesanan () {
    return (
        <div className="font-poppins">
            <Header_w_notif>
                Anteiku
            </Header_w_notif>

            {/* Pilih Bulan */}
            <div className="mt-[18px] flex mx-[15px]">
                <button className="px-2 h-[26px] bg-[#EC7505] rounded-lg">
                    <h1 className="text-white font-semibold text-[16px]">
                        Mei 2023
                    </h1>
                </button>
                
                <button className="px-2 h-[26px] bg-transparent rounded-lg">
                    <h1 className=" font-semibold text-[16px]">
                        Juni 2023
                    </h1>
                </button>

                <button className="px-2 h-[26px] bg-transparent rounded-lg">
                    <h1 className=" font-semibold text-[16px]">
                        Juli 2023
                    </h1>
                </button>
            </div>

            {/* History Pesanan */}
            <div className="mx-auto w-[316px]">
                
                {/* History Hari Ini */}
                <div className="mt-4">
                    <h1 className="font-semibold text-[#16px]">Hari Ini</h1>
                    <div>
                        <div className="flex flex-col gap-y-10">
                            <Card_Transaksi />
                            <Card_Transaksi />
                        </div>
                    

                        {/* Border Pembatas */}
                        <div className="border-b-2 border-[#D9D9D9] w-[315px] mx-auto mt-[50px] mb-[8px]"></div>

                        <div className="flex justify-between">
                            <h1 className="font-semibold text-[16px]">
                                Total
                            </h1>

                            {/* Total Harga */}
                            <p className="font-medium text-[16px]">
                                Rp.30.000
                            </p>
                        </div>

                        {/* Border Pembatas */}
                        <div className="border-b-2 border-[#D9D9D9] w-[315px] mx-auto mt-[8px] mb-[6px]"></div>                 
                    </div>
                </div>

                {/* History Hari Ini */}
                <div className="mt-4">
                    <h1 className="font-semibold text-[#16px]">Hari Ini</h1>
                    <div>
                        <div className="flex flex-col gap-y-10">
                            <Card_Transaksi />
                            <Card_Transaksi />
                        </div>
                    

                        {/* Border Pembatas */}
                        <div className="border-b-2 border-[#D9D9D9] w-[315px] mx-auto mt-[50px] mb-[8px]"></div>

                        <div className="flex justify-between">
                            <h1 className="font-semibold text-[16px]">
                                Total
                            </h1>

                            {/* Total Harga */}
                            <p className="font-medium text-[16px]">
                                Rp.30.000
                            </p>
                        </div>

                        {/* Border Pembatas */}
                        <div className="border-b-2 border-[#D9D9D9] w-[315px] mx-auto mt-[8px] mb-[6px]"></div>                 
                    </div>
                </div>

                {/* History Hari Ini */}
                <div className="mt-4">
                    <h1 className="font-semibold text-[#16px]">Hari Ini</h1>
                    <div>
                        <div className="flex flex-col gap-y-10">
                            <Card_Transaksi />
                            <Card_Transaksi />
                        </div>
                    

                        {/* Border Pembatas */}
                        <div className="border-b-2 border-[#D9D9D9] w-[315px] mx-auto mt-[50px] mb-[8px]"></div>

                        <div className="flex justify-between">
                            <h1 className="font-semibold text-[16px]">
                                Total
                            </h1>

                            {/* Total Harga */}
                            <p className="font-medium text-[16px]">
                                Rp.30.000
                            </p>
                        </div>

                        {/* Border Pembatas */}
                        <div className="border-b-2 border-[#D9D9D9] w-[315px] mx-auto mt-[8px] mb-[6px]"></div>                 
                    </div>
                </div>
            </div>

            <M_Navbar />
        </div>
    )
}