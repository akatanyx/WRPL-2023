import Head from "next/head";
import C_Header from "@/components/Customer/C_Header";
import Card_Pesanan from "@/components/Customer/Pesanan/Card_Pesanan";
import Popup_diskon from "@/components/Customer/Pesanan/Popup_Diskon_pesanan";

import { useState } from "react";

interface Cart {
  _id: string;
  menuId: string;
  jumlah: number;
  harga: number;
}
interface CartProps {
  carts: Cart[];
}

export default function Pesanan({ carts }: any) {
  // State for keeping track of the quantity in the parent component
  const [quantity, setQuantity] = useState(1);

  // Callback function to handle updating the quantity in the parent component
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  // Function untuk mencari harga menu
  const findMenuPrice = (menuId: string) => {
    const menu = carts.find((menu:any) => menu._id === menuId);
    return menu?.harga || 0;
  };

  // Item price
  const itemPrice = findMenuPrice(carts.menuId); // Update this with the actual item price
  const biayaPengiriman = 30000;
  const biayaAplikasi = 5000;
  // Calculate total price based on quantity
  const totalPrice = quantity * itemPrice + biayaPengiriman + biayaAplikasi;

  // POPUP DISKON
  const [showMyModal, setShowMyModal] = useState(false);

  const closeModal = () => setShowMyModal(false);

  return (
    <>
      {showMyModal && <Popup_diskon closeModal={closeModal} />}
      <Head>
        <title>Pesanan</title>
      </Head>

      <C_Header>Pesanan</C_Header>

      {/* Card Pesanan */}
      <div className="flex flex-col gap-y-[14px] mt-[27px] mx-[23px]">
        <Card_Pesanan onQuantityChange={handleQuantityChange} />
      </div>

      
      {/* Apply Promo */}
      <button onClick = {() => setShowMyModal(true)}
        className="mt-[13px] ml-[23px] mr-[19px]
            md:flex md:mx-auto
            "
      >
        <img src="/apply_promo.svg" alt="" />

      </button>

      {/* List Harga */}
      <div
        className="bg-[#E89005] bg-opacity-[14%] 
            mt-[21px] ml-[23px] mr-[19px] w-[316px] 
            border border-1 border-black border-opacity-25 rounded-lg
            font-poppins
            md:mx-auto
            "
      >
        {/* Total Harga */}
        <div className="bg-[#EC7505] h-[46px] rounded-lg flex items-center pl-[17px]">
          <h1 className="text-white font-semibold text-[25px]">{totalPrice}</h1>
        </div>

        {/* List Pesanan dan Harga */}
        <div className="rounded-b-lg ml-[17px] shadow-lg">
          {/* Biaya Menu */}
          <div className="pt-[9px]">
            {/* Nama Menu dan Jumlah Menu */}
            <div className="flex justify-between w-[281px]">
              <h1 className="text-[#7C3D02] font-medium text-[16px]  ">
                Kopi Hitam
              </h1>
              <p className="text-[#7C3D02] font-medium text-[16px]">
                x {quantity}
              </p>
            </div>
            {/* Harga Menu Total */}
            <p className="text-[#E4740B] font-semibold text-[14px] -translate-y-1">
              {itemPrice}
            </p>
          </div>

          {/* Biaya Pengiriman */}
          <div>
            <h1 className="text-[#7C3D02] font-medium text-[16px]">
              Biaya Pengiriman
            </h1>
            {/* Harga Pengiriman */}
            <p className="text-[#E4740B] font-semibold text-[14px] -translate-y-1">
              30.000
            </p>
          </div>

          {/* Biaya Aplikasi */}
          <div>
            <h1 className="text-[#7C3D02] font-medium text-[16px]">
              Biaya Aplikasi
            </h1>
            {/* Harga Pengiriman */}
            <p className="text-[#E4740B] font-semibold text-[14px] -translate-y-1">
              5.000
            </p>
          </div>
        </div>
      </div>

      {/* Balance */}
      <div
        className="bg-[#E89005] bg-opacity-[14%] 
            mt-[27px] ml-[23px] mr-[19px] w-[318px] 
            border border-1 border-black border-opacity-25 rounded-lg
            font-poppins
            md:mx-auto
            "
      >
        <div className="bg-[#EC7505] h-[36px] rounded-lg flex items-center pl-[17px]">
          <h1 className="text-white font-semibold text-[20px]">Your Balance</h1>
        </div>

        {/* Jumlah Balance */}
        <div className="rounded-b-lg ml-[17px] shadow-lg py-[6px]">
          <h1 className="text-[#7C3D02] font-semibold text-[25px]">
            Rp. 420.420
          </h1>
        </div>
      </div>
      
      {/* Metode Pembayaran */}
      <div className="font-poppins mt-4">
              <h1 className="ml-[23px] font-semibold text-[23px]">
                Metode Pembayaran
              </h1>

              {/* Layanan Dana */}
              <div className="flex-col ml-[22px] mt-6 ">
                
                {/* lets Cash */}
                <button className="w-[316px] flex justify-between items-center rounded-lg h-[55px] 
                                 border-2 border-opacity-25 active:border-[#EC7505] focus:border-[#EC7505]">
                  <div className="flex-col ml-[14px] mt-[6px]">
                    <div className="flex items-center">
                      <h1 className="font-medium text-lg">Lets Cash</h1>
                      <img src="/cart_logo_letscash.svg" className="translate-x-1"/>
                    </div>
                    {/* Saldo */}
                    <h1 className="font-medium text-[12px] text-[#7E7E7E] -translate-x-3 -translate-y-1">
                      Saldo : 100.000
                    </h1>
                  </div>
                  {/* Bullet */}
                  <img src="/cart_logo_bullet.svg" className="w-[27px] mr-4" />
                </button>

                {/* Cash */}
                <button className="mt-[18px] w-[316px] flex justify-between items-center rounded-lg h-[55px] 
                                 border-2 border-opacity-25 active:border-[#EC7505] focus:border-[#EC7505]">
                  <div className="flex items-center ml-[14px] mt-[6px]">
                    <h1 className="font-medium text-lg">Cash</h1>
                    <img src="/cart_logo_cash.svg" className="translate-x-1"/>
                  </div>
                  {/* Bullet */}
                  <img src="/cart_logo_bullet.svg" className="w-[27px] mr-4" />
                </button>
              </div>
      </div>

      {/* Pay Button */}
      <button
        className="bg-[#EC7505] w-[172px] h-[56px]
            rounded-lg mt-[34px] mx-auto
            flex justify-center items-center 
            "
      >
        <h1 className="font-poppins text-white font-bold text-[24px]">Pay</h1>
      </button>

      <div className="mb-16" />
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts?type=carts");
  const carts: Cart[] = await res.json();

  return {
    props: {
      carts,
    },
  };
}
