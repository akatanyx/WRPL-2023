import Link from 'next/link'
export default function Card_Kategori () {
    return (
        <>
            <Link href='#'>
                <div className="flex bg-[#EC7505] rounded-lg w-72">
                        <img src="makanan.svg " alt="" />
                        <div className="flex-col flex translate-x-6 py-3">
                            <h1 className="font-semibold font-poppins text-xl text-white">Ayam Goreng</h1>
                            <h2 className="font-medium font-poppins text-sm text-white">Rocket Chicken</h2>
                            <p className="font-poppins text-lg text-white">15.000</p>
                        </div>
                </div>
            </Link>
        </>
    )
}