export default function List_Kategori ({ children }: any) {
    return (
        <>
            <button 
            className="border-2 border-[#EC7505] rounded-xl flex justify-center px-3">
                <h1
                className="font-semibold font-poppins text-[12px] text-[#EC7505]"
                >
                    {children}
                </h1>
            </button>
        </>
    )
}