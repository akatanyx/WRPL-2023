import Head from "next/head";
import Link from "next/link";

import Promo from "@/components/Customer/Landing/SlidePromo"
import Card_Kategori from "@/components/Customer/Landing/Card_Kategori";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import SearchPage from "@/components/Customer/Landing/c_search_bar";
import Card_Favorit from "@/components/Customer/Landing/Card_Favorit";
import Card_Best from "@/components/Customer/Landing/Card_Best";
import Card_Resto_Near from "@/components/Customer/Landing/Card_Resto_Near";

interface Post {
  _id: string;
  nama: string;
  desk: string;
  harga: number;
  imgURL: string;
}

interface PostsProps {
  posts: Post[];
}

export default function hero({posts}: PostsProps) {
  return (
    <>
      <Head>
        <title>Customer Landing Page</title>
      </Head>

      {/* Alamat */}
      <div className="lg:items-center font-poppins p-7 font-semibold text-lg flex flex-col">
        <div>
          <h1 className="text-[#EC7505]">Delivery to</h1>
        </div>
        <div>
          <h1 className="text-[#848484]">FMIPA UGM</h1>
        </div>
      </div>

      {/* Search */}
      {/* <div className="flex justify-center">
                <form className="flex items-center px-2 w-80">   
                    <div className="relative w-full drop-shadow-2xl">
                        <div className="absolute inset-y-0 
                            left-0 flex items-center pl-3 pointer-events-none">
                            <img src="icon_search.svg" alt="" />
                        </div>
                        <input 
                            type="text"  
                            placeholder="e.g. Ayam Goreng" 
                            required 
                            className="bg-white text-black font-poppins 
                                text-base rounded-3xl block w-full pl-10 p-2.5 border 
                                border-black border-opacity-20 focus:outline-none"
                            />
                    </div>
                </form>
            </div> */}
      <SearchPage />

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
          
            {posts.map((post, index)=> index < 2 && ( 
                <Card_Favorit
                  key={post._id}
                  nama={post.nama}
                  desk={post.desk}
                  harga={post.harga}
                  imgURL={post.imgURL}
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

        <div className="flex flex-wrap gap-x-[18px] gap-y-[18px] justify-between">
          <Card_Resto_Near />
          <Card_Resto_Near />
          <Card_Resto_Near />
          <Card_Resto_Near />
        </div>
      </div>
      </div>
      
      {/* Item Cart */}
      <Link href='#'>
        <button 
        className="fixed bottom-[70px] z-10 w-[335px] h-[54px] mx-[13px]
                  bg-[#EC7505] rounded-xl 
                  flex items-center justify-between px-[32px]
                  md:left-1/2 md:-translate-x-1/2
                  "
        >
          {/* Jumlah Item */}
          <h1 className="font-poppins font-semibold text-[17px] text-white">1 item</h1>
          
          <div className="flex w-[101px] justify-between items-center">
            {/* Jumlah Harga */}
            <h1 className="font-poppins font-semibold text-[17px] text-white">20.000</h1>
            <img src="/icon_cart.svg" 
            className="" 
            />
          </div>
        </button>
      </Link>


      {/* Navbar */}
      <div>
        <C_Navbar />
      </div>
      
    </>
  );
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/posts?type=menus");
    const posts: Post[] = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  }
  