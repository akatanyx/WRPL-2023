import Head from "next/head";

import Promo from "components/Customer/Landing/SlidePromo";
import Card_Kategori from "@/components/Customer/Landing/Card_Kategori";
import SlideRestoNear from "@/components/Customer/Landing/SlideRestoNear";
import SlideFavorit from "@/components/Customer/Landing/SlideFavorit";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import SlideBest from "@/components/Customer/Landing/SlideBest";
import Card_Seemore from "@/components/Customer/Landing/Card_Seemore";

export default function c_landing () {
    return (
        <>
            <Head>
                <title>Customer Landing Page</title>
            </Head>

            {/* Alamat */}
            <div className="font-poppins p-7 font-semibold text-lg flex flex-col">
                <div>
                    <h1 className="text-[#EC7505]">Delivery to</h1>
                </div>
                <div>
                    <h1 className="text-[#848484]">FMIPA UGM</h1>
                </div>
            </div>

            {/* Search */}
            <div className="flex justify-center">
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
            </div>
            
            {/* Promo */}
            <div className="rounded-lg px-8 py-6 md:w-3/5 md:mx-auto">
                <Promo /> 
            </div>

            {/* Kategori */}
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center gap-5 flex-wrap md:w-1/3">
                    <div>
                        <Card_Kategori />
                    </div>
                    <div>
                        <Card_Kategori />
                    </div>
                    <div>
                        <Card_Kategori />
                    </div>
                    <div>
                        <Card_Kategori />
                    </div>
                    <div>
                        <Card_Kategori />
                    </div>
                    <div>
                        <Card_Kategori />
                    </div>
                </div>
            </div>

            {/* Favorit Akhir ini */}
            <div className="flex flex-col mt-4 px-5">
                <h1 className="py-4 font-poppins font-semibold text-xl">Favorit akhir-akhir ini</h1>
                <SlideFavorit />
            </div>
                
            {/* Best For You */}
            <div className="flex flex-col mt-3 px-5">
                <h1 className="py-4 font-poppins font-semibold text-xl">Best for you</h1>
                <div>
                    <SlideBest />
                </div>
            </div>

            {/* Restaurant Near You */}
            <div className="flex flex-col mt-3 px-5 w-full">
                <h1 className="py-4 font-poppins font-semibold text-xl">Restaurant Near You</h1>
                <div>
                    <SlideRestoNear />
                </div>
            </div>

            <div className="mb-60"></div>

            {/* Navbar */}
            <div>
                <C_Navbar />
            </div>
        </>
    )
}