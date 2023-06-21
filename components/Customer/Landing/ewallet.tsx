import Link from "next/link";
import { useWallet } from "@/hooks/useWallet";

export default function EwalletComponent () {
  const ewallet = useWallet();
  return (
    <div>
      <div
        className="bg-[#118EEA] h-[98px] w-[314px] mt-4  rounded-lg font-poppins
                      flex text-[12px] mx-auto"
      >
        {/* Saldo */}
        <Link href="/ewallet/hero">
          <div className="bg-white w-[103px] h-[67px] rounded-lg ml-[18px] mt-[15px] flex-col align-center">
            <img src="/e_hero_logoletscash.svg" className="mx-auto pt-4"/>
            <h1 className="font-medium text-center">
              Rp. <span>{ewallet?.saldo?.toLocaleString("de-DE")}</span>
            </h1>
          </div>
        </Link>

        {/* TopUp */}
        <Link href="/ewallet/topup">
          <div className="mt-[23px] ml-2">
            <img src="/b_hero_ewallet_topup.svg" alt="" />
            <h1 className="text-white text-center">Top Up</h1>
          </div>
        </Link>

        {/* Send */}
        <Link href="/ewallet/send">
          <div className="mt-[23px] ml-2">
            <img src="/b_hero_ewallet_send.svg" alt="" />
            <h1 className="text-white text-center">Kirim</h1>
          </div>
        </Link>

        {/* Telusuri */}
        <Link href="/ewallet/hero">
          <div className="mt-[23px] ml-2">
            <img src="/b_hero_ewallet_telusuri.svg" alt="" />
            <h1 className="text-white text-center">Telusuri</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}