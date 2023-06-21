import Link from 'next/link'
import { useState } from 'react'

type ItemCartProps = {
    totalItem: number,
    totalPrice: number
}

export default function ItemCart ({totalItem, totalPrice}: ItemCartProps) {
    const  [jumlahItem, setJumlahItem] = useState(totalItem)
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
            
            <div className="flex items-center">
                {/* Jumlah Harga */}
                <h1 className="font-poppins font-semibold mr-1   text-[17px] text-white">{harga?.toLocaleString("de-DE")}</h1>
                <img src="/icon_cart.svg" 
                className="" 
                />
            </div>
            </div>
        </Link>
        </>
    )
}