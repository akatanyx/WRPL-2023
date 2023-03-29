import Link from 'next/link'
interface Props {
  nama_resto: string;
  jam_buka: string;
  jam_tutup: string;
  jarak: string;
}

export default function Card_Kategori({ nama_resto, jam_buka, jam_tutup, jarak }: Props) {
  return (
    <>
      <Link href='/customer/resto'>
        <div className="flex rounded-lg w-[332] bg-white drop-shadow-lg">
          <img src="/icon_landing_restaurant.svg" alt="" className='' />
          <div className="flex-col items-center flex translate-x-6 py-3 gap-y-3">
            <h1 className="font-semibold font-poppins text-xl break-words">{nama_resto}</h1>
            <h1 className=" font-semibold font-poppins text-xl truncate w-40">Kepala babi guling di gebuk pak asep</h1>
            <h2 className="font-medium font-poppins text-[17px] text-[#666666]">{jam_buka}-{jam_tutup}</h2>
            <div className='flex px-5 justify-evenly gap-x-1 items-center'>
              <img src="/icon_landing_star.svg" alt="" className="translate-x-1 w-[18px] h-[18px]" />
              <p className='font-bold text-[13px] font-poppins '>5.0</p>
              <img src="/icon_location.svg" alt="" className="translate-x-1 w-[18px] h-[18px]" />
              <p className='font-bold text-[13px] font-poppins'>{jarak}</p>
            </div>
          </div>
        </div>
      </Link>

    </>
  )
}
