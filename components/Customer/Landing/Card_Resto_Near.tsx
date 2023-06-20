import Link from "next/link";
import { CardRestoNearProps } from "@/pages/customer/hero";

const Card_Resto_Near: React.FC<CardRestoNearProps> = ({ item }) => {
  return (
    <>
      <Link href="/customer/resto">
        <div className="flex-col shadow-xl rounded-lg w-[150px] h-[212px]">
          <img src={item.gambarResto} alt="" className="w-[150px] h-[150px]" />

          <h1
            className="font-poppins font-semibold text-[14px] text-center mt-1
                        "
          >
            {item.namaResto}
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

export default Card_Resto_Near;
