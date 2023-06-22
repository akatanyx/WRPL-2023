import { useState } from "react";
import Link from "next/link";
import router from "next/router";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";
import PINEntryForm from "@/components/PINEntryForm";
import Head from "next/head";

export default function Topup() {
  const user = useUser();
  const [selectedAmount, setSelectedAmount] = useState("");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(event.target.value.replace(/\D/, ""));
  };

  const handleButtonClick = (amount: number) => {
    setSelectedAmount(amount.toString());
  };

  const handleConfirm = async () => {
    const saldoBaru = parseInt(selectedAmount);
    const response = await fetch("/api/putwallet?type=addsaldo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_user: user?._id, saldo: saldoBaru }),
    });
    if (response.ok) {
      alert("Topup berhasil");
      router.push("/ewallet/hero");
    } else {
      alert("Topup gagal");
      console.error(response);
    }
  };

  const [isPINValid, setIsPINValid] = useState(false);

  const ValidatePIN = async (pin: string) => {
    try {
      const result = await fetch("/api/validatepin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_user: user?._id, pin: pin }),
      });

      if (result.ok) {
        setIsPINValid(true);
      } else if (result.status === 401){
        setIsPINValid(false);
        alert("Invalid PIN");
      } else {
        alert("Error validating PIN");
        console.error(result);
      }
    } catch (error) {
      console.error("Error validating PIN:", error);
    }
  };

  if (!isPINValid) {
    return <PINEntryForm onSubmit={ValidatePIN} />;
  }

  return (
    <>
      <Head>
        <title>Top Up</title>
      </Head>
      <div className="font-poppins">
        <h1 className="font-semibold text-[25px] mt-[41px] ml-[34px] md:text-center md:ml-0">
          Top Up
        </h1>
        <p className="text-[14px] ml-[35px] mb-[30px] md:text-center md:ml-0">
          Masukkan jumlah yang ingin ditop-up
        </p>

        {/* Nominal Topup */}
        <div className="flex ml-[35px] md:justify-center md:-translate-x-1">
          <Image src="/e_topup_wallet.svg" height={31} width={26} alt="" />
          <span className="text-[20px] translate-x-2.5">Rp</span>
          <input
            type="text"
            value={selectedAmount}
            onChange={handleAmountChange}
            className="ml-[13px] outline-none text-[20px] w-[250px] placeholder-inherit"
            placeholder="0"
          />
        </div>

        {/* Border Pembatas */}
        <div className="border border-opacity-25 border-black w-[290px] mx-auto mt-[7px] mb-[23px]"></div>

        {/* Pilihan Topup */}
        <div className="w-[290px] grid grid-cols-2 gap-x-[10px] gap-y-[13px] mx-auto">
          {/* 10K */}
          <button
            className={`w-[140px] h-[95px] border-[#118EEA] border rounded-lg flex justify-center items-center ${
              selectedAmount === "10000" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick(10000)}
          >
            <h1 className="font-semibold text-[21px] text-[#118EEA]">
              Rp10.000
            </h1>
          </button>

          {/* 25K */}
          <button
            className={`w-[140px] h-[95px] border-[#118EEA] border rounded-lg flex justify-center items-center ${
              selectedAmount === "25000" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick(25000)}
          >
            <h1 className="font-semibold text-[21px] text-[#118EEA]">
              Rp25.000
            </h1>
          </button>

          {/* 50K */}
          <button
            className={`w-[140px] h-[95px] border-[#118EEA] border rounded-lg flex justify-center items-center ${
              selectedAmount === "50000" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick(50000)}
          >
            <h1 className="font-semibold text-[21px] text-[#118EEA]">
              Rp50.000
            </h1>
          </button>

          {/* 100K */}
          <button
            className={`w-[140px] h-[95px] border-[#118EEA] border rounded-lg flex justify-center items-center ${
              selectedAmount === "100000" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick(100000)}
          >
            <h1 className="font-semibold text-[21px] text-[#118EEA]">
              Rp100.000
            </h1>
          </button>
        </div>

        {/* Konfirmasi */}
        <button
          onClick={handleConfirm}
          className="w-[290px] h-[60px] mt-[98px] rounded-lg mx-auto
                            flex justify-center items-center bg-[#118EEA]"
        >
          <h1 className="font-semibold text-[19px] text-white">Konfirmasi</h1>
        </button>

        {/* Kembali */}
        <Link href="/ewallet/hero">
          <div
            className="w-[290px] h-[60px] mt-[14px] rounded-lg mx-auto
                                flex justify-center items-center border-[#118EEA] border"
          >
            <h1 className="font-semibold text-[19px] text-[#118EEA]">
              kembali
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
}
