export default function Tag_Makanan ({ children }: any) {
    return (
        <>
            <div 
            className="w-[34px] h-[11px] bg-[#EC7505] rounded-xl flex 
                justify-center items-baseline top-3">
                <h1 className=" text-white text-[7px] font-semibold font-poppins"
                >
                    {children}
                </h1>
            </div>

        </>
    )
}