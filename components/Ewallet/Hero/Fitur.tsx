import Link from "next/link";

export default function Fitur_ewallet () {
    return (
        <div className="text-[10px] grid grid-cols-4 gap-x-5 gap-y-[13px] mt-5 w-[292px] mx-auto">
            <Link href="/customer/hero">
            <div className="flex-col text-center"> 
            <img src="/e_hero_backtoletseat.svg" alt="" />
            <h1 className="mt-[6px]">Top Up</h1>
            </div>     
            </Link>
            
            <Link href="/ewallet/topup">
            <div className="flex-col text-center">
                <img src="/e_hero_fitur_topup.svg" alt="" />
                <h1 className="mt-[6px]">Top Up</h1>
            </div>
            </Link>

            <Link href="/ewallet/send">
            <div className="flex-col text-center">
                <img src="/e_hero_fitur_send.svg" alt="" />
                <h1 className="mt-[6px]">Send</h1>
            </div>
            </Link>

            <Link href="#">
            <div className="flex-col text-center">
                <img src="/e_hero_fitur_points.svg" alt="" />
                <h1 className="mt-[6px]">Points</h1>
            </div>
            </Link>

            <Link href="#">
            <div className="flex-col text-center">
                <img src="/e_hero_fitur_letsgift.svg" alt="" />
                <h1 className="mt-[6px]">Let&apos;s Gift</h1>
            </div>
            </Link>

            <Link href="/ewallet/security">
            <div className="flex-col text-center">
                <img src="/e_hero_fitur_security.svg" alt="" />
                <h1 className="mt-[6px]">Security</h1>
            </div>
            </Link>

            <Link href="#">
            <div className="flex-col text-center">
                <img src="/e_hero_fitur_promo.svg" alt="" />
                <h1 className="mt-[6px]">Promo</h1>
            </div>
            </Link>

            <Link href="#">
            <div className="flex-col text-center">
                <img src="/e_hero_fitur_merchant.svg" alt="" />
                <h1 className="mt-[6px]">Merchant</h1>
            </div>
            </Link>
        </div>
    )
}