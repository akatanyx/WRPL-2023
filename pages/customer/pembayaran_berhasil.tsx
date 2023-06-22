import Link from "next/link";
import { useEffect } from "react";

interface CartItem {
  _id: string;
  jumlah: number;
  menuItems: {
    nama: string;
    harga: number;
  };
}

export default function Pembayaran_berhasil({cartItems}: {cartItems: CartItem[]}) {
  const current = new Date();

  function getDate(): string {
    const day = current.getDate();
    const month = current.toLocaleString("nl-NL", { month: "long" });
    const year = current.getFullYear();

    const minutes = ('0'+current.getMinutes()).slice(-2);
    const hours = current.getHours();
    const date = `${day} ${month} ${year} ${hours}:${minutes}`;
    return date;
  }

  return (
    <div className="font-poppins">
      <div className="bg-[#EC7505] h-screen w-screen">
        <div className="bg-white rounded-t-3xl w-screen translate-y-[295px]">
          <div
            className="shadow-md mx-auto bg-white w-[300px] pb-[10px] rounded-3xl
                                    -translate-y-[124px]"
          >
            <img
              src="/b_pembhasil_centang.svg"
              className="mx-auto pt-[53px] pb-[10px]"
            />

            <h1 className="font-medium text-[23px] text-center">
              Pemesanan Berhasil Dilakukan
            </h1>

            {/* Tanggal Transaksi */}
            <h1 className="text-[18px] text-[#9A9A9A] text-center mt-[6px]">
              {getDate()}
            </h1>

            {/* Kode Transaksi */}
            <h1 className="text-[18px] text-[#9A9A9A] text-center">
              APX123JOASKDO231
            </h1>

            {/* Border Pembatas */}
            <div className="border-2 border-[#D9D9D9] w-[250px] mx-auto my-[15px]"></div>

            {/* Nama Resto*/}
            <h1 className="text-[18px] text-[#838080] font-medium pl-[33px]">
              Anteiku Coffee
            </h1>

            {/* Menu */}
            {cartItems.map((cartItem: CartItem) => (
            <div key={cartItem._id} className="flex-col">
              <div className="flex justify-between text-[16px] text-[#9A9A9A] pl-[33px] pr-[32px]">
                {/* Nama Makanan */}
                <h1>{cartItem.menuItems.nama}</h1>

                {/* Jumlah Makanan */}
                <p>{cartItem.jumlah}</p>
              </div>
            </div>
            ))}

            {/* Lanjutkan */}

            <Link href="/customer/pesanan_proses">
              <button
                className="mt-[60px] w-[250px] h-[56px] rounded-full mx-auto
                                                flex justify-center items-center bg-[#EC7505]"
              >
                <h1 className="font-semibold text-[21px] text-white">
                  Lanjutkan
                </h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/searchcart");
  const cartItems: CartItem[] = await response.json();

  return {
    props: {
      cartItems,
    },
  };
}