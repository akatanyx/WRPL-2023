export default function Tag_Makanan ({ children }: any) {
    return (
        <>
            <div 
            className=" h-[16px] bg-[#EC7505] rounded-xl flex 
                justify-center items-baseline top-3">
                <h1 className=" px-[13px] text-white text-[11px] font-semibold font-poppins"
                >
                    {children}
                </h1>
            </div>

        </>
    )
}