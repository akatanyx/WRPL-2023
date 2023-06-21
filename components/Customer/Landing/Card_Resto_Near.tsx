import Link from "next/link";
import { CardRestoNear } from "@/pages/interface";

interface CardRestoNearProps {
  item: CardRestoNear;
}

export default function Card_Resto_Near({ item }: CardRestoNearProps) {
  // const href = `/customer/resto/${item.id}`; kalo mau pake dynamic route, karena ini static route, jadi gak perlu
  const href = "/customer/resto" 
  return (
    <>
      <Link href={href}>
        <div className="flex-col shadow-xl rounded-lg w-[150px] h-[212px]">
          <img src={item.gambarResto} alt="" className="w-[150px] h-[150px]" />

          <h1
            className="font-poppins font-semibold text-[14px] text-center mt-1
                        "
          >
            id={item.id} nama={item.namaResto}
          </h1>

          <div className="flex px-5 justify-evenly items-center -translate-x-1">
            <img
              src="/icon_landing_star.svg"
              alt=""
              className="translate-x-1 w-[24px] h-[24px]"
            />
            <p className="font-bold text-[14px] font-poppins ">
              {item.ratingResto}
            </p>
            <img
              src="/icon_location.svg"
              alt=""
              className="translate-x-1 w-[19px] h-[19px]"
            />
            <p className="font-bold text-[14px] font-poppins">
              {item.jarakResto}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
