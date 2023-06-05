import React from "react";

export type Voucher = {
  id: string;
  name: string;
  amount: number;
  minPurchase: number;
  maxDiscount: number;
  isApplied: boolean;
};

type VoucherContextType = {
  vouchers: Voucher[];
  applyVoucher: (voucherId: string) => void;
};

const VoucherContext = React.createContext<VoucherContextType>({
  vouchers: [],
  applyVoucher: () => {},
});

export default VoucherContext;