import M_Navbar from "@/components/Merchant/M_Navbar";

import { useState } from "react";

const add_kategori = () => {
    
  const daftarKategori = ["Ayam", "Daging", "Babi", "Sayuran", "Buah", "Kopi", "Susu", "Telur", 
  "Ikan", "Bumbu", "Minuman", "Makanan Ringan", "Makanan Berat", "Makanan Sehat", "Makanan Khas", 
  "Makanan Tradisional"];

  const [kategoriTerpilih, setKategoriTerpilih] = useState<string[]>([]);

  const tambahKategoriTerpilih = (kategori: string) => {
    if (!kategoriTerpilih.includes(kategori)) {
      setKategoriTerpilih([...kategoriTerpilih, kategori]);
    }
  };

  const hapusKategoriTerpilih = (kategori: string) => {
    setKategoriTerpilih(kategoriTerpilih.filter((k) => k !== kategori));
  };

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
            <div className="bg-white h-screen rounded-t-3xl flex-col">
            
            {/*  Kategori yang dipilih */}
            <div className="px-[30px] py-4">
                <h1 className="font-semibold text-xl">
                    Kategori yang dipilih
                    </h1>
                </div>

                {/* List Kategori Terpilih */}
                <div className="px-[30px]  flex flex-wrap gap-x-1 gap-y-3">
                
                {kategoriTerpilih.map((kategori, index) => (
                    <button
                    key={index}
                    className="border-2 border-[#EC7505] rounded-xl flex justify-center px-3 
                                bg-[#EC7505] text-white"
                    onClick={() => hapusKategoriTerpilih(kategori)}
                    >
                    <h1 className="font-semibold font-poppins text-[12px]">
                        {kategori}
                    </h1>
                    </button>
                ))}

                </div>
                
                
                {/* Kategori yang tersedia */}
                <div className="px-[30px] py-4">
                <h1 className="font-semibold text-xl">
                    Kategori yang tersedia
                </h1>
                </div>
                
                {/* List Kategori Tersedia */}
                <div className="px-[30px]  flex flex-wrap gap-x-1 gap-y-3">

                {daftarKategori.map((kategori, index) => (
                    <button
                    key={index}
                    className={`border-2 border-[#EC7505] rounded-xl flex justify-center px-3 ${
                        kategoriTerpilih.includes(kategori) ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => tambahKategoriTerpilih(kategori)}
                    >
                    <h1 className="font-semibold font-poppins text-[12px]">
                        {kategori}
                    </h1>
                    </button>
                ))}
                </div>

            </div>
        </div>
      
        {/* Save Button */}
        <div className="fixed bottom-0 -translate-x-1/2 -translate-y-1/2 left-1/2">
            <button className="w-[314px] h-[44px] bg-[#EC7505] z-10 rounded-lg flex 
                                justify-center shadow-lg items-center my-4 ">
                <h1 className="text-white font-poppins font-semibold text-[19px]">
                    Save
                </h1>
            </button>
        </div>

        <div>
            <M_Navbar />
        </div>
    </>
  );
};

export default add_kategori;
