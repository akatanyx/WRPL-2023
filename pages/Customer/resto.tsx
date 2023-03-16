import Head from 'next/head'
import Card_Resto from '../../components/Customer/Resto/Card_Resto'
import C_Header from '@/components/Customer/C_Header'
import Dropdown_Makanan from '@/components/Customer/Resto/Dropdown_Makanan';
import { useState } from 'react';

export default function resto () {
    // const [showMe1, setShowMe1] = useState(false);
    // function toggle1(){
    //   setShowMe1(!showMe1);
    // }

    const [showMe2, setShowMe2] = useState(false);
    function toggle2(){
      setShowMe2(!showMe2);
    }

    const [showMe3, setShowMe3] = useState(false);
    function toggle3(){
      setShowMe3(!showMe3);
    }

    return (
        <>
            <Head>
                <title>Resto</title>
            </Head>

            <div>
                <C_Header />
            </div>
            
            {/* Card Ingfo Toko */}
            <div className='flex m-6 shadow-lg'>
                <div>
                    <img src="/icon_toko_pp.svg" alt="" className='rounded-lg'/>
                </div>
                <div className='flex flex-col justify-center px-6 '>
                    {/* Masih belum bisa break-words */}
                    <h1 className='break-words font-semibold text-[21px] font-poppins'>Anteiku</h1>
                    {/* Nama jalan */}
                    <p className='text-[15px] font-poppins break-words'>District 10</p>
                    
                    <div className='flex'>
                        <img src="/icon_star.svg" alt="" className='w-[18px] h-[18px]'/>
                        <p className='font-poppins font-semibold text-[15px]'>5.0</p>
                    </div>
                </div>
            </div>

            <div className='m-6 '>
                
            </div>
            
            <div className='m-6 '>
                <Dropdown_Makanan>
                    Promo Hari Ini
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

        </>
    )
}