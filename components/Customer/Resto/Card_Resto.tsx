import { useState } from "react";
import Tag_Makanan from "./Tag_Makanan";

import Popup_addcart from "./Popup_addcart";

interface CardRestoProps {  
  nama: string;
  desk: string;
  harga: number;
  imgURL: string;
  menuId: string;
}

export default function Card_Resto({
  nama,
  desk,
  harga,
  imgURL,
  menuId
}: CardRestoProps) {
  const [showMyModal, setShowMyModal] = useState(false);

  const closeModal = () => setShowMyModal(false);

  return (
    <>
      {showMyModal && (
        <Popup_addcart
          nama={nama}
          desk={desk}
          imgURL={imgURL}
          menuId={menuId}
          closeModal={closeModal}
        />
      )}
      <div className="flex shadow-lg w-[314px] rounded-lg md:w-full relative">
        {/* Foto Makanan */}
        <img
          src={imgURL}
          alt=""
          className="rounded-lg px-4 py-[19px] w-[130px] h-[130px]"
        />

        <div className="flex flex-col justify-center relative">
          {/* Tag */}
          <div className="flex mb-1 gap-x-1">
            <Tag_Makanan>Ayam</Tag_Makanan>

            <Tag_Makanan>Halal</Tag_Makanan>

            <Tag_Makanan>Babi</Tag_Makanan>
          </div>

          {/* Masih belum bisa break-words */}
          <h1 className="break-words font-semibold text-[15px] font-poppins">
            {nama}
          </h1>
          <p className="text-mobile text-[#838080] font-poppins break-words">
            kategori
          </p>

          {/* Harga */}
          {/* Belum bisa apply diskon hidden*/}
          <div className="flex items-center gap-x-2">
            <h1 className="font-poppins text-[12px] font-semibold">15.000</h1>
            <p className="font-poppins font-semibold text-[10px] text-[#838080] line-through">
              {harga}
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

        {/* Add to Cart */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => setShowMyModal(true)}
            className="border bg-white rounded-xl border-[#EC7505]  
                    w-[67px] h-[18px] flex justify-center items-baseline "
          >
            <h1 className="text-[#EC7505] font-medium text-[11px] font-poppins">
              Add
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
