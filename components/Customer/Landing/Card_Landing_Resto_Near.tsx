import Link from 'next/link'

export default function Card_Resto_Near () {
    return (
        <>   
            <Link href='/customer/resto'>
                <div className="flex-col shadow-xl rounded-lg w-[140px]">
                        <img src="icon_landing_restaurant.svg" alt="" />
                        <h1 className="font-poppins font-semibold text-sm text-center">Anteiku Coffee</h1>
                        <div className='flex px-5 justify-evenly '>
                                <img src="/icon_landing_star.svg" alt="" className="translate-x-1 w-[18px] h-[18px]"/>
                                <p className='font-bold text-[13px] font-poppins '>5.0</p>
                                <img src="/icon_location.svg" alt="" className="translate-x-1 w-[18px] h-[18px]" />
                                <p className='font-bold text-[13px] font-poppins'>300</p>
                                
                        </div>
                </div>
            </Link>
        </>
    )
}