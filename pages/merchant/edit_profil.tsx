import Header_w_notif from "@/components/Merchant/Header_w_notif";
import M_Navbar from "@/components/Merchant/M_Navbar";
import { getSession } from "next-auth/react";

import Link from "next/link";
import { connectToDatabase } from "../mongodb";
import { useState } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Image from "next/image";

type Merchant = {
  _id: string;
  nama_resto: string;
  alamat_resto: string;
  deskripsi_resto: string;
  imgURL_resto: string;
  nomor_ktp_merchant: string;
  email_merchant: string;
  jam_buka: string;
  jam_tutup: string;
};

export default function EditProfilePage({ merchant }: { merchant: Merchant }) {
  const namaToko = merchant.nama_resto;
  const alamatToko = merchant.alamat_resto;
  const deskripsiToko = merchant.deskripsi_resto;
  const imgURLToko = merchant.imgURL_resto || "/m_profil_pp.svg";
  const nomorKTP = merchant.nomor_ktp_merchant || "";
  const email = merchant.email_merchant || "";
  const jam_buka = merchant.jam_buka || "";
  const jam_tutup = merchant.jam_tutup || "";

  const [updatedNamaToko, setUpdatedNamaToko] = useState(namaToko);
  const [updatedAlamatToko, setUpdatedAlamatToko] = useState(alamatToko);
  const [updatedDeskripsiToko, setUpdatedDeskripsiToko] =
    useState(deskripsiToko);
  const [imageSelected, setImageSelected] = useState<File | null>(null);
  const [updatedNomorKTP, setUpdatedNomorKTP] = useState(nomorKTP);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedJamBuka, setUpdatedJamBuka] = useState(jam_buka);
  const [updatedJamTutup, setUpdatedJamTutup] = useState(jam_tutup);

  const router = useRouter();

  const HandleUpdateProfile = async (updatedImgURL: string) => {
    const response = await fetch("/api/updateprofil?type=merchant", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: merchant._id,
        imgURLToko: updatedImgURL,
        namaToko: updatedNamaToko,
        alamatToko: updatedAlamatToko,
        deskripsiToko: updatedDeskripsiToko,
        nomorKTP: updatedNomorKTP,
        emailToko: updatedEmail,
        jam_buka: updatedJamBuka,
        jam_tutup: updatedJamTutup,
      }),
    });
    if (response.ok) {
      router.push("/merchant/profil");
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
      formData.append("folder", "Letseat/Merchant");

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
      await HandleUpdateProfile(imgURLToko);
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="font-poppins bg-[#E89005] max-h-screen">
        <Header_w_notif>{merchant.nama_resto}</Header_w_notif>

        <div className="mt-[254px] rounded-t-lg bg-white">
          {/* Content */}
          <div
            className="w-[294px] h-[665px] -translate-y-[210px] bg-white mx-auto pt-[17px]
                                rounded-[23px] shadow-lg relative"
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
                    imageSelected
                      ? URL.createObjectURL(imageSelected)
                      : imgURLToko
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

            {/* Nama dan Alamat */}
            <div className="flex flex-col justify-center items-center mt-[17px]">
              {/* Nama Toko */}
              <input
                className="font-semibold text-center text-[21px] mb-2"
                placeholder={namaToko}
                type="text"
                id="name"
                value={updatedNamaToko}
                maxLength={20}
                onChange={(e) => setUpdatedNamaToko(e.target.value)}
              />

              {/* Alamat Toko */}
              <input
                className="font-medium text-center text-[14px]"
                placeholder={alamatToko}
                type="text"
                id="alamatToko"
                value={updatedAlamatToko}
                onChange={(e) => setUpdatedAlamatToko(e.target.value)}
              />
            </div>

            {/* Border Pembatas */}
            <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[10px] mb-[5px]"></div>

            <div className="flex flex-col w-[241px] mx-auto ">
              {/* Deskripsi Toko */}
              <div>
                <div>Deskripsi toko:</div>
                <textarea
                  className="border border-[#9A9A9A] rounded-lg w-60 h-18 px-2 text-[14px] text-[#838080] focus:outline-none"
                  placeholder={deskripsiToko}
                  id="deskripsiToko"
                  value={updatedDeskripsiToko}
                  onChange={(e) => setUpdatedDeskripsiToko(e.target.value)}
                />
              </div>
              {/* Nomor KTP */}
              <div>
                <div>Nomor KTP:</div>
                <input
                  className="border border-[#9A9A9A] rounded-lg w-60  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                  placeholder={nomorKTP}
                  max={9999999999999999}
                  type="number"
                  id="nomorKTP"
                  value={updatedNomorKTP}
                  onChange={(e) => setUpdatedNomorKTP(e.target.value)}
                />
              </div>
              {/* Email Merchant */}
              <div>
                <div>Email Merchant:</div>
                <input
                  className="border border-[#9A9A9A] rounded-lg w-60  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                  placeholder={email}
                  type="email"
                  id="email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                />
              </div>
              {/* Jam Buka */}
              <div>
                <div>Jam Buka:</div>
                <input
                  className="border border-[#9A9A9A] rounded-lg w-60  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                  placeholder={jam_buka}
                  type="time"
                  id="jamBuka"
                  value={updatedJamBuka}
                  onChange={(e) => setUpdatedJamBuka(e.target.value)}
                />
              </div>
              {/* Jam Tutup */}
              <div>
                <div>Jam Tutup:</div>
                <input
                  className="border border-[#9A9A9A] rounded-lg w-60  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                  placeholder={jam_tutup}
                  type="time"
                  id="jamtutup"
                  value={updatedJamTutup}
                  onChange={(e) => setUpdatedJamTutup(e.target.value)}
                />
              </div>
            </div>

            {/* Button Update Profil */}
            <button
              className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
            flex justify-center items-center mt-[15px]
            "
            >
              <h1 className="text-white text-lg font-semibold">Update Profil</h1>
            </button>
          </div>
        </div>

        {/* Navbar */}
        <M_Navbar />
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

    if (!user || !user.roles.includes("merchant")) {
      // User doesn't have the merchant role, redirect to signup merchant page
      return {
        redirect: {
          destination: "/merchant/signup_merchant",
          permanent: false,
        },
      };
    }   

    // User has the merchant role get the merchant data
    const merchantCollection = db.collection("merchants");
    const merchant = await merchantCollection.findOne({
      id_user: user._id.toString(),
    });
    return {
      props: {
        merchant: JSON.parse(JSON.stringify(merchant)),
      },
    };
  }
}
