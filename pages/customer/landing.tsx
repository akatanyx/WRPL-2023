import Link from 'next/link'

export default function landing () {
  return (
    <>
        <div className="flex flex-col items-center justify-center">
            <img src="/icon_landing_letseat.svg" alt="" className="mt-9"/>
            <img src="/landing_image.svg" alt="" />
            <div className="w-[290px]">
                <h1 className="font-poppins font-bold text-[24px] mt-[32px]">
                    Pesan Makanan 
                    <span className="text-transparent"> ... </span>
                    Mudah dan Cepat
                </h1>
                <p className="font-poppins text-[15px] mt-[10px]">
                    Pesan makanan dari restoran terbaik dengan satu sentuhan di aplikasi kami
                </p>
            </div>

            <Link href='/customer/login' className='flex justify-center items-center w-[314px] h-[44px] 
                                    bg-[#EC7505] bottom-10 absolute rounded-lg shadow-lg'>
                <button className="text-white font-poppins text-[19px]">
                        Login Sekarang
                </button>
            </Link>
        </div>
    </>
  )
}