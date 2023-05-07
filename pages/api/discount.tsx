import React from "react";

type Voucher = {
  id: string;
  name: string;
  amount: number;
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