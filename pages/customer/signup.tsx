import Link from 'next/link'
import { useState } from "react";
import { useRouter } from "next/router";

export default function signup() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('/api/signup?type=user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nama, email, password, repassword }),
        });
        if (response.ok) {
            router.push('/customer/login');
        } else {
            console.error(response);
        }
    };

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
                <img src="/signup_c_image.svg" alt="" />
            </div>

            {/* Signup*/}
            <div className="flex flex-col mx-[37px] mt-6 gap-y-3">
                <h1 className="font-poppins font-bold text-[24px]">Register</h1>

                <form className="flex flex-col gap-y-3 mt-1" onSubmit={handleSubmit}>

                    {/* Nama */}
                    <div>
                        <input
                            type="text"
                            className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Nama"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="text"
                            className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Re-enter Password */}
                    <div>
                        <input
                            type="password"
                            className=" border border-[#9A9A9A] rounded-lg w-72 h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
                            placeholder="Re-enter Password"
                            value={repassword}
                            onChange={(e) => setRepassword(e.target.value)}
                        />
                    </div>

                    {/* Button Regsiter */}
                    <div className='flex justify-center items-center w-[290px] h-[44px] 
                                bg-[#EC7505] rounded-lg shadow-lg mt-2'>
                        <button className="text-white font-semibold font-poppins text-[19px]">
                            Register
                        </button>
                    </div>
                </form>

                {/* tidak punya akun */}
                <div className="flex -translate-y-1 justify-center font-poppins ">
                    <h2 className="text-sm">
                        Already have an account?{" "}
                        <Link href='/customer/login'>
                            <button>
                                <h1 className="font-bold text-sm">Login</h1>
                            </button>
                        </Link>
                    </h2>
                </div>
            </div>
        </>
    )
}