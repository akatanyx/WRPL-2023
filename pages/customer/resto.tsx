import Head from "next/head";
import Link from "next/link";

import Dropdown_Makanan from "@/components/Customer/Resto/Dropdown_Makanan";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import ItemCart from "@/components/Customer/ItemCart";
import { Menu } from "../interface";
import { useMerchant } from "@/hooks/useMerchant";

export default function Resto({ menus }: { menus: Menu[] }) {
  const merchant = useMerchant();
  if (merchant == null) return null;
  return (
    <>
      {/* Nama resto */}
      <Head>
        <title>{merchant.nama_resto}</title>
      </Head>

      {/* Back and Share Button */}
      <div className="relative">
        <div className="flex justify-between">
          {/* Back to resto near you page */}
          <Link href="/customer/resto_near_you">
            <img
              src="/icon_c_toko_back.svg "
              className="absolute left-[19px] translate-y-[22px]"
            />
          </Link>

          {/* Share Button */}
          {/* Nothing Happened */}
          <button>
            <img
              src="/icon_c_toko_share.svg"
              className="absolute right-[19px] translate-y-[22px]"
            />
          </button>
        </div>
      </div>

      <div className="font-poppins">
        {/* Banner Toko */}
        <img src="/banner_toko.svg" className="w-screen h-[274px]" />

        <div className="flex justify-center -translate-y-20">
          {/* Card Ingfo Toko */}
          <div
            className="w-[287px] h-[127px] bg-white rounded-xl shadow-lg
                "
          >
            <div
              className="-translate-y-36
                    flex flex-col items-center justify-center"
            >
              {/* Logo Resto */}
              <img
                src={merchant.imgURL_resto}
                className="w-[144px] h-[144px] rounded-xl 
                    translate-y-6
                    "
              />

              {/* Nama Resto */}
              <h1
                className="pt-7 font-bold text-xl w-[200px] text-center
                            whitespace-nowrap overflow-hidden overflow-ellipsis"
              >
                {merchant.nama_resto}
              </h1>
              {/* Alamat Resto */}
              <p
                className="text-[#8F8D8D] font-medium text-[12px] w-[200px] text-center
                            whitespace-nowrap overflow-hidden overflow-ellipsis"
              >
                {merchant.alamat_resto}
              </p>

              {/* Rating dan Jarak */}
              <div
                className="mt-1  px-5 items-end -translate-x-1 w-[256px] 
                    flex justify-center gap-x-5"
              >
                {/* Pinginnnya Tambahin deskripsi resto */}

                {/* Rating */}
                <div className="flex items-end">
                  <img
                    src="/icon_landing_star.svg"
                    className=" w-[25px] h-[25px]"
                  />
                  <p className="font-semibold text-[13px]">5.0</p>
                </div>

                {/* Jarak */}
                <div className="flex items-end">
                  <img src="/icon_location.svg" className="w-[20px] h-[20px]" />
                  <p className="font-semibold text-[13px]">300</p>
                </div>
              </div>
              <div className="text-[8px] flex gap-x-4">
                <div>
                  Open: {merchant.jam_buka} - {merchant.jam_tutup}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="rounded-t-xl w-full -translate-y-28 ">
        <div className="py-2 text-white">a</div>
        <div className="mb-[13px] mt-[25px] mx-[22px] m">
          <Dropdown_Makanan menus={menus} userId={merchant.id_user}>
            Promo Hari Ini
          </Dropdown_Makanan>
        </div>

        {/* <div className="my-[13px] mx-[22px]">
          <Dropdown_Makanan menus={menus} userId={merchant.id_user}>
            Best Seller
          </Dropdown_Makanan>
        </div>

        <div className="my-[13px] mx-[22px]">
          <Dropdown_Makanan menus={menus} userId={merchant.id_user}>
            Makanan
          </Dropdown_Makanan>
        </div>

        <div className="my-[13px] mx-[22px]">
          <Dropdown_Makanan menus={menus} userId={merchant.id_user}>
            Minuman
          </Dropdown_Makanan>
        </div> */}
      </div>

      {/* Navbar */}
      <div>
        <C_Navbar />
      </div>

      {/* Item Cart */}
      <ItemCart />
    </>
  );
}

export async function getServerSideProps(context: any) {
  // const menusData = await fetch(`http://localhost:3000/api/getmenu_resto?id_resto=${id_resto}`); //seharusnya menu hanya untuk resto tertentu saja, belum tahu cara ambil id resto dari page sebelumnya
  const menusData = await fetch("http://localhost:3000/api/getcollection?type=menus") // fetch menu milik semua resto
  const menus = await menusData.json();

  return {
    props: {
      menus,
    },
  };
}
