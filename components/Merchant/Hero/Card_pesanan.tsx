import Link from 'next/link'

export default function Card_Pesanan () {
    return (
        <div>
            <Link href="/merchant/rincian_pesanan">
            
            <div className="font-poppins w-[327px] h-[74px] ">
            <div className="pl-4 flex flex-col rounded-lg shadow-md pr-4 py-[14px]">
                <div className="flex justify-between text-[14px] text-[#939393] font-medium">
                    {/* Nomor Pesanan */}
                    <h1>
                        A-1
                    </h1>

                    {/* Waktu Pemesanan */}
                    <p>
                        17.00
                    </p>
                </div>


                {/* Nama Customer */}
                <h1 className="text-[14px]">
                        Kamado Tanjiro
                </h1>

                <div className="flex justify-between">
                    {/* Total Item */}
                    <h1 className="font-semibold text-[14px]">
                        2 Makanan
                    </h1>

                    <img src="/m_hero_arrow.svg" alt="" />
                </div>
                
            </div>           
            </div>
            </Link>
        </div>
        
    )
}