import Head from "next/head";
import Link from "next/link";

import Promo from "components/Customer/Landing/SlidePromo";
import Card_Kategori from "@/components/Customer/Landing/Card_Kategori";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import SearchPage from "@/components/Customer/Landing/c_search_bar"
import Card_Favorit from "@/components/Customer/Landing/Card_Favorit";
import Card_Best from "@/components/Customer/Landing/Card_Best";
import Card_Resto_Near from "@/components/Customer/Landing/Card_Resto_Near";

export default function hero () {
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
            <div className="rounded-lg px-8 py-6 md:w-2/4 md:mx-auto lg:w-1/3 lg:mx-auto">
                <Promo /> 
            </div>

            {/* Kategori */}
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center flex-wrap gap-5 lg:w-full">
                        <Card_Kategori />
                        <Card_Kategori />
                        <Card_Kategori />
                        <Card_Kategori />
                        <Card_Kategori />
                        <Card_Kategori />
                </div>
            </div>

            {/* Favorit Akhir ini */}
            <div className="flex flex-col mt-3 px-5 relative lg:w-full">
                <div className="flex relative lg:justify-center">
                    <h1 className="py-4 font-poppins font-semibold text-xl ">Favorit akhir-akhir ini</h1>
                    <Link href='#'>
                    <button
                    className="absolute border border-[#EC7505] w-[63px] h-[21px] flex 
                        items-center justify-center rounded-xl p-2 right-4 translate-y-5
                        lg:right-1/3 lg:-translate-x-6
                        ">
                        <h1 className="text-[13px] font-poppins text-[#EC7505] font-medium">See All</h1>
                    </button>
                    </Link>
                </div>

                <div className=" flex flex-wrap gap-3 justify-between lg:justify-center lg:gap-x-4">
                    <Card_Favorit />
                    <Card_Favorit />
                </div>
                
            </div>
                
            {/* Best For You */}
            <div className="flex flex-col mt-3 px-5 relative">
                <div className="flex relative lg:justify-center">
                    <h1 className="py-4 font-poppins font-semibold text-xl ">Best for you</h1>
                    <Link href='#'>
                    <button
                    className="absolute border border-[#EC7505] w-[63px] h-[21px] flex 
                        items-center justify-center rounded-xl p-2 right-4 translate-y-5
                        lg:right-1/3 lg:-translate-x-6
                        ">
                        <h1 className="text-[13px] font-poppins text-[#EC7505] font-medium">See All</h1>
                    </button>
                    </Link>
                </div>
                
                <div className="flex flex-wrap gap-y-4 justify-between lg:justify-center lg:gap-x-4">
                    <Card_Best />
                    <Card_Best />
                    <Card_Best />
                    <Card_Best />
                </div>
            </div>

            {/* Restaurant Near You */}
            <div className="flex flex-col mt-3 px-5 w-full ">
                <div className="flex relative lg:justify-center">
                    <h1 className="py-4 font-poppins font-semibold text-xl ">Restaurant Near You</h1>
                    <Link href='#'>
                    <button
                    className="absolute border border-[#EC7505] w-[63px] h-[21px] flex 
                        items-center justify-center rounded-xl p-2 right-4 translate-y-5
                        lg:right-1/3 lg:-translate-x-6
                        ">
                        <h1 className="text-[13px] font-poppins text-[#EC7505] font-medium">See All</h1>
                    </button>
                    </Link>
                </div>
                
                <div className="flex flex-wrap gap-y-2 justify-between lg:justify-center lg:gap-x-4">
                    <Card_Resto_Near />
                    <Card_Resto_Near />
                    <Card_Resto_Near />
                    <Card_Resto_Near />
                </div>
            </div>

            {/* Navbar */}
            <div>
                <C_Navbar />
            </div>
        </>
    )
}