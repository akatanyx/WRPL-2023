import Head from "next/head";
import Promo from "components/Customer/SlidePromo";
import Card_Kategori from "@/components/Customer/Card_Kategori";
import Card_Favorit from "@/components/Customer/Card_Favorit"; 
import Card_Resto_Near from "@/components/Customer/Card_Resto_Near";

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
                <form className="flex items-center px-4 w-3/4 ">   
                    <div className="relative w-full drop-shadow-2xl">
                        <div className="absolute inset-y-0 
                            left-0 flex items-center pl-3 pointer-events-none">
                            <img src="icon_search.svg" alt="" />
                        </div>
                        <input 
                            type="text"  
                            placeholder="Search" 
                            required 
                            className="bg-white text-black font-poppins 
                                text-xl rounded-3xl block w-full pl-10 p-2.5 border 
                                border-black border-opacity-20 focus:outline-none"
                            />
                    </div>
                </form>
            </div>
            
            {/* Promo */}
            <div className="px-11 py-6 md:w-3/5 md:mx-auto">
                <Promo /> 
            </div>

            {/* Kategori */}
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center gap-10 flex-wrap md:w-1/3 w-4/5">
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
            <div className="flex flex-col mt-4 px-10">
                <h1 className="py-4 font-poppins font-semibold text-xl">Favorit akhir-akhir ini</h1>
                <Card_Favorit />  
            </div>
                
            {/* Best For You */}
            <div className="flex flex-col mt-3 px-10">
                <h1 className="py-4 font-poppins font-semibold text-xl">Best for you</h1>
                <div className="flex">
                    <img src="wireframe_best.svg" alt="" />
                </div>
            </div>

            {/* Restaurant Near You */}
            <div className="flex flex-col mt-3 px-10">
                <h1 className="py-4 font-poppins font-semibold text-xl">Restaurant near you</h1>
                <div className="flex">
                    <Card_Resto_Near />
                </div>
            </div>

            <div className="mb-60"></div>

            {/* Navbar */}
            {/* Belom */}
        </>
    )
}