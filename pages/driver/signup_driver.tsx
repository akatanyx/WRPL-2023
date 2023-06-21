import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";

export default function Signup_Driver() {

  const user = useUser();
  console.log(user)

  const [nomorSTNK, setNomorSTNK] = useState("");
  const [nomorSIM, setNomorSIM] = useState("");
  const [nomorPlat, setNomorPlat] = useState("");
  const [jenisMotor, setJenisMotor] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const postData = async (url: string, data: any) => {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    };

    const putData = async (url: string, data: any) => {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    };

    const response = await postData("/api/signup?type=driver", {
      id_user: user?._id,
      nomor_stnk: nomorSTNK,
      nomor_sim: nomorSIM,
      nomor_plat: nomorPlat,
      jenis_motor: jenisMotor,
    });

    const responseUpdateRoles = await putData("/api/updateroles", {
      id_user: user?._id,
      roles: "driver",
    });

    if (response.ok && responseUpdateRoles.ok) {
      router.push("/driver/landing_driver");
    } else {
      console.error(response.statusText);
    }
  };

  return (
      <div className="font-poppins">
        {/* Header */}
        <img
          src="/d_login_image.svg"
          className="mt-[59px] mx-auto -translate-x-[9px]"
        />
        <div
          className="font-bold text-[24px] ml-[39px] mt-[25px]
                            w-[290px]"
        >
          Pendaftaran Driver
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 mt-4 items-center">
          {/* Nomor STNK */}
          <div>
            <div className="text-bold">Nomor STNK</div>
            <input
              type="number"
              className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins 
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="12345678"
              maxLength={99999999}
              required
              onChange={(e) => setNomorSTNK(e.target.value)}
            />
          </div>

          {/* Nomor SIM */}
          <div>
            <div className="text-bold">Nomor SIM</div>
            <input
              type="number"
              className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="123456789012"
              maxLength={999999999999}
              required
              onChange={(e) => setNomorSIM(e.target.value)}
            />
          </div>

          {/* Nomor Plat */}
          <div>
            <div className="text-bold">Nomor plat</div>
            <input
              type="text"
              className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="AB 1234 CD"
              minLength={4}
              required
              onChange={(e) => setNomorPlat(e.target.value)}
            />
          </div>

          {/* Jenis Motor */}
          <div>
            <div className="text-bold">Jenis motor</div>
            <input
              type="text"
              className=" border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins
                                    text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="Honda Beat"
              required
              onChange={(e) => setJenisMotor(e.target.value)}
            />
          </div>
        </form>

        {/* Register */}
        <Link href="/driver/landing_driver">
        <button
          type="submit"
          className="w-[290px] h-[53px] mt-[71px] mb-[50px] rounded-lg mx-auto
                                    flex justify-center items-center bg-[#EC7505]"
        >
          <h1 className="font-semibold text-[19px] text-white">Register</h1>
        </button>
        </Link>
      </div>
  );
}