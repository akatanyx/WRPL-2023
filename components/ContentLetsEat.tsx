import Link from 'next/link'

export default function ContentLetsEat() {
    return (
        <div className="relative sm:w-1/2 sm:mx-auto m-4 p-4 w-226 h-30 rounded-md border-4 border-[#D84A05] flex flex-col">
            <div className="flex justify-between space-y-2">
                <div >
                    Kamada Tanjiro
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 text-[11px]">
                    <div>
                        2 menit lalu
                    </div>
                    <Link href="a">
                        <img src="/detail.svg"></img>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex justify-start rounded-md border-2 border-[#E89005]">
                    <div className="m-2">
                        1
                    </div>
                    <div className="m-2">
                        Fried Onion
                    </div>
                </div>
                <div className="flex justify-start rounded-md border-2 border-[#E89005]">
                    <div className="m-2">
                        1
                    </div>
                    <div className="m-2">
                        Demonic Blood
                    </div>
                </div>
                <div className="flex justify-start rounded-md border-2 border-[#E89005]">
                    <div className="m-2">
                        <img src="/icon_pesanan.svg"></img>
                    </div>
                    <div className="m-2">
                        Pedesin
                    </div>
                </div>
            </div>
        </div>
    )
}