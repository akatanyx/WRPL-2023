import Head from "next/head";
import C_Header from "@/components/Customer/C_Header";
import Card_Pesanan from "@/components/Customer/Pesanan/Card_Pesanan";
import Popup_diskon from "@/components/Customer/Pesanan/Popup_Diskon_pesanan";
import Popup_Pin from "@/components/Customer/Pesanan/Popup_Pin";

import Link from "next/link";
import { useState } from "react";
import vouchers from "./datas/vouchers";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Pesanan() {
  const [cartItems, setCartItems] = useState([
    {
      _id: "6458fa323c85fe763543d4c5",
      menuId: "6423315d79140f65b09049c0",
      jumlah: 8,
      menuItems: {
        nama: "Ayam Betutu",
        harga: 41500,
        desk: "Ayam sudah muak dengan error",
        tag: "",
        kategori: "",
        rating: "",
        imgURL:
          "https://res.cloudinary.com/prema-cloud/image/upload/v1680027994/yidcskeine6f8kmkqafq.jpg",
      },
    },
    {
      _id: "645902533c85fe763543d4c6",
      menuId: "642338a279140f65b09049c1",
      jumlah: 10,
      menuItems: {
        nama: "Pecel Encim",
        harga: 20000,
        desk: "Pecel aku ketemu error mulu",
        tag: "",
        kategori: "",
        rating: "",
        imgURL:
          "https://res.cloudinary.com/prema-cloud/image/upload/v1680029855/xfpffwlrv4awjp7zk7kw.jpg",
      },
    },
  ]);

  const handleUpdateJumlah = (itemId: string, newJumlah: number) => {
    const updatedItems = cartItems.map((item) => {
      if (item._id === itemId) {
        return { ...item, jumlah: newJumlah };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const calculateTotalPrice = (): number => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const itemPrice = Number(item.menuItems.harga) * item.jumlah;
      totalPrice += itemPrice;
    });

    return totalPrice;
  };

  const [totalHarga, setTotalHarga] = useState(() => calculateTotalPrice());
  const deliPrice = 30000;
  const appPrice = 5000;
  let saldo = 1000000;

  const className =
    calculateTotalPrice() + deliPrice + appPrice > saldo
      ? "bg-black bg-opacity-25 w-[316px] flex justify-between items-center rounded-lg h-[55px] border-2 border-opacity-25 active:border-[#EC7505] focus:border-[#EC7505] md:mx-auto" // warna saat saldo kurang
      : "w-[316px] flex justify-between items-center rounded-lg h-[55px] border-2 border-opacity-25 active:border-[#EC7505] focus:border-[#EC7505] md:mx-auto"; // warna saat saldo cukup atau pada hover

  const [appliedVoucher, setAppliedVoucher] = useState<string>("");
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  const applyVoucher = (voucherId: string) => {
    // Find the selected voucher based on voucherId
    const selectedVoucher = vouchers.find(
      (voucher) => voucher.id === voucherId
    );

    if (selectedVoucher) {
      const totalPrice = calculateTotalPrice();
      if (totalPrice > selectedVoucher.minPurchase) {
        const discount = totalPrice * selectedVoucher.amount/100;
        if (discount > selectedVoucher.maxDiscount) {
          setTotalHarga(totalPrice - selectedVoucher.maxDiscount);
        } else {
          setTotalHarga(totalPrice - discount);
        }
      } else {
        alert("Total harga belum mencapai minimum pembelian");
      }
    }

    setAppliedVoucher(voucherId);
    handleClosePopup();
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const router = useRouter();
  const handlePay = () => {
    if (totalHarga > saldo) {
      alert("Saldo tidak cukup");
    } else {
      alert("Pembayaran berhasil");
      router.push("pembayaran_berhasil");
    }
  };

  return (
    <>
      {isPopupVisible && (
        <Popup_diskon
          vouchers={vouchers}
          appliedVoucher={appliedVoucher}
          applyVoucher={applyVoucher}
          onClose={handleClosePopup}
        />
      )}
      <Head>
        <title>Pesanan</title>
      </Head>

      {!isPopupVisible && (
        <div>
          {/* Header */}
          <C_Header>Pesanan</C_Header>

          {/* Alamat Pembeli */}
          <div className="ml-[23px] mt-[25px] flex font-poppins">
            <img src="/icon_promo_location.svg" alt="" />

            <div className="flex items-center justify-between w-[295px]">
              {/* Nama Jalan */}
              <h1 className="font-medium text-[15px] ml-[13px]">
                Jl. Owawawa No.1 Kelurahan Kota
              </h1>

              <Link href="#">
                <img src="/icon_promo_location_arrow.svg" />
              </Link>
            </div>
          </div>

          {/* Keterangan */}
          <form action="" className="flex">
            <img
              src="/icon_promo_location_keterangan.svg"
              className="ml-[57px]"
            />
            <input
              className="w-[253px] text-[12px] p-1 text-[#808080] focus:outline-none"
              placeholder="Tulis Keterangan tambahan disini"
              type="text"
            />
          </form>

          {/* Border Pembatas */}
          <div className="border-2 border-[#D9D9D9] w-[318px] mx-auto mt-[9px]"></div>

          {cartItems.map((item) => (
            <Card_Pesanan
              key={item._id}
              cartItem={item}
              onUpdateJumlah={handleUpdateJumlah}
            />
          ))}

          {/* Apply Promo */}
          <button
            onClick={handleOpenPopup}
            className="mt-[13px] ml-[23px] mr-[19px]
            md:flex md:mx-auto
            "
          >
            <Image src={appliedVoucher !== "" ? "/apply_promo_applied.svg" : "/apply_promo.svg"} alt="" width={316} height={51} />
          </button>

          {/* List Harga */}
          <div
            className="bg-[#E89005] bg-opacity-[14%] 
            mt-[21px] ml-[23px] mr-[19px] w-[316px] 
            border border-1 border-black border-opacity-25 rounded-lg
            font-poppins
            md:mx-auto
            "
          >
            {/* Total Harga */}
            <div className="bg-[#EC7505] h-[46px] rounded-lg flex items-center pl-[17px]">
              <h1 className="text-white font-semibold text-[25px]">
                Rp. {totalHarga+deliPrice+appPrice}
              </h1>
            </div>
            {/* List Pesanan dan Harga */}
            <div className="rounded-b-lg ml-[17px] shadow-lg">
              {/* Biaya Menu */}
              <div className="pt-[9px]">
                {cartItems.map((item) => (
                  <div key={item._id}>
                    {/* Nama Menu dan Jumlah Menu */}
                    <div className="flex justify-between w-[281px]">
                      <h1 className="text-[#7C3D02] font-medium text-[16px]  ">
                        {item.menuItems.nama}
                      </h1>
                      <p className="text-[#7C3D02] font-medium text-[16px]">
                        x {item.jumlah}
                      </p>
                    </div>
                    {/* Harga Menu Total */}
                    <p className="text-[#E4740B] font-semibold text-[14px] -translate-y-1">
                      {item.menuItems.harga * item.jumlah}
                    </p>
                  </div>
                ))}
              </div>

              {/* Biaya Pengiriman */}
              <div>
                <h1 className="text-[#7C3D02] font-medium text-[16px]">
                  Biaya Pengiriman
                </h1>
                {/* Harga Pengiriman */}
                <p className="text-[#E4740B] font-semibold text-[14px] -translate-y-1">
                  {deliPrice}
                </p>
              </div>

              {/* Biaya Aplikasi */}
              <div>
                <h1 className="text-[#7C3D02] font-medium text-[16px]">
                  Biaya Aplikasi
                </h1>
                {/* Harga Pengiriman */}
                <p className="text-[#E4740B] font-semibold text-[14px] -translate-y-1">
                  {appPrice}
                </p>
              </div>
            </div>
          </div>

          {/* Metode Pembayaran */}
          <div className="font-poppins mt-4 ">
            <h1 className="ml-[23px] font-semibold text-[23px] md:text-center md:ml-0">
              Metode Pembayaran
            </h1>

            {/* Layanan Dana */}
            <div className="flex-col ml-[22px] mt-6 md:justify-center md:ml-0">
              {/* lets Cash */}
              <button
                disabled={saldo < calculateTotalPrice() + deliPrice + appPrice}
                className={className}
              >
                <div className="flex-col ml-[14px] mt-[6px]">
                  <div className="flex items-center">
                    <h1 className="font-medium text-lg">Lets Cash</h1>
                    <img
                      src="/cart_logo_letscash.svg"
                      className="translate-x-1"
                    />
                  </div>
                  {/* Saldo */}
                  <h1 className="font-medium text-[12px] text-[#7E7E7E] -translate-x-3 -translate-y-1">
                    Saldo : {saldo}
                  </h1>
                </div>
                {/* Bullet */}
                <img src="/cart_logo_bullet.svg" className="w-[27px] mr-4" />
              </button>

              {/* Saldo Kurang */}
              {saldo < calculateTotalPrice() + deliPrice + appPrice && (
                <div className="flex flex-row font-poppins md:justify-center">
                  <h2 className="text-[12px] w-80">
                    Saldo anda kurang, apakah anda ingin melakukan{" "}
                    <Link href="../ewallet/topup">
                      <button>
                        <h1 className="font-bold text-[12px]">Top Up</h1>
                      </button>
                    </Link>
                    ?
                  </h2>
                </div>
              )}

              {/* Cash */}
              <button
                className="mt-[18px] w-[316px] flex justify-between items-center rounded-lg h-[55px] 
                                 border-2 border-opacity-25 active:border-[#EC7505] 
                                 focus:border-[#EC7505]
                                 md:mx-auto"
              >
                <div className="flex items-center ml-[14px] mt-[6px]">
                  <h1 className="font-medium text-lg">Cash</h1>
                  <img src="/cart_logo_cash.svg" className="translate-x-1" />
                </div>
                {/* Bullet */}
                <img src="/cart_logo_bullet.svg" className="w-[27px] mr-4" />
              </button>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePay}
            className=" bg-[#EC7505] w-[172px] h-[56px]
            rounded-lg mt-[34px] mx-auto
            flex justify-center items-center 
            "
          >
            <h1 className="font-poppins text-white font-bold text-[24px]">
              Bayar
            </h1>
          </button>

          <div className="mb-16" />
        </div>
      )}
    </>
  );
}
