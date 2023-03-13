import Head from 'next/head';
import Items_resto from '@/components/Customer/Resto/items_resto';

export default function resto (){
    return (
        <>
            <Head>
                <title>Resto Page</title>
            </Head>

            <div className='rounded-b-3xl absolute w-full bg-[#EC7505] h-82 shadow-lg'>
                <h1 className='text-[#EC7505] text-center text-3xl'>empty</h1>
            </div>

            <div>
                <div className="relative flex rounded-lg w-[332] bg-transparent p-6">
                    <img src="/icon_landing_restaurant.svg" alt=""/>
                    <div className="flex-col flex translate-y-3 translate-x-6 py-3 gap-y-3">
                        <h1 className="font-semibold font-poppins text-xl">Anteiku</h1>
                        <h2 className="font-medium font-poppins text-[17px] text-[#666666]"
                        >
                            Jl.LohaLohe No.17
                        </h2>
                        <div className='flex'>
                            <img src="/icon_star.svg" alt="" className="w-[18px] h-[18px]"/>
                            <p className='font-bold text-[15px] font-poppins translate-x-1'>5.0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='font-bold font-poppins text-xl px-5'>Promo Hari Ini</h1>
                <div className='flex flex-wrap px-5 gap-x-10 gap-y-4'>
                    <Items_resto />
                    <Items_resto />
                    <Items_resto />
                    <Items_resto />
                </div>
            </div>

            <div className='mb-96'></div>

        </>
    )
}