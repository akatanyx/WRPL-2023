import { useState } from "react";

const Kategori = () => {
  const daftarKategori = ["Ayam", "Daging", "Babi", "Sayuran", "Buah"];
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
    <div className="px-[30px] flex flex-wrap gap-2">
      {daftarKategori.map((kategori, index) => (
        <button
          key={index}
          className={`w-[61px] h-[19px] border-2 rounded-lg flex justify-center ${
            kategoriTerpilih.includes(kategori) ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => tambahKategoriTerpilih(kategori)}
        >
          <h1 className="font-semibold font-poppins text-[12px]">
            {kategori}
          </h1>
        </button>
      ))}
      {kategoriTerpilih.map((kategori, index) => (
        <button
          key={index}
          className="w-[61px] h-[19px] border-2 rounded-lg flex justify-center bg-blue-500 text-white"
          onClick={() => hapusKategoriTerpilih(kategori)}
        >
          <h1 className="font-semibold font-poppins text-[12px]">
            {kategori}
          </h1>
        </button>
      ))}
    </div>
  );
};

export default Kategori;
