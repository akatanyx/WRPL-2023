const Modal = ({closeModal}) => {
  return (
      <>
          <div>

            <div className="z-1 fixed top-0 h-screen left-0 right-0 bg-black bg-opacity-10 
              backdrop-blur-sm"></div>

            {/* PopUp */}
            <div className='z-2 fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-lg w-80 
              flex flex-col items-center justify-center px-6 p-5 border-4 border-[#D84A05] bg-white'>
                  
                  {/* Completed */}
                  {/* Setelah Complete gak tau harus kemana */}
                  <button className='w-56 flex justify-center items-center font-bold font-inter px-5 py-2 
                      rounded-lg bg-[#EC7505] text-[24px]'>
                      <h1 className='text-white'>Complete</h1>
                  </button>

                  {/* Cancel Close Modal */}
                  <button className='w-56 mt-2 flex justify-center items-center font-bold font-inter px-5 py-2 
                      rounded-lg border-2 border-[#EC7505] text-[24px]'>
                      <h1 onClick={closeModal} className='text-[#EC7505]'>Cancel</h1>
                  </button>
            </div>
          </div>
      </>
  );
};

export default Modal;