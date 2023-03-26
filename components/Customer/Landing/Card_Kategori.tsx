import Link from 'next/link'

export default function Card_Kategori () {
    return (
        <>
            <Link href="#" >
                    <div className="flex flex-col items-center">
                        <img src="/icon_kategori.svg" alt=""/>
                        <h1 className="font-poppins font-semibold text-[12px] -translate-y-1"
                        >
                        Dessert
                        </h1>
                    </div>
            </Link>
        </>
    )
}