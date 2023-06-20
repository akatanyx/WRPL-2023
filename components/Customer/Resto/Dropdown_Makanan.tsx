import { useState } from "react";
import Card_Resto from "./Card_Resto";
import { Menu } from "@/pages/interface";
interface DropdownMakananProps {
  menus: Menu[];
  userId: string;
  children: string;
}

export default function Dropdown_Makanan({
  menus,
  userId,
  children,
}: DropdownMakananProps) {
  const [showMe, setShowMe] = useState(false);
  function toogle() {
    setShowMe(!showMe);
  }

  return (
    <>
      <h1 className="font-poppins font-bold text-xl">
        {children}
        {/*The bottom code should toggle on and off when the button is pressed*/}
        <button
          onClick={toogle}
          className={` duration-100 ${
            showMe
              ? "rotate-90 translate-y-1 translate-x-2"
              : "translate-x-1 md:translate-x-2"
          }`}
        >
          <img
            src="/icon_arrow_resto_popup.svg"
            alt=""
            className="translate-y-1"
          />
        </button>
        <div
          style={{
            display: showMe ? "block" : "none",
          }}
        >
          {/* Card List Menu */}

          <div className="flex flex-col gap-y-[17px] mt-2">
            {menus?.map((menu: any) => (
              <Card_Resto
                key={menu._id}
                menu={menu}
                userId={userId}
              />
            ))}

            {/* <Card_Resto />
                        <Card_Resto />
                        <Card_Resto /> */}
          </div>
        </div>
      </h1>
    </>
  );
}
