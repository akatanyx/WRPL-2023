import Head from 'next/head'
import Card_Resto from '../../components/Customer/Resto/Card_Resto'
import C_Header from '@/components/Customer/C_Header'

export default function resto () {
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
                    <h1 className='font-poppins font-bold text-xl'>Promo Hari Ini</h1>
                    {/* Card List Menu */}
                    <div className='flex flex-col gap-y-3 mt-2'>
                        <Card_Resto />
                        <Card_Resto />
                        <Card_Resto />
                    </div>
                </div>
            
            <div className='m-6 '>
                <h1 className='font-poppins font-bold text-xl'>Makanan</h1>
            </div>

            <div className='m-6 '>
                <h1 className='font-poppins font-bold text-xl'>Minuman</h1>
            </div>

        </>
    )
}