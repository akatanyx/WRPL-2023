export default function Content_landing_driver () {
    return (
    <div >
        <div className="h-screen w-screen">
          <img className="object-cover h-full w-full absolute -z-10" src="/peta.svg"/>
        </div>
        <div className="sm:w-3/4 sm:mx-auto bg-white fixed inset-x-0 top-[700px] m-4 p-4 w-226 h-30 rounded-md border-4 border-[#D84A05] font-bold">
          <div >
            <div  className="flex justify-between">
              <div className="flex flex-row contents-center">
                <div>
                  <button className="p-3">
                    <img src="/3_dot.svg"/>
                  </button>
                </div>
                <div className="p-2">
                  Restoran
                </div>
              </div>
              <div className="p-2">
                Tujuan
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 sm:mx-auto m-4 p-4 w-226 h-30 rounded-md border-4 border-[#D84A05] flex justify-center" >
            <button className="text-[#D84A05]">
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
    )
}