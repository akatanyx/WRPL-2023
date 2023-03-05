import Head from "next/head";

export default function register_driver() {
  return (
    // <!-- Gambar -->
    <div>
      <Head>
        <title>LetsEAT: Sign Up</title>
      </Head>

      {/* Header */}
      <div className="mt-6 flex flex-col items-center justify-center 0 font-bold font-inter 
        text-[27px] text-[#E89005]">
            <h1>REGISTRASI</h1>
            <h1>DRIVER</h1>
      </div>

      {/* <!-- Login --> */}
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4">
          <div className="max-w-full ">
            {/* <!-- Isi action dengan tujuan page apabila menekan submit --> */}
            <form
              action="/"
              method="POST"
              className="space-y-3"
            >
              {/* <!-- Form --> */}
              {/* <!-- Nama --> */}
              <div className="flex justify-center">
                <div className="max-w-full">
                  <p className="text-left font-bold text-[15px]">
                    Nama Lengkap
                  </p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="nama"
                    type="nama"
                    aria-label="nama"
                    placeholder="Nama"
                  />
                </div>
              </div>
              {/* <!-- Email  --> */}
              <div className="flex justify-center ">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Tempat/Tanggal Lahir
                  </p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="email"
                    type="email"
                    aria-label="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              {/* <!-- Username  --> */}
              <div className="flex justify-center ">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Jenis Kendaraan
                  </p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="Username"
                    type="Username"
                    aria-label="Username"
                    placeholder="Username"
                  />
                </div>
              </div>

              {/* <!-- Nomor Telepon  --> */}
              <div className="flex justify-center ">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Nomor Polisi
                  </p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="Nomor Telepon"
                    type="Nomor Telepon"
                    aria-label="Nomor Telepon"
                    placeholder="Nomor Telepon"
                  />
                </div>
              </div>

              {/* <!-- Password --> */}
              <div className="flex justify-center ">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Password
                  </p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="Password"
                    type="Password"
                    aria-label="Password"
                    placeholder="Password"
                  />
                </div>
              </div>
              
                {/* Agree Terms and Cond */}
                <div className="flex justify-center">
                    <div className="max-w-full">
                        <input type="checkbox" className="mr-2 border-[#E89005] border-2 rounded-lg" />
                        <label className="text-[15px] font-inter">
                            I agree to the{" "}
                            <a href="#" className="font-inter font-semibold">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>
                </div>

              {/* <!-- Button Signup --> */}
              <div className="flex justify-center">
                <button className="bg-[#EC7505] hover:bg-orange-700 text-white text-[20px]
                             px-9 py-2 rounded-lg font-bold">
                  REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- Signup --> */}
        <div className="flex justify-center mt-4">
          <div className="max-w-full">
            <p className="text-center text-sm font-inter">
              Already have an account?{" "}
              <a href="login_driver" className="font-inter font-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
      {/* Kurang Wave */}
      {/* Insert Wave here */}
      </div>
    </div>
  );
}
