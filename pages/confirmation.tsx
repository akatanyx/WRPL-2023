import Link from "next/link"
import Feedback from "@/components/Feedback"
export default function Confirmation() {

  return (
    <div>
      <div
        className="mt-20 flex flex-col items-center justify-center 0 font-bold font-inter 
        text-[27px] text-[#E89005]"
      >
        <h1>Form Berhasil Dikirim</h1>
      </div>
      <div className="flex flex-col mt-5 items-center font-inter">
        <Link
        href="/landing_driver"
        >
          <button onClick={Feedback} className="bg-[#EC7505] text-white text-[20px]
           px-4 py-2 rounded font-bold">
            Masuk
          </button>
        </Link>
      </div>
    </div>
  )
}
