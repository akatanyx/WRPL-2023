export default function Header(){
    return (
        <header className="sticky top-0 p-2 text-center">
            <div className="flex justify-between content-center">
                <div className="font-bold text-[17px] ml-2 p-2">
                    Let's Eat Merchant
                </div>
                <div className="p-2 mr-0 ">
                    <img className="w-['20px'] h-['20px'] rounded-lg" src="/uiw_notification.svg"></img>
                </div>
            </div>
        </header>
    )
}