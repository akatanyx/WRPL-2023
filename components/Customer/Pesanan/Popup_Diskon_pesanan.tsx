import Card_Diskon from "@/components/Customer/Pesanan/Card_Diskon";
import { useState } from "react";

export default function Diskon({ closeModal, handleDiskon }: any) {
  const [promos, setPromo] = useState([
    {
      id: 1,
      minPembelian: 50000,
      maxPotongan: 20000,
      diskon: 50,
    },
    {
      id: 2,
      minPembelian: 40000,
      maxPotongan: 10000,
      diskon: 40,
    },
    {
      id: 3,
      minPembelian: 30000,
      maxPotongan: 5000,
      diskon: 30,
    },
    {
      id: 4,
      minPembelian: 20000,
      maxPotongan: 4000,
      diskon: 20,
    },
    {
      id: 5,
      minPembelian: 20000,
      maxPotongan: 4000,
      diskon: 20,
    },
    {
      id: 6,
      minPembelian: 20000,
      maxPotongan: 4000,
      diskon: 20,
    },
  ]);

  return (
    <div className="font-poppins absolute bg-white z-10">
      {/* Header */}
      <div>
        <div className="flex justify-between items-center w-screen mt-[28px] ml-[22px]">
          <div className="flex items-center">
            <button onClick={closeModal}>
              <img src="/icon_c_promo_back.svg" />
            </button>

            <img src="/logo_promo.svg" className="translate-x-[18px]" />
            <h1 className="font-bold font-poppins text-[21px] translate-x-[28px]">
              Promo
            </h1>
          </div>
        </div>
      </div>

      <div className="mb-7"></div>

      {/* Diskon */}
      <div className="flex flex-col gap-y-4">
        {promos.map(({ id, minPembelian, maxPotongan, diskon }) => (
          <Card_Diskon
            key={id}
            minPembelian={minPembelian}
            maxPotongan={maxPotongan}
            diskon={diskon}
            handleDiskon={handleDiskon}
            closeModal={closeModal}
          />
        ))}
      </div>

      <div className="mb-7"></div>
    </div>
  );
}
