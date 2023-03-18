import List_Kategori from "@/components/Merchant/Add_Kategori/List_Kategori"

export default function add_kategori () {
    return (
        <>
            <div className="bg-[#EC7505] h-screen font-poppins">
                
                {/* Judul */}
                <div className="px-[19px] py-[19px]">
                    <h1 className="font-semibold text-[32px] text-white">
                        Kategori
                    </h1>
                </div>
                
                {/* List Kategori */}
                <div className="bg-white h-screen rounded-t-3xl flex-col ">
                    
                    <div className="px-[30px] py-4">
                        <h1 className="font-semibold text-xl">
                            Kategori yang dipilih
                        </h1>
                    </div>

                                     
                    <div className="px-[30px] justify-between flex flex-wrap gap-x-1 gap-y-3">

                        <List_Kategori>
                            Ayam
                        </List_Kategori>

                        <List_Kategori>
                            Kopi
                        </List_Kategori>

                        <List_Kategori>
                            Sapi
                        </List_Kategori>

                        <List_Kategori>
                            Babi
                        </List_Kategori>
                        
                        <List_Kategori>
                            Sayuran
                        </List_Kategori>

                        <List_Kategori>
                            Buah
                        </List_Kategori>
                        
                        <List_Kategori>
                            Kambing
                        </List_Kategori>

                        <List_Kategori>
                            Bekicot
                        </List_Kategori>

                    </div>

                    <div className="px-[30px] py-4">
                        <h1 className="font-semibold text-xl">
                            Kategori yang tersedia
                        </h1>
                    </div>

                                     
                    <div className="px-[30px] justify-between flex flex-wrap gap-x-1 gap-y-3">

                        <List_Kategori>
                            Ayam
                        </List_Kategori>

                        <List_Kategori>
                            Kopi
                        </List_Kategori>

                        <List_Kategori>
                            Sapi
                        </List_Kategori>

                        <List_Kategori>
                            Babi
                        </List_Kategori>
                        
                        <List_Kategori>
                            Sayuran
                        </List_Kategori>

                        <List_Kategori>
                            Buah
                        </List_Kategori>
                        
                        <List_Kategori>
                            Kambing
                        </List_Kategori>

                        <List_Kategori>
                            Bekicot
                        </List_Kategori>
                        
                    </div>

                </div>
            </div>
        </>
    )
}