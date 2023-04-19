import Link from 'next/link'

import Tag_Makanan from '../Resto/Tag_Makanan';

interface Props {
  nama_resto: string;
  jam_buka: string;
  jam_tutup: string;
  jarak: string;
}

// MASIH NGE BUG DI BREAKWORDS ATAU NAMA RESTO YANG PANJANG

export default function Card_Kategori({ nama_resto, jam_buka, jam_tutup, jarak }: Props) {
  return (
    <>
      <Link href='/customer/resto'>
        <div className="flex rounded-lg w-[328] h-[100px] bg-white drop-shadow-lg">
          <img src="/icon_landing_restaurant.svg" alt="" className='w-[100px]' />
          
          <div className='flex flex-col justify-center relative mx-2'>
            {/* Tag */}
            <div className="flex mb-[2px] gap-x-1">
              <Tag_Makanan>
                Kopi 
              </Tag_Makanan>

              <Tag_Makanan>
                Halal 
               </Tag_Makanan>

              <Tag_Makanan>
                Babi 
              </Tag_Makanan>
            </div>

            <h1 className='text-ellipsis overflow-hidden font-semibold text-[17px] font-poppins block'>
              {nama_resto}
            </h1>

            <p className='-translate-y-1 text-[12px] text-[#838080] font-poppins break-words'>
              Jl.LohaLohe No.17
            </p>

            {/* Rating dan Jarak */}
            <div className='flex items-center gap-x-2 -translate-x-1'>

              {/* Rating */}
              <div className='flex items-center'>
              <img src="/icon_landing_star.svg" alt="" className=" w-[23px] h-[23px]"/>
              <p className='font-semibold text-[14px] font-poppins '>5.0</p>
              </div>
              
              {/* Jarak */}
              <div className='flex items-center'>
              <img src="/icon_location.svg" alt="" className="translate-x-1 w-[22px] h-[22px]" />
              <p className='translate-x-1 font-bold text-[14px] font-poppins'>{jarak}</p>
              </div>
            </div>
          </div>
          {/* <div className="flex-col items-center flex translate-x-6 py-3 gap-y-3">
            <h1 className="font-semibold font-poppins text-xl break-words">{nama_resto}</h1>
            <h1 className=" font-semibold font-poppins text-xl truncate w-40">Kepala babi guling di gebuk pak asep</h1>
            <h2 className="font-medium font-poppins text-[17px] text-[#666666]">{jam_buka}-{jam_tutup}</h2>
            <div className='flex px-5 justify-evenly gap-x-1 items-center'>
              <img src="/icon_landing_star.svg" alt="" className="translate-x-1 w-[18px] h-[18px]" />
              <p className='font-bold text-[13px] font-poppins '>5.0</p>
              <img src="/icon_location.svg" alt="" className="translate-x-1 w-[18px] h-[18px]" />
              <p className='font-bold text-[13px] font-poppins'>{jarak}</p>
            </div>
          </div> */}
        </div>
      </Link>

    </>
  )
}
