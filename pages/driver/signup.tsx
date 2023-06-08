export default function () {
    return (
        <div className="font-poppins">
            <img src="/d_login_image.svg" className="mt-[59px] mx-auto -translate-x-[9px]" />

            <h1 className="font-bold text-[24px] ml-[39px] mt-[25px]
                            w-[290px]]"
            >
                Pendaftaran Driver
            </h1>

            <form className="flex flex-col gap-y-5 mt-4 items-center">

                    {/* Email */}
                    <div>
                        <input
                            type="text"
                            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Re-enter Password */}
                    <div>
                        <input
                            type="password"
                            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Re-enter Password"
                            // value={repassword}
                            // onChange={(e) => setRepassword(e.target.value)}
                        />
                    </div>
            </form>
        </div>
    )
}