import Link from 'next/link'

export default function Card_Seemore () {
    return (
        <>  
            <Link href='/customer/resto_near_you'>
                <div className="flex-col  shadow-xl rounded-lg w-[140px] h-[177px]">
                        <img src="icon_seemore.svg" alt="" className='mx-auto translate-y-6'/>
                        <h1 className='font-poppins font-semibold text-[17px] text-center mt-8'>See More</h1>
                </div>
            </Link>
        </>
    )
}