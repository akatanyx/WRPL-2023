import { useCartItem } from "@/hooks/useCartItem";
import { CartItem } from "@/pages/interface";
import Link from "next/link";
import { useState } from "react";

export default function ItemCart() {
  const cart = useCartItem();
  const HitungQtyCart = (cart: CartItem[] | null) =>
    cart?.reduce((qty, item) => qty + item.jumlah, 0);
  const HitungHargaCart = (cart: CartItem[] | null) =>
    cart?.reduce(
      (total, item) => total + item.jumlah * item.menuItems.harga_menu,
      0
    );
  return (
    <>
      <Link href="/customer/pesanan">
        <div
          className="fixed bottom-[70px] z-10 w-[335px] h-[54px] mx-[13px]
                    bg-[#EC7505] rounded-xl 
                    flex items-center justify-between px-[32px]
                    md:left-1/2 md:-translate-x-1/2
                    "
        >
          {/* Jumlah Item */}
          <h1 className="font-poppins font-semibold text-[17px] text-white">
            {HitungQtyCart(cart)} item
          </h1>

          <div className="flex items-center">
            {/* Jumlah Harga */}
            <h1 className="font-poppins font-semibold mr-1   text-[17px] text-white">
              {HitungHargaCart(cart)?.toLocaleString("de-DE")}
            </h1>
            <img src="/icon_cart.svg" className="" />
          </div>
        </div>
      </Link>
    </>
  );
}
