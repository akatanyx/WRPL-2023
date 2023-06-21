import Link from 'next/link'

import { Merchant } from '@/pages/interface';

interface CardRestoNearYouProps {
  merchantItem: Merchant;
}

const CardRestoNearYou:React.FC<CardRestoNearYouProps> = ({ merchantItem }) => {
  return (
    <>
      <Link href='/customer/resto'>
        <div className="flex rounded-lg w-[328] h-[100px] bg-white drop-shadow-md">
          <img src="/icon_landing_restaurant.svg" alt="" className='w-[100px]' />
          
          <div className='flex flex-col justify-center relative mx-2'>
            
            {/* Tag */}
            <div className='absolute translate-x-[130px] top-5'>
              <div className=" h-[19px] bg-[#D84A05] rounded-xl flex justify-center items-center">
                  <h1 className=" px-[13px] text-white text-[12px] font-semibold font-poppins"
                  >
                      Western
                  </h1>
              </div>
            </div>

            <h1 className='w-[120px] font-semibold text-[17px] font-poppins block whitespace-nowrap overflow-hidden overflow-ellipsis'>
              {merchantItem.nama_resto}
            </h1>

            <p className='-translate-y-1 text-[12px] text-[#838080] font-poppins break-words'>
              {merchantItem.alamat_resto}
            </p>

            {/* Rating dan Jarak */}
            <div className='flex items-center gap-x-2 -translate-x-1'>

              {/* Rating */}
              <div className='flex items-center'>
              <img src="/icon_landing_star.svg" alt="" className=" w-[23px] h-[23px]"/>
              <p className='font-semibold text-[14px] font-poppins '>{merchantItem.rating_resto}</p>
              </div>
              
              {/* Jarak */}
              <div className='flex items-center'>
              <img src="/icon_location.svg" alt="" className="translate-x-1 w-[22px] h-[22px]" />
              <p className='translate-x-1 font-bold text-[14px] font-poppins'>300 m</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

    </>
  )
}

export default CardRestoNearYou;
