export default function Items_resto () {
    return (
        <>
            <div className='flex flex-col items-center'>
            <img src="/resto_item.svg" alt="" className='w-140' />
                <h1 className='font-poppins text-xl'>Ayam Bakar</h1>
                <p className='font-poppins text-[19px] text-center'>15.000</p>

            <button className='border-2 rounded-xl px-6 border-[#D84A05] text-[#D84A05] 
                font-poppins text-[13px]'
            >
                add to cart
             </button>
            </div>
        </> 
    )
}