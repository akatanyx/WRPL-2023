import { useState } from 'react';
import bcrypt from "bcrypt";
import Link from 'next/link';

interface PINEntryFormProps {
  onSubmit: (pin: string) => void;
}

const PINEntryForm = ({ onSubmit }: PINEntryFormProps) => {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  const handleButtonClick = (value: any) => {
    const newPin = [...pin];
    const index = newPin.findIndex((val) => val === "");
    if (index >= 0 && index <= 5) {
      newPin[index] = value;
      setPin(newPin);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pinJoin = pin.join("");
    if (pinJoin.length !== 6) {
      alert("PIN harus 6 digit");
      return;
    } else if (!/^\d+$/.test(pinJoin)) {
      alert("PIN harus berupa angka");
      return;
    }
    onSubmit(pin.join(""));
  };

  return (
    <div className="font-poppins">
      <h1 className="font-semibold text-[25px] text-center mt-[49px]">
        Masukkan PIN
      </h1>

      <div className="flex w-[263px] justify-between mx-auto mt-[31px]">
        {[...Array(6)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-10 h-10 ${pin[index] ? "fill-[#118EEA]" : ""}`}
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="8" stroke="#D9D9D9" strokeWidth="4" />
          </svg>
        ))}
      </div>
      <div
        className="text-[#118EEA] text-[39px] w-[227px] mx-auto mt-[58px] 
                                grid grid-cols-3 grid-rows-3 gap-y-[21px] gap-x-[76px]"
      >
        {[...Array(9)].map((_, index) => (
          <button key={index} onClick={() => handleButtonClick(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <button className="w-[290px] h-[53px] bg-[#118EEA] rounded-lg mx-auto flex items-center justify-center mt-[79px]">
          <h1 className="text-white font-semibold text-[19px]">Konfirmasi</h1>
        </button>
      </form>
      {/* Kembali */}
      <Link href="/ewallet/hero">
        <div
          className="w-[290px] h-[60px] mt-[14px] rounded-lg mx-auto
                                    flex justify-center items-center border-[#118EEA] border"
        >
          <h1 className="font-semibold text-[19px] text-[#118EEA]">kembali</h1>
        </div>
      </Link>

      <div className="mb-12"></div>
    </div>
  );
};

export default PINEntryForm;
