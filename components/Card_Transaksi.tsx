export default function Card_Transaksi () {
    return (
        <div className="shadow-lg flex flex-col m-4 bg-white rounded-lg relative sm:w-1/2 sm:mx-auto">
            <div>
                <div className="p-3 rounded-lg">
                    <h1 className="text-base font-bold font-inter">Kamado Tanjiro</h1>
                </div>
                <div className="bg-[#FF7C00] bg-opacity-40 p-3 rounded-lg">
                    <p className="font-inter font-bold text-xl">Rp 15.000</p>
                </div>
            </div>
            
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
                <div className="bg-[#EC7505] flex-col shadow-lg w-16 h-16 rounded-full flex justify-center gap-y-1 items-center">
                    <p className="border-2 rounded-lg w-7"></p>
                    <p className="border-2 rounded-lg w-7"></p>
                    <p className="border-2 rounded-lg w-7"></p>
                </div>
            </div>
        </div>
    )
}