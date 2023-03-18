import Link from 'next/link'

import Tag_Makanan from "../../Customer/Resto/Tag_Makanan" 

export default function Card_Menu () {
    return (
        <>
            <div className='flex shadow-lg w-[314px] rounded-lg md:w-full relative'>

                {/* Foto Makanan */}
                <img src="/icon_makanan.svg" alt="" className='rounded-lg p-4 w-[130px] h-[130px]'/>
                    
                <div className='flex flex-col justify-center relative -translate-y-3'>
                    
                    {/* Tag */}
                    <div className="flex mb-1 gap-x-1">
                        <Tag_Makanan>
                            Kopi 
                        </Tag_Makanan>

                        <Tag_Makanan>
                            Halal 
                        </Tag_Makanan>

                        <Tag_Makanan>
                            Babi 
                        </Tag_Makanan>
                    </div>
                    

                    {/* Masih belum bisa break-words */}
                    <h1 className='break-words font-semibold text-[15px] font-poppins'>Kopi Hitam</h1>
                    <p className='text-mobile text-[#838080] font-poppins break-words'>Kopi Pahit</p>
                        
                    {/* Harga */}
                    {/* Belum bisa apply diskon hidden*/}
                    <div className='flex items-center gap-x-2'>
                        <h1 className='font-poppins text-[12px] font-semibold'>15.000</h1>
                        <p className='font-poppins font-semibold text-[10px] text-[#838080] line-through'>20.000</p>
                    </div>

                    {/* Like */}
                    <div className='flex items-center gap-x-1'>
                        <button>
                            <img src="/icon_like_menu.svg" alt="" />
                        </button>
                        <p className='font-semibold font-poppins text-[10px] text-[#EC7505]'>50000</p>
                    </div>

                    {/* Stock */}
                    <div className='flex items-center gap-x-1 text-[#838080] font-poppins text-mobile 
                        font-medium'>
                        <h1>Stock :</h1>
                        <p>10</p>
                    </div>
                </div>

                {/* Edit Makanan */}
                <Link href='/merchant/edit_menu'>
                    <div className="absolute bottom-4 right-3">
                        <button 
                        className='border bg-white rounded-xl border-[#EC7505]  
                        w-[67px] h-[18px] flex justify-center items-baseline '
                        >
                            <h1 className="text-[#EC7505] font-medium text-[11px] font-poppins">Edit</h1>
                        </button>
                    </div>
                </Link>
            </div>
        </>
    )
}