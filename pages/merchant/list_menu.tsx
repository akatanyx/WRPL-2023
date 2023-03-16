import Card_Menu from "../../components/Merchant/List Menu/Card_Menu" 
import M_Navbar from "../../components/Merchant/M_Navbar"
import Header_w_notif from "../../components/Merchant/Header_w_notif"
import Tambah_Menu from "@/components/Merchant/List Menu/Tambah_Menu"

export default function list_menu () {
    return (
        <>
            <div>
                <Header_w_notif>
                    List Menu
                </Header_w_notif>
            </div>

            <div className="mx-5 mt-4">
                <h1 className=" font-poppins font-semibold text-[23px]">
                    Makanan
                </h1>

                <div className="flex flex-col gap-y-3">
                <Card_Menu />
                <Card_Menu />
                <Card_Menu />
                <Card_Menu />
                <Card_Menu />
                <Card_Menu />
                <Card_Menu />
                <Card_Menu />
                </div>
            </div>

            <div>
                <M_Navbar />
            </div>

            <div>
                <Tambah_Menu />
            </div>
        </>
    )
}