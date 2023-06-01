import Head from "next/head";
import Link from "next/link";

import Promo from "@/components/Customer/Landing/SlidePromo"
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

interface Menu {
  _id: string;
  nama: string;
  desk: string;
  harga: number;
  imgURL: string;
}

interface Wallet {
  id_wallet: string;
  saldo: number;
  no_telp: string;
  nama: string;
}

export default function hero({menus, wallets}: any) {
  const wallet = wallets.filter((wallet:Wallet) => wallet.id_wallet === "1");
  const saldo:number = wallet[0].saldo;

  
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
      <Ewallet saldo={saldo}/>

      {/* Promo */}
      <div className="rounded-lg px-[15px] mt-6 md:w-2/4 md:mx-auto lg:w-1/3 lg:mx-auto">
        <Promo />
      </div>


      <div className="mx-4 w-[328px] mb-36
      md:mx-auto
      "> 
      {/* Kategori */}
      <div className="flex flex-col
      md:items-center
      ">

        <h1 className="font-poppins font-semibold text-xl mb-[10px]">Kategori</h1>

        <div 
        className="rounded-xl
                  flex flex-wrap gap-x-[18px] gap-y-[12px]
                  lg:flex lg:justify-center lg:w-full">
          <Card_Kategori />
          <Card_Kategori />
          <Card_Kategori />
          <Card_Kategori />
          <Card_Kategori />
          <Card_Kategori />
        </div>

      </div>

      {/* Favorit Akhir ini */}
      <div className="flex flex-col mt-10
                      lg:w-full ">

        {/* Favorit and See All */}
        <div className="flex justify-between mb-[10px]
                        lg:justify-center">
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
          
            {menus.map((menu:Menu, index:number)=> index < 2 && ( 
                <Card_Favorit
                  key={menu._id}
                  nama={menu.nama}
                  desk={menu.desk}
                  harga={menu.harga}
                  imgURL={menu.imgURL}
                />
                ))}   
        </div>
      </div>

      {/* Restoran Ternama */}
      <div className="flex flex-col mt-10
                      lg:w-full ">

        {/* Restoran Ternama and See All */}
        <div className="flex justify-between mb-[10px]
                        lg:justify-center">
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
          <Card_Best />
          <Card_Best />
          <Card_Best />
          <Card_Best />
        </div>
      </div>

      {/* Restaurant Near You */}
      <div className="flex flex-col mt-10
                      lg:w-full ">

        {/* Restaurant Near You and See All */}
        <div className="flex justify-between mb-[10px]
                        lg:justify-center">
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
          <Card_Resto_Near />
          <Card_Resto_Near />
          <Card_Resto_Near />
          <Card_Resto_Near />
        </div>
      </div>
      </div>
      
      {/* Item Cart */}
      <ItemCart totalPrice={56789} />


      {/* Navbar */}
      <div>
        <C_Navbar />
      </div>
      
    </>
  );
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/posts?type=menus");
    const menus: Menu[] = await res.json();

    const res2 = await fetch("http://localhost:3000/api/posts?type=wallets");
    const wallets: Wallet[] = await res2.json();
  
    return {
      props: {
        menus,
        wallets,
      },
    };
  }
  