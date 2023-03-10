import Head from "next/head";
import Promo from "components/Customer/SlidePromo";

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
        <form className="flex items-center px-4 ">   
            <div className="relative w-full drop-shadow-2xl">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src="icon_search.svg" alt="" />
                </div>
                <input type="text" className="bg-white text-black font-poppins 
                    text-sm rounded-3xl block w-full pl-10 p-2.5 " placeholder="Search" 
                    required />
            </div>
        </form>

        {/* Promo */}
        <div className="p-11">
            <Promo /> 
        </div>
                
    </>
    )
}