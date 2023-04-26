import Head from "next/head";
import C_Header from "@/components/Customer/C_Header";
import Card_Pesanan from "@/components/Customer/Pesanan/Card_Pesanan";
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
  return (
    <>
      <Head>
        <title>Pesanan</title>
      </Head>

      <C_Header>Pesanan</C_Header>

      {/* Card Pesanan */}
      <div className="flex flex-col gap-y-[14px] mt-[27px] mx-[23px]">
        <Card_Pesanan onQuantityChange={handleQuantityChange} />
      </div>

      {/* Apply Promo */}
      <div
        className="mt-[13px] ml-[23px] mr-[19px]
            md:flex md:justify-center
            "
      >
        <img src="/apply_promo.svg" alt="" />
      </div>

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
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts?type=carts");
  const carts: Cart[] = await res.json();

  return {
    props: {
      carts,
    },
  };
}
