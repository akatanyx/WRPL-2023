/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Tag_Makanan from "../Resto/Tag_Makanan";

interface CartItemProps {
  cartItem: {
    _id: string;
    menuId: string;
    jumlah: number;
    menuItems: {
      nama: string;
      harga: number;
      desk: string;
      tag: string;
      kategori: string;
      rating: string;
      imgURL: string;
    };
  };
  onUpdateJumlah: (itemId: string, newJumlah: number) => void;
}

const Card_Pesanan:React.FC<CartItemProps> = ({ cartItem, onUpdateJumlah }) => {

  const [jumlah, setJumlah] = useState(cartItem.jumlah);

  const handleIncrement = () => {
    const newJumlah = jumlah + 1;
    setJumlah(newJumlah);
    onUpdateJumlah(cartItem._id, newJumlah);
  };

  const handleDecrement = () => {
    const newJumlah = jumlah > 0 ? jumlah - 1 : 0;
    setJumlah(newJumlah);
    onUpdateJumlah(cartItem._id, newJumlah);
  };

  return (
    <>
    <div className="flex flex-col gap-y-[14px] mt-[21px] mx-[23px]">
      <div className="flex shadow-lg w-[314px] rounded-lg md:w-full relative">
        {/* Foto Makanan */}
        <img
          src={cartItem.menuItems.imgURL}
          alt=""
          className="rounded-lg px-4 py-[19px] w-[130px] h-[130px]"
        />

        <div className="flex flex-col justify-center relative">
          {/* Tag */}
          <div className="flex mb-1 gap-x-1">
            <Tag_Makanan>Kopi</Tag_Makanan>
            <Tag_Makanan>Halal</Tag_Makanan>
            <Tag_Makanan>Babi</Tag_Makanan>
          </div>

          {/* Masih belum bisa break-words */}
          <h1 className="break-words font-semibold text-[15px] font-poppins">
            {cartItem.menuItems.nama}
          </h1>
          <p className="text-mobile text-[#838080] font-poppins break-words">
            {cartItem.menuItems.desk}
          </p>

          {/* Harga */}
          {/* Belum bisa apply diskon hidden*/}
          <div className="flex items-center gap-x-2">
            <h1 className="font-poppins text-[12px] font-semibold">
              {cartItem.menuItems.harga}
            </h1>
            <p className="font-poppins font-semibold text-[10px] text-[#838080] line-through">
              {cartItem.menuItems.harga * 1.8}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-start">
            <img src="/icon_star.svg" className="w-[14px]" alt="" />
            <p className="font-semibold font-poppins text-[12px] translate-x-0.5">
              4.7
            </p>
          </div>
        </div>

        {/* Add Pesanan */}
        <div className="absolute bottom-4 right-4 flex items-center gap-x-3">
          {/* Kurangi Pesanan */}
          <button onClick={handleDecrement}>
            <img
              src="/icon_popup_minus_stock.svg"
              className="w-[18px]"
              alt=""
            />
          </button>
          {/* Jumlah Pesanan */}
          <h1 className="text-[#E89005] font-poppins font-semibold text-[14px]">
            {cartItem.jumlah}
          </h1>
          {/* Tambahi Pesanan */}
          <button onClick={handleIncrement}>
            <img
              src="/icon_popup_plus_stock.svg"
              className="w-[18px]"
              alt=""
            />
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card_Pesanan;
