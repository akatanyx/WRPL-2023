import Head from "next/head";

export default function signup() {
  return (
    // <!-- Gambar -->
    <div>
      <Head>
        <title>LetsEAT: Sign Up</title>
      </Head>
      <div className="flex justify-center mt mt-10">
        <img src="/logo.svg" alt="" />
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
                    Nama
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
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Email
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
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Username
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
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Nomor Telepon
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
              <div className="flex justify-center mt-2">
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
              {/* <!-- Re-enter Password --> */}
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Re-enter Password
                  </p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="Re-enter Password"
                    type="Re-enter Password"
                    aria-label="Re-enter Password"
                    placeholder="Re-enter Password"
                  />
                </div>
              </div>
              {/* <!-- Button Signup --> */}
              <div className="flex justify-center py-4">
                <button className="bg-[#EC7505] text-white text-[20px] px-4 py-2 rounded font-bold">
                  SIGNUP
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
              <a href="login" className="font-inter font-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
        <div className="mb-7"></div>
      </div>
    </div>
  );
}
