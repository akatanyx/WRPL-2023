import { useState } from "react";
import { useRouter } from "next/router";

import Axios from "axios";
import Image from "next/image";
import Link from "next/link";
import C_Navbar from "@/components/Customer/Landing/C_Navbar";
import Header_w_notif from "@/components/Merchant/Header_w_notif";

type User = {
  _id: string;
  nama: string;
  email: string;
  phone: number;
  imgURL: string;
  alamat: string;
};

type UserProps = {
  users: User[];
};

export default function EditProfilePage({ users }: UserProps) {
  const user: User[] = users.filter(
    (user: User) => user.nama === "Billy Fahd Qodama"
  );
  const [imageSelected, setImageSelected] = useState<File | undefined>();
  const [phone, setphone] = useState(user[0].phone?.toString() || "");
  const [alamat, setAlamat] = useState(user[0].alamat ? user[0].alamat : "");
  const [email, setEmail] = useState(user[0].email || "");
  const userId: string = user[0]._id;
  const imgURL: string = user[0].imgURL;

  const router = useRouter();

  const HandleUpdateProfile = async (imgURL: string) => {
    const response = await fetch("/api/updateprofil?type=customer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, imgURL, phone, email, alamat }),
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
      <div className="font-poppins bg-[#E89005] max-h-screen">
        <Header_w_notif>Ahmad Santoso</Header_w_notif>
        <form onSubmit={HandleSubmit} method="POST" action="/">
          <div className="mt-[254px] bg-white">
            {/* Content */}
            <div
              className="w-[294px] h-[635px] -translate-y-[210px] bg-white mx-auto 
                                rounded-[23px] shadow-lg relative"
            >
              {/* Logout Button */}
              <button className="absolute right-0 translate-x-6 -translate-y-6">
                <img src="/m_profil_logout.svg" alt="" />
              </button>

              <div className="md:flex md:justify-center items-center h-130px pt-[17px]">
                {/* Menampilkan preview gambar sebelum di upload */}
                <label htmlFor="file-input">
                  {imageSelected ? (
                    <>
                      <Image
                        src={URL.createObjectURL(imageSelected)}
                        alt="Profile Pic"
                        width={130}
                        height={130}
                        className="mx-auto h-[130px] rounded-full border border-gray-100 shadow-sm"
                      />
                    </>
                  ) : (
                    <>
                      {/* Gambar berlaku sebagai tombol input karena 'htmlFor' mmerujuk ke id input */}
                      <Image
                        src={imgURL}
                        priority
                        alt="Profile Pic"
                        width={130}
                        height={130}
                        className="mx-auto h-[130px] rounded-full border border-gray-100 shadow-sm"
                      />
                    </>
                  )}
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
                <h1 className="font-semibold text-[21px]">{user[0].nama}</h1>
              </div>

              {/* Border Pembatas */}
              <div className="border-b-2 border-[#D9D9D9] w-[267px] mx-auto mt-[16px] mb-[45px]"></div>

              <div className="flex flex-col gap-y-[30px] w-[241px] mx-auto ">
                {/* Nomor Telepon */}
                <div className="flex gap-x-[17px] items-center">
                  <img src="/m_profil_telepon.svg" alt="" />
                  <input
                    className="border border-[#9A9A9A] rounded-lg w-64  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                    placeholder={
                      user[0].phone == null
                        ? ""
                        : user[0].phone.toString()
                    }
                    type="telepon"
                    id="telepon"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="flex gap-x-[17px] items-center">
                  <img src="/m_profil_email.svg" alt="" />
                  <input
                    className="border border-[#9A9A9A] rounded-lg w-64  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                    placeholder={user[0].email == null ? "" : email}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Alamat */}
                <div className="flex gap-x-[17px] items-center ml-[6px]">
                  <img src="/b_profil_alamat.svg" alt="" />
                  <input
                    className="border border-[#9A9A9A] rounded-lg w-64  h-8 px-2 text-[14px] text-[#838080] focus:outline-none"
                    placeholder={
                      user[0].alamat == null ? "" : user[0].alamat
                    }
                    type="alamat"
                    id="alamat"
                    value={alamat ? alamat : ""}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </div>
              </div>

              {/* Button Edit Profil */}
              <button
                className="w-[168px] h-[46px] bg-[#EC7505] rounded-[10px] mx-auto
                            flex justify-center items-center mt-[25px]
                            "
              >
                <h1 className="text-white text-lg font-semibold">Selesai</h1>
              </button>
            </div>
          </div>
        </form>

        {/* Navbar */}
        <C_Navbar />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts?type=users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
