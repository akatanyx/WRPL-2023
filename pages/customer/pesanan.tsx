import Head from "next/head";
import C_Header from "@/components/Customer/C_Header";
import Card_Pesanan from "@/components/Customer/Pesanan/Card_Pesanan";
import Popup_diskon from "@/components/Customer/Pesanan/Popup_Diskon_pesanan";
import Popup_Pin from "@/components/Customer/Pesanan/Popup_Pin";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Cart {
  _id: string;
  menuId: string;
  jumlah: number;
}

interface Post {
  _id: string;
  nama: string;
  desk: string;
  harga: number;
  imgURL: string;
}

interface Wallet {
  _id: string;
  id_wallet: string;
  no_telp: string;
  nama: string;
  saldo: number;
}

export default function Pesanan({ carts, posts, wallet }: any) {
  // console.log(wallet[0]);
  // Merge carts dan posts berdasarkan menuId
  const mergeById = (carts: Cart[], posts: Post[]) =>
    carts.map((item1) => ({
      ...posts.find((item2) => item1.menuId === item2._id),
      ...item1,
    }));

  const [quantity, setQuantity] = useState(1);

  // Callback function to handle updating the quantity in the parent component
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const initialValue = 0;
  // Hitung total harga
  const [itemPrice, setItemPrice] = useState(
    mergeById(carts, posts).reduce(
      (accumulator, current: any) =>
        accumulator + current.harga * current.jumlah,
      initialValue
    )
  );
  const deliPrice = 30000; // Biaya pengiriman dihitung dari jarak?
  const appPrice = 5000; // Aplikasi
  // To locale untuk format Rupiah
  const totalPrice = itemPrice + deliPrice + appPrice; // Total harga

  // POPUP DISKON
  const [showMyModal, setShowMyModal] = useState(false);
  const closeModal = () => setShowMyModal(false);

  const handleDiskon = (
    diskon: number,
    minPembelian: number,
    maxPotongan: number
  ) => {
    if (itemPrice >= minPembelian) {
      const newPrice = itemPrice - (itemPrice * diskon) / 100;
      if (newPrice > maxPotongan) {
        const newPrice = itemPrice - maxPotongan;
        setItemPrice(newPrice);
      } else {
        setItemPrice(newPrice);
      }
    } else {
      console.log("Minimal pembelian tidak terpenuhi");
      return totalPrice;
    }
  };

  const saldo = 1000;
  const [saldoKurang, setSaldoKurang] = useState(false);
  useEffect(() => {
    if (saldo < totalPrice) {
      setSaldoKurang(true);
    }
  }, [saldo, totalPrice]);

  const className = saldoKurang
    ? 'bg-black bg-opacity-25 w-[316px] flex justify-between items-center rounded-lg h-[55px] border-2 border-opacity-25 active:border-[#EC7505] focus:border-[#EC7505] md:mx-auto' // warna saat saldo kurang
    : 'w-[316px] flex justify-between items-center rounded-lg h-[55px] border-2 border-opacity-25 active:border-[#EC7505] focus:border-[#EC7505] md:mx-auto'; // warna saat saldo cukup atau pada hover

  return (
    <>
      {showMyModal && (
        <Popup_diskon closeModal={closeModal} handleDiskon={handleDiskon} />
      )}
      <Head>
        <title>Pesanan</title>
      </Head>

      {/* Biar Kalau Popup Muncul, semua selain popup bakal hidden */}
      {showMyModal || showMyModal ? null : (
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

          {mergeById(carts, posts).map((post) => (
            <Card_Pesanan
              key={post._id}
              nama={post.nama}
              desk={post.desk}
              harga={post.harga}
              imgURL={post.imgURL}
              jumlah={post.jumlah}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          {/* Apply Promo */}
          <button
            onClick={() => setShowMyModal(true)}
            className="mt-[13px] ml-[23px] mr-[19px]
            md:flex md:mx-auto
            "
          >
            <img src="/apply_promo.svg" alt="" />
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
                Rp. {totalPrice}
              </h1>
            </div>
            {/* List Pesanan dan Harga */}
            <div className="rounded-b-lg ml-[17px] shadow-lg">
              {/* Biaya Menu */}
              <div className="pt-[9px]">
                {mergeById(carts, posts).map((post: any) => (
                  <div key={post._id}>
                    {/* Nama Menu dan Jumlah Menu */}
                    <div className="flex justify-between w-[281px]">
                      <h1 className="text-[#7C3D02] font-medium text-[16px]  ">
                        {post.nama}
                      </h1>
                      <p className="text-[#7C3D02] font-medium text-[16px]">
                        x {post.jumlah}
                      </p>
                    </div>
                    {/* Harga Menu Total */}
                    <p className="text-[#E4740B] font-semibold text-[14px] -translate-y-1">
                      {post.harga * post.jumlah}
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
                className={className}>
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
                  {/* Munculkan jika saldo kurang menggunakan hidden dan unhidden pada classname*/}
                  <div className= "flex flex-row font-poppins md:justify-center">
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
            onClick={() => setShowMyModal(true)}
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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts?type=carts");
  const carts: Cart[] = await res.json();

  const res2 = await fetch("http://localhost:3000/api/posts?type=menus");
  const posts: Post[] = await res2.json();

  const res3 = await fetch("http://localhost:3000/api/posts?type=e-wallet");
  const wallet: Wallet[] = await res3.json();

  return {
    props: {
      carts,
      posts,
      wallet,
    },
  };
}
