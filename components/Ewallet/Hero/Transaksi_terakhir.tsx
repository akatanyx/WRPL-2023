export default function Transaksi_terakhir ({children}:any) {
    return (
        <div className="font-poppins">
            
            {/* Bulan */}
            <div className="w-screen h-[33px] bg-[#D9D9D9] flex items-center md:justify-center">
                <h1 className="pl-[27px] mt-[5px] md:pl-0">
                    {children}
                </h1>
            </div>

            {/* Content */}
            <div className="w-[310px] ml-[27px] mt-2 md:mx-auto">
                
                {/* Transaksi 1 - Top Up*/}
                <div className="flex items-center">
                    {/* Icon */}
                    <img src="/e_hero_history_topup.svg" alt="" />

                    <div className="flex-col">
                        {/* Nama Transaksi */}
                        <h1 className="text-[13px] ml-[9px]">Top Up E-Money</h1>

                        <div className="text-[12px] text-[#838080] ml-[11px]">
                            {/* Waktu */}
                            <p>5/1/2023 21:30</p>
                            
                            {/* Harga */}
                            <p>Rp70.000,00</p>
                        </div>
                    </div>

                    <div className="w-[74px] h-[26px] ml-auto bg-[#118EEA] flex justify-center items-center rounded-xl">
                        <h1 className="text-white text-[13px]">Detail</h1>
                    </div>
                </div>


                {/* Border Pembatas */}
                <div className="border border-opacity-25 border-black w-[307px] mx-auto mt-[22px] mb-[14px]"></div>
                
                {/* Transaksi 2 - Pembelian Makanan */}
                <div className="flex items-center">
                    {/* Icon */}
                    <img src="/e_hero_history_buy.svg" alt="" />

                    <div className="flex-col">
                        {/* Nama Transaksi */}
                        <h1 className="text-[13px] ml-[9px]">Pembelian Makanan</h1>

                        <div className="text-[12px] text-[#838080] ml-[11px]">
                            {/* Waktu */}
                            <p>5/1/2023 21:30</p>
                            
                            {/* Jumlah Item */}
                            <p>5 item</p>

                            {/* Harga */}
                            <p>Rp70.000,00</p>
                        </div>
                    </div>

                    <div className="w-[74px] h-[26px] ml-auto bg-[#118EEA] flex justify-center items-center rounded-xl">
                        <h1 className="text-white text-[13px]">Detail</h1>
                    </div>
                </div>

                {/* Border Pembatas */}
                <div className="border border-opacity-25 border-black w-[307px] mx-auto mt-[22px] mb-[14px]"></div>
                
                {/* Transaksi 3 - Transfer */}
                <div className="flex items-center">
                    {/* Icon */}
                    <img src="/e_hero_history_transfer.svg" alt="" />

                    <div className="flex-col">
                        {/* Nama Transaksi */}
                        <h1 className="text-[13px] ml-[9px]">Transfer</h1>

                        <div className="text-[12px] text-[#838080] ml-[11px]">
                            {/* Waktu */}
                            <p>5/1/2023 21:30</p>
                            
                            {/* Nama Pengirim */}
                            <p>Daniel Ardi Chandra</p>

                            {/* Harga */}
                            <p>Rp70.000,00</p>
                        </div>
                    </div>

                    <div className="w-[74px] h-[26px] ml-auto bg-[#118EEA] flex justify-center items-center rounded-xl">
                        <h1 className="text-white text-[13px]">Detail</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}