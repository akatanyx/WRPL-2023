export default function List_Menu ({children}:any) {
    return (
        <div className="flex w-[310px]">
            {/* Jumlah Makanan */}
            <h1 className="w-[27px] font-semibold text-[16px]">
                1x
            </h1>

            {/* Nama Makanan */}
            <h1 className="w-[173px] text-[16px]">
                {children}
            </h1>

            {/* Total Harga Makanan */}
            <p className="w-[70px] pl-[30px] text-[14px] font-medium text-[#818181]">
                Rp.20.000
            </p>
        </div>
    )
}