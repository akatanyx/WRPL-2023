import Link from "next/link";
import Image from "next/image";
interface CardMenuProps {
  nama: string;
  desk: string;
  harga: number;
  imgURL: string;
}

export default function Card_Kategori({
  nama,
  desk,
  harga,
  imgURL,
}: CardMenuProps) {
  return (
    <>
      <Link href="#">
        <div className="flex bg-[#FFFFFF] rounded-lg w-[320px] h-[120px] shadow-lg border relative rounded-xl">
          <Image
            src={imgURL}
            alt="makanan favorit"
            className=" -translate-x-1.5 rounded-xl"
            width={130}
            height={120}
          />

          <div className="flex flex-col mt-2">
            <div className="flex justify-between w-[151px]">
              {/* Tag Makanan */}
              <div
                className="h-[16px] flex justify-center w-fit
                                            border-[#EC7505] bg-[#EC7505] px-2 rounded-xl"
              >
                <h1 className="text-white font-poppins font-semibold text-[10px]">
                  Ayam
                </h1>
              </div>

              <div className="flex items-center w-[18px] h-[17px]">
                <Image src="/icon_star.svg" alt="" width={18} height={17} />
                <h1
                  className="font-poppins font-semibold text-[13px]
                                    translate-x-1"
                >
                  4.7
                </h1>
              </div>
            </div>

            <h1 className="font-medium font-poppins text-[20px]">{nama}</h1>
            <h2 className="font-medium font-poppins text-sm text-[#9B8F8F]">
              {desk}
            </h2>
            <p className="font-semibold font-poppins text-[13px]">Rp {harga}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
