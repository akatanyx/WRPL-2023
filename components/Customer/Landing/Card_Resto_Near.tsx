import Link from 'next/link'
import { CardRestoNearProps } from '@/pages/customer/hero'

export default function Card_Resto_Near ({namaResto, gambarResto, jarakResto, ratingResto}: CardRestoNearProps) {
    return (
        <>   
            <Link href='/customer/resto'>
                <div className="flex-col shadow-xl rounded-lg w-[150px] h-[212px]">
                        <img src={gambarResto} alt="" className='w-[150px] h-[150px]'/>
                        
                        <h1 className="font-poppins font-semibold text-[14px] text-center mt-1
                        ">{namaResto}</h1>
                        
                        <div className='flex px-5 justify-evenly items-center -translate-x-1'>
                                <img src="/icon_landing_star.svg" alt="" className="translate-x-1 w-[24px] h-[24px]"/>
                                <p className='font-bold text-[14px] font-poppins '>{ratingResto}</p>
                                <img src="/icon_location.svg" alt="" className="translate-x-1 w-[19px] h-[19px]" />
                                <p className='font-bold text-[14px] font-poppins'>{jarakResto}</p>
                        </div>
                </div>
            </Link>
        </>
    )
}