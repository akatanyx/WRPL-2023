import Link from 'next/link'
export default function Card_Kategori () {
    return (
        <>
            <Link href='#'>
                <div className="flex bg-[#FFFFFF] rounded-lg w-72 shadow-lg border">
                        <img src="makanan.svg " alt="" />
                        <div className="flex-col flex translate-x-6 py-3">
                            <h1 className="font-semibold font-poppins text-[21px]">Ayam Goreng</h1>
                            <h2 className="font-medium font-poppins text-sm">Rocket Chicken</h2>
                            <p className="font-poppins text-lg">15.000</p>
                        </div>
                </div>
            </Link>
        </>
    )
}