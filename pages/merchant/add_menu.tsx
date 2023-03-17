import Head from "next/head"
import Header_TambahMenu from "@/components/Merchant/Add_Menu/Header_TambahMenu"
import Header_w_notif from "@/components/Merchant/Header_w_notif"
import M_Navbar from "@/components/Merchant/M_Navbar"

export default function add_menu () {
    return (
        <>
            <Head>
                <title>Tambah Menu</title>
            </Head>
            
            {/* Header 1 */}
            <div>
                <Header_w_notif>
                    List Menu
                </Header_w_notif>
            </div>

            {/* Header 2 */}
            <div>
                <Header_TambahMenu />
            </div>

            {/* Input Gambar */}
            <div className="mx-[78px] mt-6  md:flex md:justify-center">
                <input type="image" src="/icon_m_inputimage.svg" alt=""className="shadow-lg rounded-lg w-[203px]" />
            </div>

            {/* Form */}
            <div className="mx-5 mt-4">
                <form action="/">
                    
                    <div className="flex-col">
                        {/* Nama Makanan */}
                        <div className="flex-col">
                            <h1 className="font-poppins font-bold text-[15px]">Nama Makanan</h1>
                            <input type="text" className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg" />
                        </div>
                        
                        {/* Harga */}
                        <div className="flex-col mt-2">
                            <h1 className="font-poppins font-bold text-[15px]">Harga</h1>
                            <input type="text" className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg" />
                        </div>
                        
                        {/* Kategori */}
                        <div className="flex-col mt-2">
                            <h1 className="font-poppins font-bold text-[15px]">Nama Makanan</h1>
                            <button className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg">
                                <h1 className="font-popins font-semibold text-[15px] text-[#000000] text-opacity-60">Pilih</h1>
                            </button>
                        </div>

                        {/* Deskripsi */}
                        <div className="flex-col mt-2">
                            <h1 className="font-poppins font-bold text-[15px]">Deskripsi Makanan</h1>
                            <input type="text" className="w-[314px] h-[142px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg" />
                        </div>

                        {/* Save */}
                        <button className="w-[314px] h-[44px] bg-[#EC7505] z-10 rounded-lg flex 
                            justify-center shadow-lg items-center my-4">
                            <h1 className="text-white font-poppins font-semibold text-[19px]">
                                Save
                            </h1>
                        </button>
                    </div>
                </form>
            </div>

            <div className="mb-96"></div>

            <div>
                <M_Navbar />
            </div>
            
        </>
    )
}