import Head from 'next/head'
import Dropdown_Makanan from '@/components/Customer/Resto/Dropdown_Makanan';
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import { useState } from 'react';
import Image from 'next/image'

import bg from '/public/banner_toko.svg'
import card from '/public/card.svg'

export default function resto () {

    return (
        <>
            <Head>
                <title>Resto</title>
            </Head>
            
            {/* Card Ingfo Toko */}

            <div className='relative'>
                <Image
                src={ bg }
                width={ 500 }
                height={ 30 }
                alt="Picture of the author"
                ></Image>

                <div>
                
                </div>
            </div>

            {/* <div className='' 
            style={{
                backgroundImage: "url('/banner_toko.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}>

            </div> */}

            <div>
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
            </div>            
            

            {/* Navbar */}
            <div>
                <C_Navbar />
            </div>
        </>
    )
}