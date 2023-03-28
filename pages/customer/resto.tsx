import Head from 'next/head'
import Link from 'next/link'

import Dropdown_Makanan from '@/components/Customer/Resto/Dropdown_Makanan';
import C_Navbar from "@/components/Customer/Landing/C_Navbar";

export default function resto () {

    return (
        <>
            <Head>
                <title>Resto</title>
            </Head>

            {/* Back and Share Button */}
            <div className='relative'>
                <div className='flex justify-between'>
                    <Link href='/customer/resto_near_you'>
                        <img src="/icon_c_toko_back.svg " 
                        className='absolute z-10 left-4 translate-y-4'/>
                    </Link>
                    
                    <button>
                        <img src="/icon_c_toko_share.svg" 
                        className='absolute z-10 right-4 translate-y-4' />
                    </button>               
                </div>       
            </div>
            
            {/* Card Ingfo Toko */}
            <div className='relative font-poppins'>
                <img src="/banner_toko.svg" className='w-full h-[274px] absolute top-0'/>
                
                <div className='w-[287px] h-[127px] bg-white rounded-xl shadow-lg
                flex flex-col items-center justify-center z-10
                absolute -translate-x-1/2 translate-y-[168px] left-1/2 top-1/2'>
                    <img 
                    src="/icon_c_resto_logo.svg" 
                    className='w-[144px] h-[144px] rounded-xl 
                    absolute -translate-x-1/2 -translate-y-24 left-1/2'/>
                    
                    <h1 className='pt-7 font-bold text-xl'>Anteiku Coffee</h1>
                    <p className='text-[#8F8D8D] font-medium text-[12px]'>Jl. LohaLohe No.178</p>
                    
                    <div className='mt-1  px-5 items-end -translate-x-1 w-[256px] 
                    flex justify-center gap-x-5'>
                        <div className='flex items-end'>
                            <img src="/icon_landing_star.svg" className=" w-[25px] h-[25px]"/>
                            <p className='font-semibold text-[13px]'>5.0</p>
                        </div>                
                        <div className='flex items-end'>
                            <img src="/icon_location.svg" className="w-[20px] h-[20px]" />
                            <p className='font-semibold text-[13px]'>300</p>
                        </div>              
                    </div>
                </div>

            </div>

            <div className='translate-y-64 rounded-t-xl bg-white w-full'>
                <div className='py-2 text-white'>a</div>
                <div className='m-6 '>
                    <Dropdown_Makanan>
                        Promo Hari Ini
                    </Dropdown_Makanan>
                </div>

                <div className='m-6 '>
                    <Dropdown_Makanan>
                        Best Seller
                    </Dropdown_Makanan>
                </div>

                <div className='m-6 '>
                    <Dropdown_Makanan>
                        Makanan
                    </Dropdown_Makanan>
                </div>

                <div className='m-6 '>
                    <Dropdown_Makanan>
                        Minuman
                    </Dropdown_Makanan>
                </div>

                <div className='mb-96'></div>
            </div>            
            

            {/* Navbar */}
            <div>
                <C_Navbar />
            </div>
        </>
    )
}