import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
            <div className=" flex justify-around">
                <Link href="letseat" className="p-2 flex flex-col items-center justify-center">
                    <div>
                    <img className="h-[37.5px] w-[37.5px] rounded-lg" src="/logo.svg"></img>
                    </div>
                    <div>
                        <p className="text-[9px]">Let's Eat</p>
                    </div>
                </Link>
                <Link href="transaksi_sel"className="p-2 flex flex-col items-center justify-center">
                    <div>
                    <img className="h-[37.5px] w-[37.5px] rounded-lg" src="/logo.svg"></img>
                    </div>
                    <div>
                        <p className="text-[9px]">Transakri</p>
                    </div>                    
                </Link>
                <Link href="a" className="p-2 flex flex-col items-center justify-center">
                    <div>
                    <img className="h-[37.5px] w-[37.5px] rounded-lg" src="/logo.svg"></img>
                    </div>
                    <div>
                        <p className="text-[9px]">Let's Eat</p>
                    </div>
                </Link>
                <Link href="a" className="p-2 flex flex-col items-center justify-center">
                    <div>
                    <img className="h-[37.5px] w-[37.5px] rounded-lg" src="/logo.svg"></img>
                    </div>
                    <div>
                        <p className="text-[9px]">Let's Eat</p>
                    </div>
                </Link>
                <Link href="a" className="p-2 flex flex-col items-center justify-center">
                    <div>
                    <img className="h-[37.5px] w-[37.5px] rounded-lg" src="/logo.svg"></img>
                    </div>
                    <div>
                        <p className="text-[9px]">Let's Eat</p>
                    </div>
                </Link>                                
            </div>
        </div>
    )
}