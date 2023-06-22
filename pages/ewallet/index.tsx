import { useRouter } from "next/router";
import React, { useState } from "react";
import { useUser } from "@/hooks/useUser";
import { PatternFormat } from "react-number-format";

export default function WalletLandingPage() {
  const user = useUser();
  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/putwallet?type=addphone", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_user: user?._id,
        nomor_wallet: phoneNumber,
      }),
    });

    if (response.ok) {
      alert("Nomor telepon berhasil ditambahkan");
      router.push("/ewallet/hero");
    } else {
      alert("Nomor telepon gagal ditambahkan");
      console.error(response);
    }
  };

  return (
    <div className="font-poppins">
      <img src="/e_logo_lets_cash.svg" className="mx-auto mt-9" />

      <img
        src="/e_landing_image.svg"
        className="translate-x-[25px] md:mx-auto"
      />

      <h1 className="font-bold text-[24px] w-[290px] mt-[25px] mx-auto">
        Mudah, Cepat, Aman
      </h1>

      <h1 className="text-[15px] w-[290px] mt-6 mx-auto">
        Daftar ke LetsCash sekarang dengan memasukkan nomor telepon anda
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Submit Nomor Telepon */}
        <div className="w-[90%] mt-[31px] mx-[20px] flex justify-center item-center md:mx-auto">
          <img src="/e_landing_bendera.svg" />
          {/* Agar bisa auto muncul tanda "-" */}
          <PatternFormat
            format="+62 (###)-####-####"
            className="w-[210px] ml-[11px] text-[#263238] text-[21px] caret-transparent focus:outline-none"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            allowEmptyFormatting
            mask="-"
          />
        </div>

        {/* Border Pembatas */}
        <div className="border-2 border-[#D9D9D9] w-[290px] mx-auto mt-[9px]"></div>

        {/* Apply */}
        <button
          className="w-[290px] h-[53px] rounded-lg bg-[#118EEA] 
        flex justify-center items-center mx-auto mt-[29px]"
        >
          <h1 className="text-white font-semibold text-[19px]">
            Daftar Sekarang
          </h1>
        </button>
      </form>
    </div>
  );
}
