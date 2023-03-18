import Link from 'next/link';

const Popup_keluar = ({closeModal}) => {
    return (
        <>
            <div>
  
              <div className="z-1 fixed top-0 h-screen left-0 right-0 bg-black bg-opacity-40 
                "></div>
  
              {/* PopUp */}
              <div className='z-10 fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-lg w-[329px]
                h-[242px] flex flex-col justify-center px-8 p-5 bg-white'>
                    
                    <h1 className="text-[25px] font-poppins font-semibold">
                        Apakah anda yakin ?
                    </h1>
                    <p className="text-lg font-poppins font-medium">
                        Seluruh perubahan yang dilakukan akan hilang
                    </p>

                    <div className="flex gap-x-3 mt-6">
                        <Link href='/merchant/list_menu'>
                            <button className='w-[133px] h-[49px] flex justify-center items-center px-6 py-2 
                                rounded-lg bg-[#EC7505] '>
                                <h1 className='text-white font-poppins font-semibold text-[25px]'>
                                    YA
                                </h1>
                            </button>
                        </Link>
                        
                        <button onClick={closeModal} className='w-[133px] h-[49px] flex justify-center items-center 
                            px-6 py-2 rounded-lg border bg-white border-[#EC7505] '>
                            <h1 className='text-[#EC7505] font-poppins font-semibold text-[25px]'>
                                TIDAK
                            </h1>
                        </button>
                    </div>
                
              </div>
            </div>
        </>
    );
  };
  
  export default Popup_keluar;