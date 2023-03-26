import Link from 'next/link'

export default function Card_Kategori () {
    return (
        <>
            <Link href='#'>
                <div className="flex bg-[#FFFFFF] rounded-lg w-[320px] h-[120px] shadow-lg border relative">
                        <img src="/makanan.svg " 
                        className='w-[130px] h-[120px] -translate-x-1.5'
                        />

                        <div className='flex flex-col mt-2'>
                            <div className='flex justify-between w-[151px]'>
                                {/* Tag Makanan */}
                                <div className='h-[16px] flex justify-center w-fit
                                            border-[#EC7505] bg-[#EC7505] px-2 rounded-xl'>
                                    <h1 
                                    className='text-white font-poppins font-semibold text-[10px]'>
                                        Ayam
                                    </h1>
                                </div>

                                <div className='flex items-center w-[18px] h-[17px]'>
                                    <img src="/icon_star.svg" alt=""/>
                                    <h1 className='font-poppins font-semibold text-[13px]
                                    translate-x-1'>4.7</h1>
                                </div>
                            </div>
                            

                            <h1 className="font-medium font-poppins text-[20px]">
                                Ayam Goreng
                            </h1>
                            <h2 className="font-medium font-poppins text-sm text-[#9B8F8F]">
                                Rocket Chicken
                            </h2>
                            <p className="font-semibold font-poppins text-[13px]">
                                15.000
                            </p>
                        </div>
                </div>
            </Link>
        </>
    )
}