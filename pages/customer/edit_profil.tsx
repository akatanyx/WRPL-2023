import { useState } from "react";
import { useRouter } from "next/router";

import Axios from "axios";
import Image from "next/image";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import Header_w_notif from "@/components/Merchant/Header_w_notif";
import { getSession } from "next-auth/react";
import { User } from "../interface";

export default function EditProfilePage({ user }: { user: User }) {
  const name = user?.nama;
  const phone = user?.nomor_hp?.toString() || "";
  const email = user?.email || "";
  const imgURL = user?.imgURL || "/m_profil_pp.svg";
  const address = user?.alamat || "";

  const [imageSelected, setImageSelected] = useState<File | undefined>();
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedAddress, setUpdatedAddress] = useState(address);

  const router = useRouter();

  const HandleUpdateProfile = async (updatedImgURL: string) => {
    const response = await fetch("/api/updateprofil?type=customer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user?._id,
        imgURL: updatedImgURL,
        nama: updatedName,
        nomor_hp: updatedPhone,
        email: updatedEmail,
        alamat: updatedAddress,
      }),
    });
    if (response.ok) {
      router.push("/customer/profil");
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
      formData.append("folder", "Letseat/Customer");

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
    <>
      <form onSubmit={HandleSubmit}>
        <div className="font-poppins bg-[#E89005] max-h-screen">
          <Header_w_notif>{user?.nama}</Header_w_notif>
          <div className="mt-[254px] bg-white">
            {/* Content */}
            <div
              className="w-[294px] h-[635px] -translate-y-[210px] bg-white mx-auto 
                                rounded-[23px] pt-[17px] shadow-lg relative"
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
                        : imgURL
                    }
                    priority
                    alt="Profile Pic"
                    width={130}
                    height={130}
                    className="mx-auto h-[130px] rounded-full border object-none border-gray-100 shadow-sm"
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

              {/* Nama*/}
              <div className="flex flex-col justify-center items-center mt-[17px]">
                {/* Nama Customer */}
                <input
                  className="font-semibold text-center text-[21px]"
                  placeholder={name}
                  type="text"
                  id="name"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </div>

              {/* Border Pembatas */}
              <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[16px] mb-[45px]"></div>

              <div className="flex flex-col gap-y-[30px] w-[241px] mx-auto ">
                {/* Nomor Telepon */}
                <div className="flex gap-x-[17px] items-center">
                  <img src="/m_profil_telepon.svg" alt="" />
                  <input
                    className="border border-[#9A9A9A] rounded-lg w-64  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                    placeholder={phone}
                    type="number"
                    id="telepon"
                    value={updatedPhone}
                    onChange={(e) => setUpdatedPhone(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="flex gap-x-[17px] items-center">
                  <img src="/m_profil_email.svg" alt="" />
                  <input
                    className="border border-[#9A9A9A] rounded-lg w-64  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                    placeholder={email}
                    type="email"
                    id="email"
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                </div>

                {/* Alamat */}
                <div className="flex gap-x-[17px] items-center ml-[6px]">
                  <img src="/b_profil_alamat.svg" alt="" />
                  <input
                    className="border border-[#9A9A9A] rounded-lg w-64  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                    placeholder={address}
                    type="text"
                    id="alamat"
                    value={updatedAddress}
                    onChange={(e) => setUpdatedAddress(e.target.value)}
                  />
                </div>
              </div>

              {/* Button Edit Profil */}
              <button
                className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
                            flex justify-center items-center mt-[25px]
                            "
              >
                <h1 className="text-white text-lg font-semibold">Update</h1>
              </button>
            </div>
          </div>

          {/* Navbar */}
          <C_Navbar />
        </div>
      </form>
    </>
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
    const user:User = await fetch(
      `http://localhost:3000/api/get?type=user&email=${session?.user.email}`
    ).then((res) => res.json());
    return {
      props: {
        user,
      },
    };
  }
}
