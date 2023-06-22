import Link from 'next/link'
import Head from 'next/head'

export default function forgot_password () {
    return (
        <>
            <Head>
                <title>Forgot Password</title>
            </Head>
            

            {/* Navigasi Back To Index */}
            <div className="mx-[27px] my-[27px]">
                <Link href='/customer'>
                    <button>
                        <img src="/icon_login_arrow_back.svg" alt="" />
                    </button>
                </Link>
            </div>

            {/* Login */}
            <div className="flex flex-col mx-[37px] mt-16 gap-y-6 md:items-center">
                <h1 className="font-poppins font-bold text-[24px]">Reset Password</h1>
                <form className="flex flex-col gap-y-3 mt-1">
                    {/* Email */}
                    <div>
                        <input 
                        type="password" 
                        className="border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                        placeholder="Enter New Password"
                        />
                    </div>

                    {/* Password */}
                    <div className='mt-2'>
                        <input 
                        type="password" 
                        className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                        placeholder="Re-enter New Password"
                        />
                    </div>

                    {/* Button Apply */}
                    <Link href='/customer/login' 
                    className='mt-4 flex justify-center items-center w-[290px] h-[52px] 
                                bg-[#EC7505] rounded-lg shadow-lg'>
                            <button className="text-white font-semibold font-poppins text-[19px]">
                                    Apply
                            </button>
                    </Link>
                </form>
            </div>
        </>
    )
}