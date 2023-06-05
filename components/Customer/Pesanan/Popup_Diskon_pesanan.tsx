import Card_Diskon from "@/components/Customer/Pesanan/Card_Diskon";
import { useState } from "react";
import { Voucher } from "@/pages/api/discount";

type PopupDiskonProps = {
  vouchers: Voucher[];
  appliedVoucher: string;
  applyVoucher: (voucherId: string) => void;
  onClose: () => void;
};

export default function PopupDiskon({vouchers, appliedVoucher, applyVoucher, onClose }: PopupDiskonProps) {
  const handleApplyVoucher = (voucherId: string) => {
    applyVoucher(voucherId);
  };

  const handleBack = () => {
    onClose(); // Call the onClose function when the back button is clicked
  };
  
  return (
    <div className="font-poppins absolute bg-white z-10">
      {/* Header */}
      <div>
        <div className="flex justify-between items-center w-screen mt-[28px] ml-[22px]">
          <div className="flex items-center">
            <button
            onClick={handleBack}>
              <img src="/icon_c_promo_back.svg" />
            </button>

            <img src="/logo_promo.svg" className="translate-x-[18px]" />
            <h1 className="font-bold font-poppins text-[21px] translate-x-[28px]">
              Promo
            </h1>
          </div>
        </div>
      </div>

      <div className="mb-7"></div>

      {/* Diskon */}
      <div className="flex flex-col gap-y-4">
        {vouchers.map((voucher) => (
          <Card_Diskon
            key={voucher.id}
            voucher={voucher}
            isApplied={voucher.id === appliedVoucher}
            applyVoucher={handleApplyVoucher}
          />
        ))}
      </div>

      <div className="mb-7"></div>
    </div>
  );
}
