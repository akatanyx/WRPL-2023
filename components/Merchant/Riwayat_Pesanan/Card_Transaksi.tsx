export default function Card_Transaksi () {
    return (
        <div className=" w-[315px] h-[80px]">
            <div className="flex-col flex shadow-lg relative">
                <div className="py-[15px] pl-[13px] rounded-md bg-white ">
                    <h1 className="text-base font-semibold">Kamado Tanjiro</h1>
                </div>
                <div className="bg-[#FF7C00] bg-opacity-40 py-3 pl-5 rounded-md">
                    <p className=" font-semibold text-xl">Rp 15.000</p>
                </div>

                <div className="absolute right-[18px] my-[18px]">
                <div className="bg-[#EC7505] flex-col drop-shadow-lg w-16 h-16 rounded-full flex justify-center gap-y-[6px] items-center">
                    <div className="border-2 rounded-lg w-7" />
                    <div className="border-2 rounded-lg w-7" />
                    <div className="border-2 rounded-lg w-7" />
                </div>
                </div>
            </div>
        </div>
    )
}