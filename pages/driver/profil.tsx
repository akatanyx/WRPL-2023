import Header_w_notif from "@/components/Merchant/Header_w_notif";
import Navbar_driver from "@/components/Driver/Navbar_driver";

import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { connectToDatabase } from "../mongodb";
import LogoutButton from "@/components/logout/Logout";

export default function profil_sel({ driver, user }: any) {
  const namaDriver = user.name;

  const imgURL = driver.imgURL_driver;
  const nomorStnk = driver.nomor_stnk;
  const nomorSim = driver.nomor_sim;
  const nomorPlat = driver.nomor_plat;
  const jenisMotor = driver.jenis_motor;

  return (
    <div className="font-poppins bg-[#E89005] max-h-screen">
      <Header_w_notif>{namaDriver}</Header_w_notif>

      <div className="mt-[254px] rounded-t-lg bg-white">
        {/* Content */}
        <div
          className="w-[294px] h-[635px] -translate-y-[210px] bg-white mx-auto 
                                rounded-[23px] shadow-lg relative pt-[17px]"
        >
          {/* Logout Button */}
          <button className="absolute right-0 translate-x-6 -translate-y-6">
            <LogoutButton />
          </button>

          {/* Profile Picture */}
          <div className="flex h-[130px]">
            <Image
              src={imgURL}
              className="mx-auto rounded-full border border-gray-100 shadow-sm"
              alt=""
              width={130}
              height={130}
            />
          </div>

          {/* Nama dan Alamat */}
          <div className="flex flex-col justify-center items-center mt-[17px]">
            {/* Nama Driver */}
            <h1 className="font-semibold text-[21px]">{namaDriver}</h1>

            {/* Nomor Plat Driver */}
            <p className="font-medium text-[16px]">{nomorPlat}</p>
          </div>

          {/* Border Pembatas */}
          <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[9px] mb-[17px]"></div>

          <div className="flex flex-col gap-y-4 w-[241px] mx-auto ">
            {/* Nomor STNK */}
            <div>
              <div>Nomor STNK:</div>
              <p className="font-medium text-[14px] text-[#808080]">
                {nomorStnk}
              </p>
            </div>

            {/* Nomor SIM */}
            <div>
              <div>Nomor SIM:</div>
              <p className="font-medium text-[14px] text-[#808080]">
                {nomorSim}
              </p>
            </div>

            {/* Jenis Motor */}
            <div>
              <div>Jenis Motor:</div>
              <p className="font-medium text-[14px] text-[#808080]">
                {jenisMotor}
              </p>
            </div>
          </div>

          {/* Ganti Mode */}
          <h1 className="text-[#A9A9A9] text-center font-medium text-[16px] mt-[18px]">
            Ganti Mode
          </h1>
          <div className="flex justify-center gap-x-[21px]">
            <Link href="/customer/hero">
              <img src="/b_profil_customer.svg" alt="" />
            </Link>

            <Link href="/merchant/signup_merchant">
              <img src="/b_profil_merchant.svg" alt="" />
            </Link>
          </div>

          {/* Button Edit Profil */}
          <Link href="/driver/edit_profil">
            <button
              className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
                            flex justify-center items-center mt-[50px]
                        "
            >
              <h1 className="text-white text-lg font-semibold">Edit Profil</h1>
            </button>
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <Navbar_driver />
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
    const db = await connectToDatabase();
    const collection = db.collection("users");
    const user = await collection.findOne({ email: session.user.email });

    if (!user || !user.roles.includes("driver")) {
      // User doesn't have the driver role, redirect to signup driver page
      return {
        redirect: {
          destination: "/signup_driver",
          permanent: false,
        },
      };
    }

    // User has the driver role get the driver data
    const driverCollection = db.collection("drivers");
    const driver = await driverCollection.findOne({
      id_user: user._id.toString(),
    });
    return {
      props: {
        driver: JSON.parse(JSON.stringify(driver)),
        user: JSON.parse(JSON.stringify(user)),
      },
    };
  }
}
