import Link from 'next/link'
export default function Alamat () {
    return (
        <div>
            <div className="ml-5 mt-6 mr-[22px] flex font-poppins 
                            md:justify-center">
                <img src="/icon_promo_location.svg" alt="" />

                <div className="flex items-center justify-between w-[317px] h-[25px]">
                {/* Nama Jalan */}
                <h1 className="font-medium text-[15px] ml-[13px]">
                    Jl. Owawawa No.1 Kelurahan Kota
                </h1>

                <Link href="/customer/resto_near_you">
                    <img src="/icon_promo_location_arrow.svg" />
                </Link>
                </div>
            </div>
        </div>
    )
}