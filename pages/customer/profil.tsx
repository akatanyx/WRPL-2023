import Header_w_notif from "@/components/Merchant/Header_w_notif";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import LogoutButton from "@/components/logout/Logout";
import { User } from "../interface";

export default function Profil_sel({ user }: { user: User }) {
  const nama = user?.nama;
  const nomor_hp = user?.nomor_hp?.toString() || "Belum diisi";
  const email = user?.email;
  const imgURL = user?.imgURL || "/m_profil_pp.svg";
  const alamat = user?.alamat || "Belum diisi";

  return (
    <div className="font-poppins bg-[#E89005] max-h-screen">
      <Header_w_notif>{nama}</Header_w_notif>

      <div className="mt-[254px] bg-white">
        {/* Content */}
        <div
          className="w-[294px] h-[635px] -translate-y-[210px] bg-white mx-auto 
                                rounded-[23px] pt-[17px] shadow-lg relative"
        >
          {/* Logout Button */}
          <div className="absolute right-0 translate-x-6 -translate-y-6">
            <LogoutButton />
          </div>

          {/* Profile Picture */}
          <div className="flex h-[130px]">
            <Image
              src={imgURL}
              className="mx-auto rounded-full border object-none border-gray-100 shadow-sm"
              alt=""
              width={130}
              height={130}
            />
          </div>

          {/* Nama*/}
          <div className="flex flex-col justify-center items-center mt-[17px]">
            {/* Nama Customer */}
            <h1 className="font-semibold text-[21px]">{nama}</h1>
          </div>

          {/* Border Pembatas */}
          <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[16px] mb-[45px]"></div>

          <div className="flex flex-col gap-y-[30px] w-[241px] mx-auto ">
            {/* Nomor Telepon */}
            <div className="flex gap-x-[17px] items-center">
              <img src="/m_profil_telepon.svg" alt="" />
              <h1 className="text-[14px]">{nomor_hp}</h1>
            </div>

            {/* Email */}
            <div className="flex gap-x-[17px] items-center">
              <img src="/m_profil_email.svg" alt="" />
              <h1 className="text-[14px]">{email}</h1>
            </div>

            {/* Lokasi */}
            <div className="flex gap-x-[17px] items-center ml-[6px]">
              <img src="/b_profil_alamat.svg" alt="" />
              <h1 className="text-[14px]">{alamat}</h1>
            </div>
          </div>

          {/* Ganti Mode */}
          <h1 className="text-[#A9A9A9] text-center font-medium text-[16px] mt-[40px]">
            Ganti Mode
          </h1>
          <div className="flex justify-center gap-x-[21px]">
            <Link href="/merchant/landing_merchant">
              <img src="/b_profil_merchant.svg" alt="" />
            </Link>

            <Link href="/driver/signup_driver">
              <img src="/b_profil_driver.svg" alt="" />
            </Link>
          </div>

          {/* Button Edit Profil */}
          <Link
            href="/customer/edit_profil"
            className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
                            flex justify-center items-center mt-[25px]
                            "
          >
            <h1 className="text-white text-lg font-semibold">Edit Profil</h1>
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <C_Navbar />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session?.user) {
    // User is not authenticated, redirect to login page or show an error
    return {
      redirect: {
        destination: "/customer/login",
        permanent: false,
      },
    };
  } else {
    // User is authenticated, check their roles in the database
    const user:User = await fetch(
      `http://localhost:3000/api/get?type=user&email=${session?.user.email}`
    ).then((res) => res.json());
    return {
      props: {
        user,
      },
    };
  }
}
