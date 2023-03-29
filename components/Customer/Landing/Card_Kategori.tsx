import Link from 'next/link'

export default function Card_Kategori () {
    return (
        <>
            <Link href="#" >
                    <div className="flex flex-col items-center">
                        {/* Gambar Kategori */}
                        <img 
                        src="/icon_kategori.svg" 
                        className='w-[93px] h-[93px]'/>

                        {/* Nama Kategori */}
                        <h1 className="font-poppins font-semibold text-[15px] -translate-y-1"
                        >
                        Dessert
                        </h1>
                    </div>
            </Link>
        </>
    )
}