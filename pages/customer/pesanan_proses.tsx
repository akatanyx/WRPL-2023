export default function pesanan_proses () {
    return (
        <div className="font-poppins">
            <div className="absolute bottom-0">
                <div className="bg-[#E89005] rounded-t-3xl w-screen h-[14px] mb-[14px]"></div>
                <div className="bg-white w-screen rounded-t-3xl">
                    <div className="w-[330px] mx-auto pb-[30px]">
                        <img src="/e_transberhasil_icon.svg" className="mx-auto pt-[6px] mb-5"/>
                        
                        {/* Driver Menuju Restoran */}
                        <div className="flex pl-[22px] items-center">
                            <img src="/b_pesananproses_dmenujuresto.svg"/>
                            {/* IF PESANAN SUDAH DIAMBIL DRIVER */}
                            <img src="/b_pesananproses_dmenujucust.svg" className="hidden"/>
                            
                            <div className="flex flex-col pl-[9px]">
                                <h1 className="font-semibold text-[16px]">Driver menuju restoran</h1>
                                {/* IF PESANAN SUDAH DIAMBIL DRIVER */}
                                <h1 className="font-semibold text-[16px] hidden">Driver menuju tempatmu</h1>    
                                
                                
                                <h1 className="text-[15px] text-[#838080]">
                                    Estimasi tiba 20 menit
                                </h1>
                            </div>
                        </div>
                        
                        {/* Border Pembatas */}
                        <div className="border-2 border-[#D9D9D9] w-[315px] mx-auto mt-[13px] mb-[17px]"></div>

                        <div className="flex items-center pl-[22px]">
                            <img src="/b_pesananproses_fotocustomer.svg" alt="" />

                            <div className="flex flex-col pl-[9px]">
                                {/* Nama Customer */}
                                <h1 className="font-semibold text-[16px]">
                                    Manusia Ganteng
                                </h1>

                                {/* Plat Nomor */}
                                <h1 className="font-medium text-[14px] text-[#838080]">
                                    AB 1234 XYZ
                                </h1>
                            </div>
                            
                            <img src="/b_pesananproses_telepon.svg" className="pl-6" />
                            <img src="/b_pesananproses_chat.svg" className="pl-[9px]" />
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}