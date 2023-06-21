import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { User, Wallet } from "../interface";

export default function WalletLandingPage({ user }: { user: any }) {
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

    const responseUpdateRoles = await fetch("/api/updateroles", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user?._id,
        roles: "wallet",
      }),
    });

    if (response.ok && responseUpdateRoles.ok) {
      router.push("/ewallet/hero");
    } else {
      console.error(response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          npm Daftar ke LetsCash sekarang dengan memasukkan nomor telepon anda
        </h1>

        {/* Submit Nomor Telepon */}
        <div className="w-[280px] mt-[31px] ml-[42px] flex items-center md:mx-auto">
          <img src="/e_landing_bendera.svg" />
          <h1 className="text-[24px] ml-2">+62</h1>

          {/* Agar bisa auto muncul tanda "-" */}
          <InputMask
            mask="999-9999-9999"
            maskChar="-"
            type="tel"
            placeholder="000-0000-0000"
            className="w-[193px] ml-[11px] text-[#263238] text-[24px] caret-transparent focus:outline-none"
            value={phoneNumber}
            onChange={(e: any) => {
              const value = e.target.value;
              if (value.charAt(0) !== "-") {
                setPhoneNumber(value.slice(0, 14));
              }
            }}
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
      </div>
    </form>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/customer/login",
        permanent: false,
      },
    };
  }

  const user: User = await fetch(
    `http://localhost:3000/api/get?type=user&email=${session?.user.email}`
  ).then((res) => res.json());

  // If user have assigned phone number to the wallet, redirect to hero page
  const wallet: Wallet = await fetch(
    `http://localhost:3000/api/get?type=wallet&email=${session?.user.email}`
  ).then((res) => res.json());

  if (wallet.nomor_wallet !== "") {
    return {
      redirect: {
        destination: "/ewallet/hero",
        permanent: false,
      },
    };
  } 

  return {
    props: {
      user,
    },
  };
}
