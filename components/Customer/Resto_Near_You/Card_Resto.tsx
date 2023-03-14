import Link from 'next/link'

interface Props {
  nama_resto: string;
  jam_buka: string;
  jam_tutup: string;
}

export default function Card_Kategori ({nama_resto, jam_buka, jam_tutup}: Props) {
  return (
    <Link href='/Customer/resto'>
      <div className="flex rounded-lg w-[332] bg-white drop-shadow-lg">
        <img src="/icon_landing_restaurant.svg" alt=""/>
        <div className="flex-col items-center flex translate-x-6 py-3 gap-y-3">
          <h1 className="font-semibold font-poppins text-xl">{nama_resto}</h1>
          <h2 className="font-medium font-poppins text-[17px] text-[#666666]">{jam_buka}</h2>
          {/* <h2 className="font-medium font-poppins text-[17px] text-[#666666]">{jam_tutup}</h2> */}
          <img src="/landing_rate_meter.svg" alt="" className="mx-auto w-[133px] h-[27px]"/>
        </div>
      </div>
    </Link>
  )
}
