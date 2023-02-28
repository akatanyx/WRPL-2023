export default function Header(){
    return (
        <div>
        <div className="bg-white h-[100px] block fixed inset-x-0 top-0 z-10 text-center">
            <div className="bg-white shadow-lg pb-2">
                <div className="flex justify-between content-center">
                    <div className="font-bold text-[17px] ml-2 p-2">
                        Let's Eat Merchant
                    </div>
                    <div className="p-2 mr-0 ">
                        <img className="w-['20px'] h-['20px'] rounded-lg" src="/uiw_notification.svg"></img>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-6"></div>
        </div>
    )
}