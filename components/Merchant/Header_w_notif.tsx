import Link from 'next/link'
export default function Header_w_notif({ children }: any){
    return (
        <>
        <div className="w-full bg-white flex h-[49px] items-center shadow-lg relative">
            <h1 className="font-poppins font-bold text-[17px] px-[15px]">{children}</h1>
            <Link href='#'>
                <img className="w-[20px] h-[20px] absolute right-7 top-3" src="/uiw_notification.svg"></img>
            </Link>
        </div>
        {/* <div className="bg-white w-full block fixed z-10 text-center">
            <div className="bg-white shadow-lg pb-2">
                <div className="flex justify-between content-center">
                    <div className="font-bold text-lg ml-2 p-2">
                        {children}
                    </div>
                    <div className="p-2 mr-0 ">
                        <img className="w-[20px] h-[20px] rounded-lg" src="/uiw_notification.svg"></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-6"></div> */}
        </>
    )
}