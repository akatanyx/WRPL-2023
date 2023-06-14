import { Voucher } from "../../api/discount";

const Vouchers: Voucher[] = [
    {
      id: "voucher1",
      name: "Voucher 1",
      amount: 10,
      minPurchase: 50000,
      maxDiscount: 20000,
      isApplied: false,
    },
    {
      id: "voucher2",
      name: "Voucher 2",
      amount: 5,
      minPurchase: 30000,
      maxDiscount: 10000,
      isApplied: false,
    },
    {
      id: "voucher3",
      name: "Voucher 3",
      amount: 15,
      minPurchase: 10000,
      maxDiscount: 3000,
      isApplied: false,
    },
    // Add more voucher objects as needed
  ];
  
  export default Vouchers;
  