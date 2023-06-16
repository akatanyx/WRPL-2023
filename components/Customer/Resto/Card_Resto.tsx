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
      <div className="flex w-[314px] h-[124px] shadow-md rounded-lg md:w-full relative">
        {/* Foto Makanan */}
        <img
          src={imgURL}
          alt=""
          className="rounded-lg px-4 py-[19px] w-[125px] h-[125px]"
        />


        {/* Tag */}
        <div className="absolute right-4 top-6">
            <Tag_Makanan>Ayam</Tag_Makanan>
        </div>

        <div className="flex flex-col justify-center relative">
          {/* Masih belum bisa break-words */}
          <h1 className="font-semibold text-[16px] font-poppins w-[100px]
                          whitespace-nowrap overflow-hidden overflow-ellipsis">
            {nama}
          </h1>
          <p className="text-[#838080] text-[12px] font-poppins w-[100px]
                        whitespace-nowrap overflow-hidden overflow-ellipsis">
            Kopi Pahit
          </p>

          {/* Harga */}
          {/* Belum bisa apply diskon hidden*/}
          <div className="flex items-center gap-x-2">
            {/* Harga setelah diskon */}
            <h1 className="font-poppins text-[14px] font-semibold">15.000</h1>

            {/* Harga Asli */}
            <p className="font-poppins font-semibold text-[11px] text-[#838080] line-through">
              {harga}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-end">
            <img src="/icon_star.svg" className="w-[14px] -translate-y-1" alt="" />
            <p className="font-semibold font-poppins text-[12px] translate-x-0.5">
              4.7
            </p>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="absolute bottom-5 right-4">
          <button
            onClick={() => setShowMyModal(true)}
            className="border-2 bg-white rounded-xl border-[#EC7505]  
                    w-[70px] h-[19px] flex justify-center items-center "
          >
            <h1 className="text-[#EC7505] font-medium text-[12px] font-poppins">
              Add
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
