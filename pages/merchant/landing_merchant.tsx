import Header from "@/components/Merchant/Header_w_notif";
import Card_Pesanan from "@/components/Merchant/Hero/Card_pesanan";
import M_Navbar from "@/components/Merchant/M_Navbar";

export default function LandingMerchantPage() {
  return (
    <div>
      {/* Header1 */}
      <div>
        <Header>Anteiku</Header>
      </div>
      {/* Option */}
      <div className="flex mt-4 gap-x-2 ml-[6px] mb-[15px] justify-center">
        <div className="bg-[#EC7505] w-[169px] h-[40px] flex justify-center items-center rounded-xl">
          <h1 className="font-poppins text-white text-lg font-semibold">
            Pesanan Baru
          </h1>
        </div>

        <div className="w-[169px] h-[40px] flex justify-center items-center rounded-xl">
          <h1 className="font-poppins text-[#6A6A6A] text-lg font-semibold">
            Dalam Proses
          </h1>
        </div>
      </div>

      {/* Pesanan */}
      <div className="flex-col items-center gap-y-[10px] flex">
        <Card_Pesanan />
        <Card_Pesanan />
        <Card_Pesanan />
        <Card_Pesanan />
      </div>

      <M_Navbar />
    </div>
  );
}