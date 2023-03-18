import Link from 'next/link'
import { useState } from 'react';

import Popup_keluar from '@/components/Merchant/Add_Menu/Popup_keluar';

export default function Header_EditMenu() {
    const [showMyModal, setShowMyModal] = useState(false);

    const closeModal = () => setShowMyModal(false);
    
    return (
    <>
        {showMyModal && <Popup_keluar closeModal={closeModal} />}
        <div className="flex bg-[#EC7505] items-center px-[19px] w-full h-[59px] shadow-lg rounded-b-lg">
            <button onClick = {() => setShowMyModal(true)}>
                <img src="/icon_head_arrow_tambahmenu.svg" alt="" />
            </button>
                
            <h1 className="ml-3 text-white font-poppins font-bold text-[23px]">Edit Menu</h1>
        </div>
    </>
    )
}