import Link from "next/link"

export default function transaksi_berhasil () {
    return (
        <div className="font-poppins bg-[#118EEA] w-screen h-screen">
            <img src="/e_transberhasil_image.svg" alt="" className="mx-auto pt-[35px]"/>

            <div className="w-full bg-white rounded-t-3xl -translate-y-[175px] h-full
                            ">
                <img src="/e_transberhasil_icon.svg" className="mx-auto pt-[13px]"/>

                <h1 className="font-semibold text-[25px] text-center mt-[34px] text-[#263238] h-[38]">
                    Transaksi Berhasil
                </h1>

                {/* Tanggal Transaksi */}
                <p className="text-[16px] text-[#838080] text-center mt-[6px]">
                    3/18/2023 09:19 AM
                </p>

                {/* Nominal Transaksi */}
                <p className="text-[16px] text-[#838080] text-center ">
                    Rp70.000,00
                </p>
                
                <button className="w-[290px] h-[53px] border-[#118EEA] border rounded-lg mx-auto
                                    flex items-center justify-center mt-10">
                    <h1 className="text-[#118EEA] font-semibold text-[19px]">Detail Transaksi</h1>
                </button>

                <Link href="/ewallet/hero">
                <button className="w-[290px] h-[53px] bg-[#118EEA] rounded-lg mx-auto
                                    flex items-center justify-center mt-[18px]">
                    <h1 className="text-white font-semibold text-[19px]">Kembali ke Beranda</h1>
                </button>
                </Link>
                
                
                

            </div>
        </div>
    )
}