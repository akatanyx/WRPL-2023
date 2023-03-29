import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';

import Tag_Makanan from "../../Customer/Resto/Tag_Makanan" 
import Popup_stock from './Popup_stock';

interface CardMenuProps {
    nama: string;
    desk: string;
    harga: number;
    imgURL: string;
  }

export default function Card_Menu ({ nama, desk, harga, imgURL} : CardMenuProps) {
    const [showMyModal, setShowMyModal] = useState(false);

    const closeModal = () => setShowMyModal(false);
    
    return (
        <>
            {showMyModal && <Popup_stock closeModal={closeModal} />}
            <div className='flex shadow-lg w-[314px] rounded-lg md:w-full relative'>

                {/* Foto Makanan */}
                <Image priority src={imgURL} height={130} width={130} alt="" className='rounded-lg p-4 w-auto h-auto'/>
                    
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
                    <h1 className='break-words font-semibold text-[15px] font-poppins'>{ nama }</h1>
                    <p className='text-mobile text-[#838080] font-poppins break-words'>{ desk }</p>
                        
                    {/* Harga */}
                    {/* Belum bisa apply diskon hidden*/}
                    <div className='flex items-center gap-x-2'>
                        <h1 className='font-poppins text-[12px] font-semibold'>{ harga }</h1>
                        <p className='font-poppins font-semibold text-[10px] text-[#838080] line-through'>20.000</p>
                    </div>

                    {/* Like */}
                    <div className='flex items-center gap-x-1'>
                        <button>
                            <Image src="/icon_like_menu.svg" alt="" width={20} height={20} />
                        </button>
                        <p className='font-semibold font-poppins text-[10px] text-[#EC7505]'>100</p>
                    </div>

                    {/* Stock */}
                    <button onClick = {() => setShowMyModal(true)} className='flex items-center gap-x-1 text-[#838080] font-poppins text-mobile 
                        font-medium'>
                        <h1>Stock :</h1>
                        <p>10</p>
                    </button>
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