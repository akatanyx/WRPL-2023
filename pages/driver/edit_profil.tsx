import Header_w_notif from "@/components/Merchant/Header_w_notif";
import Navbar_driver from "@/components/Driver/Navbar_driver";
import { getSession } from "next-auth/react";
import { connectToDatabase } from "../mongodb";
import { useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Image from "next/image";

type Driver = {
  _id: string;
  nomor_stnk: string;
  nomor_sim: string;
  nomor_plat: string;
  jenis_motor: string;
  imgURL_driver: string;
};

export default function EditProfilePage({ driver, session }: any) {
  const name = session.user.name;

  const imgURL = driver.imgURL_driver || "/m_profil_pp.svg";
  const nomorStnk = driver.nomor_stnk || "";
  const nomorSim = driver.nomor_sim || "";
  const nomorPlat = driver.nomor_plat || "";
  const jenisMotor = driver.jenis_motor || "";

  const [imageSelected, setImageSelected] = useState<File | undefined>();
  const [updatedNomorStnk, setUpdatedNomorStnk] = useState(nomorStnk);
  const [updatedNomorSim, setUpdatedNomorSim] = useState(nomorSim);
  const [updatedNomorPlat, setUpdatedNomorPlat] = useState(nomorPlat);
  const [updatedJenisMotor, setUpdatedJenisMotor] = useState(jenisMotor);

  const router = useRouter();

  const HandleUpdateProfile = async (updatedImgURL: string) => {
    const response = await fetch("/api/updateprofil?type=driver", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: driver._id,
        imgURL: updatedImgURL,
        nomor_stnk: updatedNomorStnk,
        nomor_sim: updatedNomorSim,
        nomor_plat: updatedNomorPlat,
        jenis_motor: updatedJenisMotor,
      }),
    });
    if (response.ok) {
      router.push("/driver/profil");
    } else {
      console.error(response.statusText);
    }
  };

  const HandleSubmit = async (event: any) => {
    event.preventDefault();

    if (imageSelected) {
      const formData = new FormData();
      // Cloudinary parameters
      formData.append("file", imageSelected);
      formData.append("upload_preset", "prema_upload123");
      formData.append("folder", "Letseat/Driver");

      try {
        const response = await Axios.post(
          `https://api.cloudinary.com/v1_1/prema-cloud/image/upload`,
          formData
        );

        let newImgURL: string = response.data.secure_url;
        await HandleUpdateProfile(newImgURL);
      } catch (error) {
        console.error(error);
      }
    } else {
      await HandleUpdateProfile(imgURL);
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="font-poppins bg-[#E89005] max-h-screen">
        <Header_w_notif>{name}</Header_w_notif>

        <div className="mt-[254px] rounded-t-lg bg-white">
          {/* Content */}
          <div
            className="w-[294px] h-[635px] -translate-y-[210px] bg-white mx-auto 
                                rounded-[23px] shadow-lg pt-[17px] relative"
          >
            {/* Logout Button */}
            <button className="absolute right-0 translate-x-6 -translate-y-6">
              <img src="/m_profil_logout.svg" alt="" />
            </button>

            <div className="flex-column h-[130px]">
              {/* Menampilkan preview gambar sebelum di upload */}
              <label htmlFor="file-input">
                <Image
                  src={
                    imageSelected ? URL.createObjectURL(imageSelected) : imgURL
                  }
                  priority
                  alt="Profile Pic"
                  width={130}
                  height={130}
                  className="mx-auto h-[130px] rounded-full border border-gray-100 shadow-sm"
                />
              </label>
              {/* Mengatur input file tombol asli hidden */}
              <input
                id="file-input"
                type="file"
                accept=".png, .jpg, .jpeg"
                className="invisible"
                onChange={(event) => {
                  if (event.target.files) {
                    setImageSelected(event.target.files[0]);
                  }
                }}
              />
            </div>

            {/* Nama dan Nomor Plat */}
            <div className="flex flex-col justify-center items-center mt-[17px]">
              {/* Nama Driver */}
              <h1 className="font-semibold text-[21px]">{name}</h1>

              {/* Nomor Plat Driver */}
              <input
                className="font-medium text-center text-[14px]"
                placeholder={nomorPlat}
                type="text"
                id="nomorPlat"
                value={updatedNomorPlat}
                minLength={4}
                onChange={(e) => setUpdatedNomorPlat(e.target.value)}
              />
            </div>

            {/* Border Pembatas */}
            <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[9px] mb-[17px]"></div>

            <div className="flex flex-col gap-y-2 w-[241px] mx-auto ">
              {/* Nomor STNK */}
              <div>
                <div>Nomor STNK:</div>
                <input
                  className="border border-[#9A9A9A] rounded-lg w-60  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                  placeholder={nomorStnk}
                  max={9999999999999999}
                  type="number"
                  id="nomorStnk"
                  value={updatedNomorStnk}
                  onChange={(e) => setUpdatedNomorStnk(e.target.value)}
                />
              </div>
              {/* Nomor SIM */}
              <div>
                <div>Nomor SIM:</div>
                <input
                  className="border border-[#9A9A9A] rounded-lg w-60  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                  placeholder={nomorSim}
                  max={9999999999999999}
                  type="number"
                  id="nomorSim"
                  value={updatedNomorSim}
                  onChange={(e) => setUpdatedNomorSim(e.target.value)}
                />
              </div>

              {/* Jenis Motor */}
              <div>
                <div>Jenis Motor</div>
                <input
                  className="border border-[#9A9A9A] rounded-lg w-60  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                  placeholder={jenisMotor}
                  max={9999999999999999}
                  type="text"
                  id="jenisMotor"
                  value={updatedJenisMotor}
                  onChange={(e) => setUpdatedJenisMotor(e.target.value)}
                />
              </div>
            </div>

            {/* Button Update Profil */}
            <button
              className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
                            flex justify-center items-center mt-[70px]
                        "
            >
              <h1 className="text-white text-lg font-semibold">
                Update Profil
              </h1>
            </button>
          </div>
        </div>

        {/* Navbar */}
        <Navbar_driver />
      </div>
    </form>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session?.user) {
    // User is not authenticated, redirect to login page or show an error
    return {
      redirect: {
        destination: "/customer/login",
        permanent: false,
      },
    };
  } else {
    // User is authenticated, check their roles in the database
    const db = await connectToDatabase();
    const collection = db.collection("users");
    const user = await collection.findOne({ email: session.user.email });

    if (!user || !user.roles.includes("driver")) {
      // User doesn't have the driver role, redirect to signup driver page
      return {
        redirect: {
          destination: "/signup_driver",
          permanent: false,
        },
      };
    }

    // User has the driver role get the driver data
    const driverCollection = db.collection("drivers");
    const driver = await driverCollection.findOne({
      id_user: user._id.toString(),
    });
    return {
      props: {
        driver: JSON.parse(JSON.stringify(driver)),
        session: session,
      },
    };
  }
}
