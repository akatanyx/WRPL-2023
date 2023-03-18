import React from "react";
import Head from "next/head";
import Profil_input_sel from "components/profil_input_sel";
import Link from "next/link";
import Waveatas from "@/components/Waveatas";
import Wavebawah from "@/components/Wavebawah";
import Navbar_driver from "@/components/Navbar_driver";

export default function profil_driver() {
  return (
    // background masih nge bug (tidak memenuhi layar)
    <div>
      <Waveatas />

      <Head>
        <title>Profil Driver</title>
      </Head>

      <div className="flex flex-col items-center font-inter">
        {/* Header */}
        <div className="flex items-center">
          <div className="text-3xl p-4 font-bold text-white">Profil</div>
          {/* Aku belum bisa bikin dia ke kiri gitu */}
          <button
            className="absolute translate-x-48 md:right-1 md:-translate-x-20 
                        bg-white rounded-lg"
          >
            <Link href="login">
              <img src="/icon_logout.svg" alt="" />
            </Link>
          </button>
        </div>

        {/* Profile Photo seller */}
        <div>
          <img src="/icon_profil_2.svg" alt="profil seller" className="p-5" />
        </div>

        {/* Isi Profil*/}
        <div className="flex flex-col justify-center gap-4 p-4 z-10">
          {/* Nama seller */}
          <div className="flex items-center just gap-2">
            <div className="flex items-center justify-center bg-white shadow-md shadow-slate-300 rounded-lg w-10 h-10">
              <img src="/icon_profil_profile.svg" alt="" className="w-8" />
            </div>
            <Profil_input_sel> Nama Driver </Profil_input_sel>
          </div>

          {/* Nomor Telepon */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-white shadow-md shadow-slate-300 rounded-lg w-10 h-10">
              <img src="/icon_telepon.svg" alt="" className="w-8" />
            </div>
            <Profil_input_sel> 087842367075 </Profil_input_sel>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-white shadow-md shadow-slate-300 rounded-lg w-10 h-10">
              <img src="/icon_email.svg" alt="" className="w-8" />
            </div>
            <Profil_input_sel> kenkanerki123@gmail.com </Profil_input_sel>
          </div>

          {/* Jenis Motor */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-white shadow-md shadow-slate-300 rounded-lg w-10 h-10">
              <img src="/icon_sepeda.svg" alt="" className="w-8" />
            </div>
            <Profil_input_sel> Sepeda Motor / AB 1234 KC </Profil_input_sel>
          </div>
        </div>

        <button className="bg-[#D84A05] p-2 rounded-lg shadow-md shadow-slate-300">
          <h1 className="font-bold text-base text-white">Edit Profile</h1>
        </button>
        <div className="p-2">
          <Link href="/">
            <button className="bg-[#D84A05] p-2 rounded-lg shadow-md shadow-slate-300">
              <h1 className="font-bold text-base text-white">
                Kembali ke Customer
              </h1>
            </button>
          </Link>
        </div>
      </div>

      <Wavebawah />
      <Navbar_driver />
    </div>
  );
}
