import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2">
      <Head>
        <title>LetsEAT: Login</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white justify-center">
          {/* Logo */}
          <div className="flex justify-center py-6">
            <img
              className="h-205 w-206 justify-center rounded-lg"
              src="/logo.svg"
            ></img>
          </div>
          {/* Username */}
          <div className="p-2">
            <p className="text-left font-bold text-sm">Username</p>
            <input className="bg-white w-226 h-30 rounded-md border-2 border-[#E89005] flex justify-center"></input>
          </div>
          {/* Password */}
          <div className="p-2">
            <p className=" font-bold text-left text-sm">Password</p>
            <input className="bg-white w-226 h-30 rounded-md border-2 border-[#E89005] flex"></input>
            <p className="text-right text-[#D84A05] font-bold text-xs ">
              Forgot Password
            </p>
          </div>
          {/* tombol login */}
          <div>
            <div className="py-2">
              <button className="bg-[#EC7505] text-white text-[20px] px-4 py-2 rounded font-bold">
                LOGIN
              </button>
            </div>
          </div>
          {/* tidak punya akun */}
          <div className="flex flex-row justify-center py-2">
            <p className="text-[12px]">
              Doesn't have an account?{" "}
              <a href="signup" className="text-bold text-[12px] font-bold">
                SIGN UP
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
