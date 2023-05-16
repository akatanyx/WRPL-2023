import Link from 'next/link'

export default function ItemCart () {
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
            <h1 className="font-poppins font-semibold text-[17px] text-white">1 item</h1>
            
            <div className="flex w-[101px] justify-between items-center">
                {/* Jumlah Harga */}
                <h1 className="font-poppins font-semibold text-[17px] text-white">20.000</h1>
                <img src="/icon_cart.svg" 
                className="" 
                />
            </div>
            </div>
        </Link>
        </>
    )
}