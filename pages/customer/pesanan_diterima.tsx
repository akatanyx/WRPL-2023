export default function PesananDiterima() {
    return (
        <div className="font-poppins">
            <div className="absolute bottom-0">
                <div className="bg-[#E89005] rounded-t-3xl w-screen h-[14px] mb-[14px]"></div>
                <div className="bg-white w-screen rounded-t-3xl">
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