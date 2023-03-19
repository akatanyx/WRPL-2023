import Link from 'next/link';

const Popup_stock = ({closeModal}) => {
    return (
        <>
            <div>
  
              <div onClick={closeModal} className="z-10 fixed top-0 h-screen left-0 right-0 bg-black bg-opacity-40 
                "></div>
  
              {/* PopUp */}
              <div className='z-10 fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-lg w-[293px]
                h-[137px] flex flex-col items-center justify-center px-8 p-5 bg-white'>
                    
                    <h1 className='font-poppins font-semibold text-[23px] translate-y-3'>
                        Edit Stock
                    </h1>

                    {/* Add or Reduce Stock */}
                    <div>
                        <div className='justify-center items-center flex w-[293px] h-[84px]
                        gap-x-3'>
                        <button>
                            <img src="/icon_popup_minus_stock.svg" alt="" />
                        </button>
                            
                        <h1 className='font-poppins font-semibold text-[35px]'>
                            100
                        </h1>

                        <button>
                            <img src="/icon_popup_plus_stock.svg" alt="" />
                        </button>
                        </div>
                    </div>

                    {/* Button Save */}
                    <div className='w-[180px] h-[32px] -translate-y-4'>
                        <button className='w-full h-full bg-[#EC7505] rounded-lg font-poppins font-semibold 
                        text-[14px] text-white'>
                            Save
                        </button>
                    </div>    
              </div>
            </div>
        </>
    );
  };
  
  export default Popup_stock;