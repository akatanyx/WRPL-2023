import Link from 'next/link'
import { useState } from 'react'

export default function ItemCart ({totalPrice}:any) {
    const  [jumlahItem, setJumlahItem] = useState(12)
    const  [harga, setHarga] = useState(totalPrice)
    return (
        <>
        <Link href='/customer/pesanan'>
            <div 
            className="fixed bottom-[70px] z-10 w-[335px] h-[54px] mx-[13px]
                    bg-[#EC7505] rounded-xl 
                    flex items-center justify-between px-[32px]
                    md:left-1/2 md:-translate-x-1/2
                    "
            >
            {/* Jumlah Item */}
            <h1 className="font-poppins font-semibold text-[17px] text-white">{jumlahItem} item</h1>
            
            <div className="flex w-[101px] justify-between items-center">
                {/* Jumlah Harga */}
                <h1 className="font-poppins font-semibold text-[17px] text-white">{harga?.toLocaleString()}</h1>
                <img src="/icon_cart.svg" 
                className="" 
                />
            </div>
            </div>
        </Link>
        </>
    )
}