import Link from 'next/link'

export default function C_Header ({ children }: any) {
    return (
        <>
            <div className='flex justify-between items-center h-[62px] w-screen shadow-lg'>
                <div className='flex items-center'>
                <Link href='/customer/hero' >
                    <img src="../icon_arrow_back.svg" alt=""/>
                </Link>

                <div>
                    <h1 className='font-bold font-poppins text-[20px]'>
                        {children}
                    </h1>
                </div> 
                </div>
                
                
                <div className='-translate-x-[14px]
                md:-translate-x-[30px]
                '>
                    <Link href='/customer/profil'>
                        <img src="/icon_c_akun.svg" alt="" className='w-[43px] '/>
                    </Link>  
                </div>
            </div>
        </>
    )
}