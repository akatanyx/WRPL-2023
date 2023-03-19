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
        <div className="bg-white h-screen rounded-t-3xl flex-col ">
                    
          <div className="px-[30px] py-4">
            <h1 className="font-semibold text-xl">
                Kategori yang dipilih
                </h1>
            </div>

            {/* Kategori Terpilih */}
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
            
            

            <div className="px-[30px] py-4">
              <h1 className="font-semibold text-xl">
                Kategori yang tersedia
              </h1>
            </div>
            
            {/* Kategori Tersedia */}
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
    </>
  );
};

export default add_kategori;
