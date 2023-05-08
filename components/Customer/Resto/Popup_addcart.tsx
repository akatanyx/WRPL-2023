import React, { useState, useEffect } from "react";
import Tag_Makanan_Popup from "./Tag_Makanan_Popup";
import router from "next/router";

const Popup_addcart = ({ nama, desk, imgURL, menuId, closeModal }: any) => {
  const [jumlah, setJumlah] = useState(1);

  const handleReduceJumlah = () => {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  };

  const handleIncreaseJumlah = () => {
    setJumlah(jumlah + 1);
  };

  // Masukkan ke database cart
  const handleAddToCart = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/signup?type=cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menuId, jumlah }),
    });
    if (response.ok) {
      router.push("/customer/pesanan");
    } else {
      console.error(response);
    }
  };

  // Masih gatau cara masukin ke database cart variabel jumlahnya
  return (
    <>
      {/* <div onClick={closeModal} className="z-20 absolute h-[300vh] left-0 right-0
            top-0 
            bg-black bg-opacity-10 backdrop-blur-sm"></div> */}
      <div
        onClick={closeModal}
        className="absolute z-20 h-[350vh] w-[100vw]
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm "
      ></div>

      <div
        className="z-20 absolute 
              flex flex-col items-center justify-center -translate-x-[22px]
              md:w-[360px] md:-translate-x-1/2 md:left-1/2
              "
      >
        {/* Nama Makanan */}
        <h1
          className="bg-[#EC7505] rounded-t-lg w-full h-[68px] translate-y-[10px]
              text-white font-poppins font-semibold text-[24px] flex justify-center items-center"
        >
          {nama}
        </h1>

        <img src={imgURL} alt="" className="w-screen z-20" />

        <div className="bg-white w-full rounded-b-lg pt-4">
          {/* Tag Makanan */}
          <div className="flex justify-evenly mx-[26px] gap-x-3">
            <Tag_Makanan_Popup>Ayam</Tag_Makanan_Popup>

            <Tag_Makanan_Popup>Ayam</Tag_Makanan_Popup>

            <Tag_Makanan_Popup>Ayam</Tag_Makanan_Popup>

            <Tag_Makanan_Popup>Ayam</Tag_Makanan_Popup>
          </div>

          {/* Deskripsi Makanan */}
          <div className="mt-[21px] ml-[27px] mr-[39px]">
            <p className="font-poppins text-[16px] text-black text-opacity-50">
              {desk}
            </p>
          </div>

          <div className="flex mb-[22px]">
            {/* Counter Makanan */}
            <div className="flex items-center gap-x-6 ml-[38px] mt-[12px]">
              {/* Kurangi Pesanan */}
              <button onClick={handleReduceJumlah}>
                <img src="/icon_popup_minus_stock.svg" className="w-[32px]" />
              </button>
              {/* Jumlah Pesanan */}
              <h1 className="text-black text-opacity-50 font-poppins font-semibold text-[26px]">
                {jumlah}
              </h1>
              {/* Tambahi Pesanan */}
              <button onClick={handleIncreaseJumlah}>
                <img src="/icon_popup_plus_stock.svg" className="w-[32px]" />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              className="bg-[#EC7505] rounded-lg w-[125px] h-[40px]
                    flex justify-center items-center ml-auto mr-[25px] mt-[10px]"
              onClick={handleAddToCart}
            >
              <h1 className="text-white font-poppins font-semibold text-[13px]">
                Add to Cart
              </h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup_addcart;
