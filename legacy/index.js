import Head from 'next/head'

export default function Home(){
  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white justify-center">
          {/* Logo */}
          <img class="h-205 w-206 justify-center rounded-lg" src="/logo.svg" ></img>
          {/* Username */}
          <div>
            <p class="text-left font-['Inter'] text-sm">Username</p>
            <input class="bg-white w-226 h-30 rounded-md border-2 border-[#E89005] flex"></input>
          </div>
          {/* Password */}
          <div>
            <p class="text-left font-['Inter'] text-sm">Password</p>
            <input class="bg-white w-226 h-30 rounded-md border-2 border-[#E89005] flex"></input>
            <p class="text-right text-[#D84A05] font-['Inter'] text-xs pr-8">Forgot Password</p>
          </div>
          {/* tombol login */}
          <div>
            <div class="pt-8"></div>
            <a href="a" class="bg-[#EC7505] rounded-md px-6 py-3 text-white font-['Inter'] text-base">LOGIN</a>
            <div class="pt-8"></div>
          </div>
          {/* tidak punya akun */}
          <div class="flex flex-row ">
            <p class="font-['Inter']">Doesn't have an account?</p>
            <a href="a" class="text-bold font-['Inter'] font-bold">SIGN UP</a>
          </div>
        </div>
      </main>
    </div>
  )
}