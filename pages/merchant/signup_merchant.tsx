import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function signup_merchant() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [no, setNo] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  //const [ktp, setKTP] = useState('');
  const router = useRouter();

  const handleSubmit = async (event : any) => {
    event.preventDefault();
    const response = await fetch('/api/signup?type=merchant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nama, email, username, no, password, repassword/*, ktp */}),
    });
    if (response.ok) {
      router.push('/success');
    } else {
      console.error(response.statusText);
    }
  };

  return (
    // <!-- Gambar -->
    <div className="font-poppins">
      <Head>
        <title>LetsEAT Merchant: Sign Up</title>
      </Head>

      <div className="flex justify-center mt mt-10">
        <img src="/m_signup_image.svg" alt="" />
      </div>

      <h1 className="font-bold text-[24px] ml-[39px] mt-[25px] w-[290px]"
      >
        Pendaftaran Merchant
      </h1>

      <form className="flex flex-col gap-y-5 mt-4 items-center">
        {/* Nama Toko */}
        <div>
          <input
            type="text"
            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins 
                          text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Nama Toko"
          />
        </div>

        {/* Alamat Toko */}
        <div>
          <input
            type="text"
            className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                        text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Alamat Toko"
          />
        </div>

        {/* Deskripsi Singkat */}
        <div>
          <input
            type="text"
            className="border border-[#9A9A9A] rounded-lg w-[290px] h-[172px] font-poppins
                        text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
            placeholder="Deskripsi Singkat"
          />
        </div>

      </form>

      {/* Register */}
      <Link href='/merchant/merchant_dashboard'>
        <div className="w-[290px] h-[53px] mt-[71px] mb-[50px] rounded-lg mx-auto
                        flex justify-center items-center bg-[#EC7505]">
          <h1 className="font-semibold text-[19px] text-white">Register</h1>
        </div>
      </Link>

{/* 
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4">
          <div className="max-w-full ">
              <form onSubmit={handleSubmit}
                action="/"
                method="POST"
                className="space-y-3">
              <div className="flex justify-center">
                <div className="max-w-full">
                  <p className="text-left font-bold text-[15px]">Nama</p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="nama"
                    type="nama"
                    aria-label="nama"
                    placeholder="Nama"
                    value={nama}
                    onChange={(event) => setNama(event.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">Email</p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="email"
                    type="email"
                    aria-label="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">Username</p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="Username"
                    type="Username"
                    aria-label="Username"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
              </div>
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
                    value={no}
                    onChange={(event) => setNo(event.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">Password</p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="Password"
                    type="Password"
                    aria-label="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                    Re-enter Password
                  </p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="Re-enter Password"
                    type="Password"
                    aria-label="Re-enter Password"
                    placeholder="Re-enter Password"
                    value={repassword}
                    onChange={(event) => setRepassword(event.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                   Input Foto KTP
                  </p>
                  <input
                    className=" flex-1 w-[226px] h-[30px]"
                    id="myfile"
                    type="file"
                    aria-label="Input Foto KTP"
                    placeholder="Input Foto KTP"
                    value={ktp}
                    onChange={(event) => setKTP(event.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center py-4">
                <Link href="/merchant_dashboard">
                  <button className="bg-[#EC7505] text-white text-[20px] px-4 py-2 rounded font-bold">
                    SIGNUP
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
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
      </div> */}
    </div>
  )
}
