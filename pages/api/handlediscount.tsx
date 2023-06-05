import VoucherContext, {Voucher} from "./discount";
import { useState } from "react";

function MyApp({ Component, pageProps }:any) {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);

  const applyVoucher = (voucherId: string) => {
    setVouchers((prevVouchers) =>
      prevVouchers.map((voucher) =>
        voucher.id === voucherId ? { ...voucher, isApplied: true } : voucher
      )
    );
  };

  return (
    <VoucherContext.Provider value={{ vouchers, applyVoucher }}>
      <Component {...pageProps} />
    </VoucherContext.Provider>
  );
}

export default MyApp;