import Link from 'next/link'
import { CardBestRestoProps } from '@/pages/customer/hero'

export default function Card_Best ({namaResto, gambarResto}: CardBestRestoProps) {
    return (
        <>   
            <Link href='#'>
                <div className="flex-col shadow-md rounded-lg w-[150px] h-[187px]">
                        <div className='shadow-md rounded-lg flex flex-colp w-[150px] h-[150px] 
                        items-center justify-center'>
                            <img src={gambarResto} alt="" />
                        </div>
                        <div>
                            <h1 className='pl-3 font-poppins font-semibold text-[19px] translate-y-1 truncate'>
                                {namaResto}
                            </h1>
                        </div>
                </div>
            </Link>
        </>
    )
}