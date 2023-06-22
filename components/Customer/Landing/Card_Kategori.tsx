import Link from 'next/link'
import { CardKategoriProps } from '@/pages/interface'

export default function Card_Kategori ({namaKategori, gambarKategori}: CardKategoriProps) {
    return (
        <>
            <Link href="#" >
                    <div className="flex flex-col items-center">
                        {/* Gambar Kategori */}
                        <img 
                        src={gambarKategori} 
                        className='w-[93px] h-[93px]'/>

                        {/* Nama Kategori */}
                        <h1 className="font-poppins font-semibold text-[15px] -translate-y-1"
                        >
                        {namaKategori}
                        </h1>
                    </div>
            </Link>
        </>
    )
}