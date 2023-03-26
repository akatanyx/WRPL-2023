import Link from 'next/link'

export default function Card_Best () {
    return (
        <>   
            <Link href='#'>
                <div className="flex-col shadow-md rounded-lg w-[150px] h-[187px]">
                        <div className='shadow-md rounded-lg flex flex-colp w-[150px] h-[150px] 
                        items-center justify-center'>
                            <img src="/icon_best.svg" alt="" />
                        </div>
                        <div>
                            <h1 className='pl-3 font-poppins font-semibold text-[19px] translate-y-1'>
                                Preksu
                            </h1>
                        </div>
                </div>
            </Link>
        </>
    )
}