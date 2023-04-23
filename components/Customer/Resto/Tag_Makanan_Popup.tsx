export default function Tag_Makanan ({ children }: any) {
    return (
        <>
            <div 
            className="border border-[#EC7505] rounded-xl flex justify-center px-3 
             text-white h-[21px] items-center top-3 w-[66px]">
                <h1 className=" text-[#EC7505] text-[13px] font-semibold font-poppins"
                >
                    {children}
                </h1>
            </div>

        </>
    )
}