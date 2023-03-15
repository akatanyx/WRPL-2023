import Link from 'next/link'

export default function C_Header () {
    return (
        <>
            <div className='flex items-center h-[62px] p-5 shadow-lg'>
                <Link href='/customer/resto_near_you' >
                    <img src="../icon_arrow_back.svg" alt="" className='w-[35px] h-[35px]'/>
                </Link>

                <div>
                    <h1 className='font-bold font-poppins text-[21px]'>Nama Restoran</h1>
                </div>
                
                <div className='absolute  right-5 md:right-0'>
                    <Link href='#'>
                        <img src="/icon_c_akun.svg" alt="" className='w-[43px] '/>
                    </Link>  
                </div>
            </div>
        </>
    )
}