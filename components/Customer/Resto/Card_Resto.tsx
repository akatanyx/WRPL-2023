export default function Card_Resto () {
    return (
        <>
            <div className='flex shadow-lg w-[314px] rounded-lg md:w-full'>
                    <img src="/icon_makanan.svg" alt="" className='rounded-lg'/>
                    
                <div className='flex flex-col justify-center px-6 '>
                    {/* Masih belum bisa break-words */}
                    <h1 className='break-words font-semibold text-[15px] font-poppins'>Kopi Hitam</h1>
                    <p className='text-mobile text-[#838080] font-poppins break-words'>Kopi Pahit</p>
                        
                    {/* Harga */}
                    {/* Belum bisa apply diskon hidden*/}
                    <div className='flex items-center gap-x-2'>
                        <h1 className='font-poppins text-[12px] font-semibold'>15.000</h1>
                        <p className='font-poppins font-semibold text-[10px] text-[#838080] line-through'>20.000</p>
                    </div>

                    <div className='flex items-center gap-x-1'>
                        <img src="/icon_like_menu.svg" alt="" />
                        <p className='font-semibold font-poppins text-[10px] text-[#EC7505]'>50000</p>
                    </div>
                </div>
            </div>
        </>
    )
}