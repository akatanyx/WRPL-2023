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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSession } from "next-auth/react";
import { connectToDatabase } from "../mongodb";

interface Wallet {
  _id: { $oid: string };
  id_user: string;
  nomor_wallet: string;
  saldo: number;
  pin: string;
}

interface CartItem {
  _id: string;
  id_user: string;
  id_menu: string;
  jumlah: number;
  menuItems: {
    nama: string;
    harga: number;
    desk: string;
    tag: string;
    kategori: string;
    rating: string;
    imgURL: string;
  };
}

interface PesananProps {
  cartItems: CartItem[];
  wallet: Wallet;
}


export default function Pesanan({ cartItems: initialCartItems , wallet}: PesananProps) {
  console.log(wallet);
  const [cartItems, setCartItems] = useState<CartItem[]>(
    () => initialCartItems
  );
  const handleUpdateJumlah = (itemId: string, newJumlah: number) => {
    // Update di frontend (instan)
    const updatedItems = cartItems.map((item) => {
      if (item._id === itemId) {
        return { ...item, jumlah: newJumlah };
      }
      return item;
    });
    setCartItems(updatedItems);
    // Buat delay API request untuk Efisiensi
    setTimeout(async () => {
      try {
        // API untuk update jumlah cart
        await fetch(`/api/updatecart`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId, jumlah: newJumlah }),
        });
        toast.success("Berhasil update cart di database.");
      } catch (error) {
        console.error("Gagal update cart di database:", error);
        toast.error("Gagal update cart");
      }
    }, 1000); // Delay 1 detik
  };

  const calculateTotalPrice = (): number => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const itemPrice = Number(item.menuItems.harga) * item.jumlah;
      totalPrice += itemPrice;
    });

    return totalPrice;
  };

  const [totalHarga, setTotalHarga] = useState(calculateTotalPrice());
  const deliPrice = 30000;
  const appPrice = 5000;
  let saldo = 100000;

  const className =
    calculateTotalPrice() + deliPrice + appPrice > saldo
      ? "bg-black bg-opacity-25 w-[316px] flex justify-between items-center rounded-lg h-[55px] border-2 border-opacity-25 active:border-[#EC7505] focus:border-[#EC7505] md:mx-auto" // warna saat saldo kurang
      : "w-[316px] flex justify-between items-center rounded-lg h-[55px] border-2 border-opacity-25 active:border-[#EC7505] focus:border-[#EC7505] md:mx-auto"; // warna saat saldo cukup atau pada hover

  const [appliedVoucher, setAppliedVoucher] = useState<string>("");
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  const applyVoucher = (voucherId: string) => {
    // Mencari voucher berdasarkan voucherID
    const selectedVoucher = vouchers.find(
      (voucher) => voucher.id === voucherId
    );

    if (selectedVoucher) {
      const totalPrice = calculateTotalPrice();
      if (totalPrice > selectedVoucher.minPurchase) {
        const discount = (totalPrice * selectedVoucher.amount) / 100;
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
  const handlePay = async () => {
    if (totalHarga + deliPrice + appPrice > saldo) {
      alert("Saldo tidak cukup");
    } else {
      // API untuk update saldo
      let id_wallet = "1"; //hardcode -> id wallet user saat ini

      const response = await fetch("/api/updatewallet?type=sub", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idwallet: id_wallet,
          total: totalHarga + deliPrice + appPrice,
        }),
      });
      if (response.ok) {
        alert("Pembayaran berhasil");
        router.push("pembayaran_berhasil");
      } else {
        console.error(response);
      }
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

          <ToastContainer />

          {/* Apply Promo */}
          <button
            onClick={handleOpenPopup}
            className="mt-[13px] ml-[23px] mr-[19px]
            md:flex md:mx-auto
            "
          >
            {/* Mekanisme Promo */}
            <Image
              src={
                appliedVoucher !== ""
                  ? "/apply_promo_applied.svg"
                  : "/apply_promo.svg"
              }
              alt=""
              width={316}
              height={51}
            />
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
                Rp. {totalHarga + deliPrice + appPrice}
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
          <Link href="/customer/pembayaran_berhasil">
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
          </Link>

          <div className="mb-16" />
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context:any) {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/customer/login",
        permanent: false,
      },
    };
  }

  const db = await connectToDatabase();
  const user = await db.collection("users").findOne({ email: session?.user.email });

  const cartData = await fetch(`http://localhost:3000/api/searchcart?id_user=${user?._id.toString()}`);
  const cartItems = await cartData.json();

  const walletData = await fetch(`http://localhost:3000/api/searchwallet?email=${session.user.email}`);
  const wallet = await walletData.json();

  return {
    props: {
      cartItems,
      wallet,
    },
  };
}
