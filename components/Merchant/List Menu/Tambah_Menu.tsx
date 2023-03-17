import Link from 'next/link'
export default function Tambah_Menu () {
    return (
        <>
            <Link href='/merchant/add_menu'>
                <button className="fixed w-[314px] h-[44px] bg-[#EC7505] z-10 rounded-lg flex 
                    justify-center shadow-lg items-center left-1/2 transform 
                    -translate-x-1/2 -translate-y-1/2 bottom-8">
                    <h1 className="text-white font-poppins font-semibold text-[19px]">
                        Tambah Menu
                    </h1>
                </button>
            </Link>
        </>
    )
}