import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';

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
      <div className="flex flex-col items-center justify-center">
        <div className="mt-4">
          <div className="max-w-full ">
            <form action="/" method="POST" className="space-y-3">
              <div className="flex justify-center">
                <div className="max-w-full">
                  <p className="text-left font-bold text-[15px]">Nama</p>
                  <input
                    className="border-2 border-[#E89005] rounded-lg p-2 flex-1 w-[226px] h-[30px]"
                    id="nama"
                    type="nama"
                    aria-label="nama"
                    placeholder="Nama"
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
                  />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="max-w-full">
                  <p className="text-left font-bold  text-[15px]">
                   Input FOTO KTP
                  </p>
                  <input
                    className=" flex-1 w-[226px] h-[30px]"
                    id="myfile"
                    type="file"
                    aria-label="Re-enter Password"
                    placeholder="Re-enter Password"
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
      </div>
    </div>
  );
}
