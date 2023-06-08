import Header_w_notif from "@/components/Merchant/Header_w_notif"
import M_Navbar from "@/components/Merchant/M_Navbar"

export default function profil_sel() {
    return (
        <div className="font-poppins bg-[#E89005] max-h-screen">
            
            <Header_w_notif>
                Anteiku
            </Header_w_notif>

            <div className="mt-[254px] rounded-t-lg bg-white">
                {/* Content */}
                <div className="w-[294px] h-[585px] -translate-y-[196px] bg-white mx-auto 
                                rounded-[23px] shadow-lg relative">
                    
                    {/* Logout Button */}
                    <button className="absolute right-0 translate-x-6 -translate-y-6">
                        <img src="/m_profil_logout.svg" alt="" />
                    </button>

                    {/* Profile Picture */}
                    <img src="/m_profil_pp.svg" className="mx-auto pt-[17px]"/>

                    {/* Nama dan Alamat */}
                    <div className="flex flex-col justify-center items-center mt-[17px]">
                        
                        {/* Nama Toko */}
                        <h1 className="font-semibold text-[21px]">
                            Anteiku
                        </h1>

                        {/* Alamat Toko */}
                        <p className="font-medium text-[14px] text-[#808080]">
                            Jl.Semriwing 123, Kotabaru
                        </p>
                        
                    </div>

                    {/* Border Pembatas */}
                    <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[30px] mb-[17px]"></div>

                    <div className="flex flex-col gap-y-[30px] w-[241px] mx-auto ">
            
                        {/* Nama Pemilik */}
                        <div className="flex gap-x-[17px] items-center">
                            <img src="/m_profil_akun.svg" alt="" />
                            <h1 className="text-[14px]">
                                Ken Kaneki
                            </h1>
                        </div>

                        {/* Nomor Telepon */}
                        <div className="flex gap-x-[17px] items-center">
                            <img src="/m_profil_telepon.svg" alt="" />
                            <h1 className="text-[14px]">
                                0812312391230
                            </h1>
                        </div>

                        {/* Email */}
                        <div className="flex gap-x-[17px] items-center">
                            <img src="/m_profil_email.svg" alt="" />
                            <h1 className="text-[14px]">
                                kenkaneki123@gmail.com
                            </h1>
                        </div>
                    </div>

                    {/* Button Edit Profil */}
                    <button className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
                            flex justify-center items-center mt-[90px]
                        ">
                            <h1 className="text-white text-lg font-semibold">
                                Edit Profil
                            </h1>
                    </button>
                </div>
            </div>

            {/* Navbar */}
            <M_Navbar />
        </div>
    )
}
