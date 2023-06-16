import Link from "next/link";

export default function () {
    return (
        <div className="font-poppins">
            <img src="/d_login_image.svg" className="mt-[59px] mx-auto -translate-x-[9px]" />

            <h1 className="font-bold text-[24px] ml-[39px] mt-[25px]
                            w-[290px]"
            >
                Pendaftaran Driver
            </h1>

            <form className="flex flex-col gap-y-5 mt-4 items-center">

                    {/* Nomor STNK */}
                    <div>
                        <input
                            type="text"
                            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Nomor STNK"
                        />
                    </div>

                    {/* Merk Motor */}
                    <div>
                        <input
                            type="text"
                            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Merk Motor"
                        />
                    </div>

                    {/* Jenis Motor */}
                    <div>
                        <input
                            type="text"
                            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Jenis Motor"
                        />
                    </div>

                    {/* Nomor Plat */}
                    <div>
                        <input
                            type="text"
                            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Nomor Plat"
                        />
                    </div>
            </form>

            {/* Register */}
            <Link href='/driver/pesanan_baru'>
                <div className="w-[290px] h-[53px] mt-[71px] mb-[50px] rounded-lg mx-auto
                                    flex justify-center items-center bg-[#EC7505]">
                    <h1 className="font-semibold text-[19px] text-white">Register</h1>
                </div>
            </Link>
        </div>
    )
}