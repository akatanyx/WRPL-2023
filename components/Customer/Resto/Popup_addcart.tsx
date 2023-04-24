import React, { useState, useEffect } from "react";
import Tag_Makanan_Popup from "./Tag_Makanan_Popup";

const Popup_addcart = ({closeModal}:any) => {
  const [quantity, setQuantity] = useState(1);

  // Function to handle reducing the quantity
  const handleReduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle increasing the quantity
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Masih gatau cara masukin ke database cart variabel jumlahnya
    return (
        <>
            {/* <div onClick={closeModal} className="z-20 absolute h-[300vh] left-0 right-0
            top-0 
            bg-black bg-opacity-10 backdrop-blur-sm"></div> */}
            <div  onClick={closeModal} className="absolute z-20 h-[350vh] w-[100vw]
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm ">

            </div>

            
            <div className="z-20 absolute 
              flex flex-col items-center justify-center -translate-x-[22px]
              md:w-[360px] md:-translate-x-1/2 md:left-1/2
              ">
              
              {/* Nama Makanan */}
              <h1 className="bg-[#EC7505] rounded-t-lg w-full h-[68px] translate-y-[10px]
              text-white font-poppins font-semibold text-[24px] flex justify-center items-center">
                Ayam Goreng
              </h1>
              
              <img src="/popup_deskripsi_makanan.svg" alt="" className="w-screen z-20"/>

              <div className="bg-white w-full rounded-b-lg pt-4">
                
                {/* Tag Makanan */}
                <div className="flex justify-evenly mx-[26px] gap-x-3">
                  <Tag_Makanan_Popup>
                    Kopi
                  </Tag_Makanan_Popup>

                  <Tag_Makanan_Popup>
                    Kopi
                  </Tag_Makanan_Popup>

                  <Tag_Makanan_Popup>
                    Kopi
                  </Tag_Makanan_Popup>

                  <Tag_Makanan_Popup>
                    Kopi
                  </Tag_Makanan_Popup>
                </div>

                {/* Deskripsi Makanan */}
                <div className="mt-[21px] ml-[27px] mr-[39px]">
                  <p className="font-poppins text-[16px] text-black text-opacity-50">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>

                
                <div className="flex mb-[22px]">
                  
                  {/* Counter Makanan */}
                  <div className="flex items-center gap-x-6 ml-[38px] mt-[12px]">
                    {/* Kurangi Pesanan */}
                    <button onClick={handleReduceQuantity}>
                      <img
                        src="/icon_popup_minus_stock.svg"
                        className="w-[32px]"
                      />
                    </button>
                    {/* Jumlah Pesanan */}
                    <h1 className="text-black text-opacity-50 font-poppins font-semibold text-[26px]">
                      {quantity}
                    </h1>
                    {/* Tambahi Pesanan */}
                    <button onClick={handleIncreaseQuantity}>
                      <img
                        src="/icon_popup_plus_stock.svg"
                        className="w-[32px]"
                      />
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button className="bg-[#EC7505] rounded-lg w-[125px] h-[40px]
                    flex justify-center items-center ml-auto mr-[25px] mt-[10px]">
                    <h1 className="text-white font-poppins font-semibold text-[13px]">
                      Add to Cart
                    </h1>
                  </button>
                </div>
                
                
              </div>
            </div>
        </>
    )
}

export default Popup_addcart;