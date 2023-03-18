import Link from "next/link"

export default function login () {
    return (
        <>
            {/* Navigasi Back To Index */}
            <div className="mx-[27px] my-[27px]">
                <Link href='/customer'>
                    <button>
                        <img src="/icon_login_arrow_back.svg" alt="" />
                    </button>
                </Link>
            </div>

            {/* Image */}
            <div className="flex justify-center">
                <img src="/login_image.svg" alt=""/>
            </div>

            {/* Login */}
            <div className="flex flex-col mx-[37px] mt-6 gap-y-3">
                <h1 className="font-poppins font-bold text-[24px]">Login</h1>
                <form className="flex flex-col gap-y-3 mt-1">
                    {/* Email */}
                    <div>
                        <input 
                        type="text" 
                        className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                        placeholder="Email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <input 
                        type="password" 
                        className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                        placeholder="Password"
                        />
                    </div>

                    
                    <div className="flex items-center text-center px-1 w-72 justify-between">
                        {/* Remember me */}
                        <div className="flex ">
                            <input type="checkbox" className="mr-2 rounded-lg"
                            />
                            <p className="font-poppins text-[12px]">Remember me</p>
                        </div>
                        
                        {/* Forgot password */}
                        <div className="">
                            <Link href='/customer/forgotpassword'>
                                    <p className="font-poppins text-[12px] font-medium text-[#EC7505]">
                                        Forget password?
                                    </p>
                            </Link>
                        </div>
                    </div>

                    {/* Button Login */}
                    <Link href='/customer/landing' 
                    className='flex justify-center items-center w-[290px] h-[44px] 
                                bg-[#EC7505] rounded-lg shadow-lg mt-2'>
                            <button className="text-white font-semibold font-poppins text-[19px]">
                                    Login
                            </button>
                    </Link>
                </form>

                {/* tidak punya akun */}
                <div className="flex flex-row justify-center font-poppins ">
                    <h2 className="text-sm">
                    Don't have an account?{" "}
                    <Link href='/customer/signup'>
                        <button>
                            <h1 className="font-bold text-sm">SIGN UP</h1>
                        </button>
                    </Link>
                    </h2>
                </div> 
            </div>
        </>
    )
}