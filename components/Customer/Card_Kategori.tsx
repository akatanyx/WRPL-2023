import Link from 'next/link'

export default function Card_Kategori () {
    return (
        <>
            <Link href="#" >
                    <div className="flex flex-row relative">
                        <img src="icon_kategori.svg" alt="" />
                        <h1 className="absolute bg-[#EC7505] bottom-0 right-0 left-0 
                            text-center text-white bg-opacity-50 rounded-b-lg font-semibold
                            text-sm font-poppins py-1"
                        >
                        Dessert
                        </h1>
                    </div>
            </Link>
        </>
    )
}