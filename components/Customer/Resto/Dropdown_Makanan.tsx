import { useState } from "react";
import Card_Resto from "./Card_Resto";

export default function Dropdown_Makanan ({ children }: any) {
    const [showMe, setShowMe] = useState(false);
    function toogle(){
      setShowMe(!showMe);
    }
    
    return (
        <>
            <h1 className='font-poppins font-bold text-xl'>{children}
                {/*The bottom code should toggle on and off when the button is pressed*/}
                <button onClick={toogle}
                className={` duration-100 ${
                     showMe ? "rotate-90 translate-y-1 translate-x-2" : "translate-x-1 md:translate-x-2"
                  }`}
                >
                    <img src="/icon_arrow_resto_popup.svg" alt="" className='translate-y-1'/>
                </button>
                <div style={{
                display: showMe?"block":"none"
                }}>
                {/* Card List Menu */}
                
                    <div className='flex flex-col gap-y-[17px] mt-2'>
                        <Card_Resto />
                        <Card_Resto />
                        <Card_Resto />
                    </div>
                </div>
                </h1>
        </>
    )
}