import Link from 'next/link'

export default function Card_Resto_Near () {
    return (
        <>   
            <Link href='#'>
                <div className="flex-col shadow-xl rounded-lg w-[140px]">
                        <img src="icon_landing_restaurant.svg" alt="" />
                        <h1 className="font-poppins font-semibold text-sm text-center">Anteiku Coffee</h1>
                        <img src="landing_rate_meter.svg" alt="" className="mx-auto"/>
                </div>
            </Link>
        </>
    )
}