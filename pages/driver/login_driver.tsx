import Head from "next/head";

export default function LoginDriver() {
    return (

        <>  

            <Head>
                <title>Let's Eat Driver</title>
            </Head>

            <div className="flex flex-col justify-center items-center font-inter">
                
                {/* Logo */}
                <div>
                    <img src="logo.svg" alt="" className="mt-8" />
                </div>

                {/* LetsEat */}
                <div className="mt-4">
                    <h1 className="text-[35px] font-bold text-[#EC7505]">Let's Eat</h1>
                </div>

                <form>
                    {/* email */}
                    <div className="p-2">
                        <h1 className="text-left font-bold text-base">Username</h1>
                        <input type='text' className="p-1 bg-white w-226 h-30 rounded-md border-2 
                        border-[#E89005] flex justify-center" placeholder="Rahmania" />
                    </div>

                    {/* Password */}
                    <div className="p-2">
                        <h1 className="text-left font-bold text-base">Username</h1>
                        <input type='password' className="p-1 bg-white w-226 h-30 rounded-md border-2 
                        border-[#E89005] flex justify-center" placeholder="Rahmania" />
                    </div>

                    {/* Forgot Password */}
                    <div>
                        <a href="">
                            <h1 className="text-right text-[#D84A05] font-bold text-sm">Forgot Password</h1>
                        </a>
                    </div>

                    {/* tombol login */}
                    <div className="flex justify-center mt-4">
                        <div className="py-2">
                            <button className="bg-[#EC7505] hover:bg-orange-700 text-white text-[20px]
                             px-11 py-2 rounded-lg font-bold">
                            LOGIN
                            </button>
                        </div>
                    </div>
                </form>

                {/* tidak punya akun */}
                <div className="flex flex-row justify-center py-2">
                    <h2 className="text-sm">
                    Doesn't have an account?{" "}
                    <a href="signup_driver" className="text-bold text-sm font-bold">
                        SIGN UP
                    </a>
                    </h2>
                </div> 
            </div>
        </>
    )
}