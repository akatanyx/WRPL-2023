import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow-lg">
        <div className=" flex justify-around">
          <Link
            href="/"
            className="p-2 flex flex-col items-center justify-center"
          >
            <div>
              <img
                className="h-[37.5px] w-[37.5px] rounded-lg"
                src="/logo.svg"
              ></img>
            </div>
            <div>
              <p className="text-[9px]">Let's Eat</p>
            </div>
          </Link>
          <Link
            href="transaksi_sel"
            className="p-2 flex flex-col items-center justify-center"
          >
            <div>
              <div className="h-[37.5px] w-[37.5px] rounded-full bg-gray-500 text-white  hover:bg-[#E89005]" />
            </div>
            <div>
              <p className="text-[9px]">Transaksi</p>
            </div>
          </Link>
          <Link
            href="/tambahmenu"
            className="p-2 flex flex-col items-center justify-center"
          >
            <div>
              <div className="h-[37.5px] w-[37.5px] rounded-full bg-gray-500 text-white  hover:bg-[#E89005]" />
            </div>
            <div>
              <p className="text-[9px]">Menu</p>
            </div>
          </Link>
          <Link
            href="profilmerchant"
            className="p-2 flex flex-col items-center justify-center"
          >
            <div>
              <div className="h-[37.5px] w-[37.5px] rounded-full bg-gray-500 text-white  hover:bg-[#E89005]" />
            </div>
            <div>
              <p className="text-[9px]">Profil</p>
            </div>
          </Link>
          <div
            onClick={() => signOut()}
            className="p-2 flex flex-col items-center justify-center"
          >
            <div>
              <div className="h-[37.5px] w-[37.5px] rounded-full bg-gray-500 text-white  hover:bg-[#E89005]" />
            </div>
            <div>
              <p className="text-[9px]">Sign Out</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7"></div>
    </div>
  );
}
