import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Profil_input_sel from "components/profil_input_sel";
import NavbarCust from "@/components/Navbar_Customer";
import Header_Customer from "@/components/Header_Customer";

const TambahMenu: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login"); //direct ke login
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        <Head>
          <title>Profil Seller Page</title>
        </Head>
        {/* Header1 */}
        <div>
          <Header_Customer />
        </div>
        {/* Content */}
        <div>
          <div>
            <div>
              <img className="absolute w-full -z-10" src="wave_atas1.svg"></img>
              <img className="absolute w-full -z-10" src="wave_atas2.svg"></img>
            </div>

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
                <img
                  src="/icon_profil_2.svg"
                  alt="profil seller"
                  className="p-5"
                />
              </div>

              {/* Isi Profil*/}
              <div className="flex flex-col justify-center gap-4 p-4">
                {/* Nama seller */}
                <div className="flex items-center just gap-2">
                  <div className="flex items-center justify-center bg-white shadow-md shadow-slate-300 rounded-lg w-10 h-10">
                    <img
                      src="/icon_profil_profile.svg"
                      alt=""
                      className="w-8"
                    />
                  </div>
                  <Profil_input_sel> Nama Customer</Profil_input_sel>
                </div>

                {/* Nomor Telepon */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center bg-white shadow-md shadow-slate-300 rounded-lg w-10 h-10">
                    <img src="/icon_telepon.svg" alt="" className="w-8" />
                  </div>
                  <Profil_input_sel> Nomor Telepon </Profil_input_sel>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center bg-white shadow-md shadow-slate-300 rounded-lg w-10 h-10">
                    <img src="/icon_email.svg" alt="" className="w-8" />
                  </div>
                  <Profil_input_sel> Email </Profil_input_sel>
                </div>
              </div>

              <button className="bg-[#D84A05] p-2 rounded-lg shadow-md shadow-slate-300">
                <h1 className="font-bold text-base text-white">Edit Profile</h1>
              </button>
              <div className="p-2">
                <Link href="signup_merchant">
                  <button className="bg-[#D84A05] p-2 rounded-lg shadow-md shadow-slate-300">
                    <h1 className="font-bold text-base text-white">Merchant</h1>
                  </button>
                </Link>
                <Link href="register_driver">
                  <button className="bg-[#D84A05] p-2 rounded-lg shadow-md shadow-slate-300">
                    <h1 className="font-bold text-base text-white">Driver</h1>
                  </button>
                </Link>
              </div>
            </div>
            <footer>
              <img
                className="absolute w-full -z-10 "
                src="wave_bawah1.svg"
              ></img>
              <img
                className="absolute w-full -z-10"
                src="wave_bawah2.svg"
              ></img>
            </footer>
          </div>
        </div>
        {/* Navbar */}
        <div>
          <NavbarCust />
        </div>
      </div>
    );

  return <div className="text-bold text-3xl">loading</div>;
};

export default TambahMenu;
