import Head from "next/head";
import Link from "next/link";

import Promo from "@/components/Customer/Landing/SlidePromo";
import Card_Kategori from "@/components/Customer/Landing/Card_Kategori";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import SearchPage from "@/components/Customer/Landing/c_search_bar";
import Card_Favorit from "@/components/Customer/Landing/Card_Favorit";
import Card_Best from "@/components/Customer/Landing/Card_Best";
import Card_Resto_Near from "@/components/Customer/Landing/Card_Resto_Near";
import Ewallet from "@/components/Customer/Landing/ewallet";
import Alamat from "@/components/Customer/Landing/Alamat";
import Landing_Header from "@/components/Customer/Landing/Landing_Header";
import ItemCart from "@/components/Customer/ItemCart";

import cardKategoriItems from "./datas/kategori";
import cardBestRestosItems from "./datas/bestrestos";
import cardRestoNearItems from "./datas/restonear";
import cardFavoritItems from "./datas/makananfavorit";
import { CardBestRestoProps, CardKategoriProps, CardRestoNear, CartItem, User, Wallet } from "../interface";
import { useUser } from "@/hooks/useUser";
import { useWallet } from "@/hooks/useWallet";

export default function Hero() {
  const user = useUser();
  const wallet = useWallet();

  return (
    <>
      <Head>
        <title>Customer Landing Page</title>
      </Head>

      {/* Header */}
      <Landing_Header />

      {/* Alamat Pembeli */}
      <Alamat />

      {/* Border Pembatas */}
      <div className="border-2 border-[#D9D9D9] w-[318px] mx-auto mt-[9px] mb-4"></div>

      {/* Search */}
      <SearchPage />

      {/* Lets Cash Ewallet */}
      <Ewallet />

      {/* Promo */}
      <div className="rounded-lg px-[15px] mt-6 md:w-2/4 md:mx-auto lg:w-1/3 lg:mx-auto">
        <Promo />
      </div>

      <div
        className="mx-4 w-[328px] mb-36
      md:mx-auto
      "
      >
        {/* Kategori */}
        <div
          className="flex flex-col
      md:items-center
      "
        >
          <h1 className="font-poppins font-semibold text-xl mb-[10px]">
            Kategori
          </h1>

          <div
            className="rounded-xl
                  flex flex-wrap gap-x-[18px] gap-y-[12px]
                  lg:flex lg:justify-center lg:w-full"
          >
            {cardKategoriItems.map((item: CardKategoriProps) => (
              <div key={item.id}>
                <Card_Kategori
                  id={item.id}
                  namaKategori={item.namaKategori}
                  gambarKategori={item.gambarKategori}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Favorit Akhir ini */}
        <div
          className="flex flex-col mt-10
                      lg:w-full "
        >
          {/* Favorit and See All */}
          <div
            className="flex justify-between mb-[10px]
                        lg:justify-center"
          >
            <h1 className=" font-poppins font-semibold text-xl w-[221px] ">
              Favorit akhir-akhir ini
            </h1>
            <Link href="#">
              <button
                className=" border border-[#EC7505] w-[63px] h-[21px] flex
                        items-center justify-center rounded-xl p-2 translate-y-1
                        "
              >
                <h1 className="text-[13px] font-poppins text-[#EC7505] font-medium">
                  See All
                </h1>
              </button>
            </Link>
          </div>

          <div className=" flex flex-wrap gap-y-[18px]">
            {cardFavoritItems.map(
              // Batas 2 item
              (item, index: number) =>
                index < 2 && (
                  <div key={item.id}>
                    <Card_Favorit
                      id={item.id}
                      namaFood={item.namaFood}
                      gambarFood={item.gambarFood}
                      resto={item.resto}
                      hargaFood={item.hargaFood}
                      kategoriFood={item.kategoriFood}
                      ratingFood={item.ratingFood}
                    />
                  </div>
                )
            )}
          </div>
        </div>

        {/* Restoran Ternama */}
        <div
          className="flex flex-col mt-10
                      lg:w-full "
        >
          {/* Restoran Ternama and See All */}
          <div
            className="flex justify-between mb-[10px]
                        lg:justify-center"
          >
            <h1 className=" font-poppins font-semibold text-xl w-[221px] ">
              Restoran Ternama
            </h1>
            <Link href="#">
              <button
                className=" border border-[#EC7505] w-[63px] h-[21px] flex
                        items-center justify-center rounded-xl p-2 translate-y-1"
              >
                <h1 className="text-[13px] font-poppins text-[#EC7505] font-medium">
                  See All
                </h1>
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 justify-between">
            {cardBestRestosItems.map((item: CardBestRestoProps) => (
              <div key={item.id}>
                <Card_Best
                  id={item.id}
                  namaResto={item.namaResto}
                  gambarResto={item.gambarResto}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Near You */}
        <div
          className="flex flex-col mt-10
                      lg:w-full "
        >
          {/* Restaurant Near You and See All */}
          <div
            className="flex justify-between mb-[10px]
                        lg:justify-center"
          >
            <h1 className=" font-poppins font-semibold text-xl w-[221px] ">
              Restaurant Near You
            </h1>
            <Link href="/customer/resto_near_you">
              <button
                className=" border border-[#EC7505] w-[63px] h-[21px] flex
                        items-center justify-center rounded-xl p-2 translate-y-1"
              >
                <h1 className="text-[13px] font-poppins text-[#EC7505] font-medium">
                  See All
                </h1>
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-[18px] gap-y-[18px] justify-between">
            {cardRestoNearItems.map((item: CardRestoNear) => (
              <div key={item.id}>
                <Card_Resto_Near item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Item Cart */}
      <ItemCart />

      {/* Navbar */}
      <div>
        <C_Navbar />
      </div>
    </>
  );
}