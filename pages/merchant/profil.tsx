import Header_w_notif from "@/components/Merchant/Header_w_notif";
import M_Navbar from "@/components/Merchant/M_Navbar";

import Link from "next/link";
import LogoutButton from "@/components/logout/Logout";
import { useMerchant } from "@/hooks/useMerchant";

export default function Profil_sel() {
  const merchant = useMerchant();

  const {
    nama_resto: namaToko = "",
    alamat_resto: alamatToko = "",
    deskripsi_resto: deskripsiToko = "",
    imgURL_resto: imgURLToko = "",
    nomor_ktp_merchant: nomorKTP = "Belum diisi",
    email_merchant: email = "Belum diisi",
    jam_buka = "Belum diisi",
    jam_tutup = "Belum diisi",
  } = merchant || {};
  return (
    <div className="font-poppins bg-[#E89005] max-h-screen">
      <Header_w_notif>{namaToko}</Header_w_notif>

      <div className="mt-[254px] rounded-t-lg bg-white">
        {/* Content */}
        <div
          className="w-[294px] h-[685px] -translate-y-[210px] bg-white mx-auto 
                                rounded-[23px] shadow-lg relative"
        >
          {/* Logout Button */}
          <button className="absolute right-0 translate-x-6 -translate-y-6">
            <LogoutButton />
          </button>

          {/* Profile Picture */}
          <img src={imgURLToko} className="mx-auto pt-[17px]" />

          {/* Nama dan Alamat */}
          <div className="flex flex-col justify-center items-center mt-[17px]">
            {/* Nama Toko */}
            <h1 className="font-semibold text-[21px]">{namaToko}</h1>

            {/* Alamat Toko */}
            <p className="font-medium text-[14px] text-[#808080]">
              {alamatToko}
            </p>
          </div>

          {/* Border Pembatas */}
          <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[10px] mb-[17px]"></div>

          <div className="flex flex-col gap-y-[5px] w-[241px] mx-auto ">
            {/* Deskripsi Toko */}
            <div>
              <div>Deskripsi toko:</div>
              <p className="font-medium text-[14px] text-[#808080]">
                {deskripsiToko}
              </p>
            </div>
            {/* Nomor KTP */}
            <div>
              <div>Nomor KTP:</div>
              <p className="font-medium text-[14px] text-[#808080]">
                {nomorKTP}
              </p>
            </div>
            {/* Email Merchant */}
            <div>
              <div>Email Merchant:</div>
              <p className="font-medium text-[14px] text-[#808080]">{email}</p>
            </div>
            {/* Jam Buka */}
            <div>
              <div>Jam Buka:</div>
              <p className="font-medium text-[14px] text-[#808080]">
                {jam_buka}
              </p>
            </div>
            {/* Jam Tutup */}
            <div>
              <div>Jam Tutup:</div>
              <p className="font-medium text-[14px] text-[#808080]">
                {jam_tutup}
              </p>
            </div>
          </div>

          {/* Ganti Mode */}
          <h1 className="text-[#A9A9A9] text-center font-medium text-[16px] mt-[5px]">
            Ganti Mode
          </h1>
          <div className="flex justify-center gap-x-[21px]">
            <Link href="/customer/hero">
              <img src="/b_profil_customer.svg" alt="" />
            </Link>

            <Link href="/driver/landing_driver">
              <img src="/b_profil_driver.svg" alt="" />
            </Link>
          </div>

          {/* Button Edit Profil */}
          <Link href="/merchant/edit_profil">
            <button
              className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
            flex justify-center items-center mt-[15px]
            "
            >
              <h1 className="text-white text-lg font-semibold">Edit Profil</h1>
            </button>
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <M_Navbar />
    </div>
  );
}
