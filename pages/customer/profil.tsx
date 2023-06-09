import Header_w_notif from "@/components/Merchant/Header_w_notif"
import C_Navbar from "@/components/Customer/Landing/C_Navbar";

export default function profil_sel() {
    return (
        <div className="font-poppins bg-[#E89005] max-h-screen">
            
            <Header_w_notif>
                Ahmad Santoso
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

                    {/* Nama*/}
                    <div className="flex flex-col justify-center items-center mt-[17px]">
                        
                        {/* Nama Customer */}
                        <h1 className="font-semibold text-[21px]">
                            Ahmad Santoso
                        </h1>
                        
                    </div>

                    {/* Border Pembatas */}
                    <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[16px] mb-[45px]"></div>

                    <div className="flex flex-col gap-y-[30px] w-[241px] mx-auto ">

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

                        {/* Lokasi */}
                        <div className="flex gap-x-[17px] items-center ml-[6px]">
                            <img src="/b_profil_alamat.svg" alt="" />
                            <h1 className="text-[14px]">
                                Jl. Samirono Baru VI A
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
            <C_Navbar />
        </div>
    )
}
