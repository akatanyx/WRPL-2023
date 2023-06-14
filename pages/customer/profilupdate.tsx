import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import Axios from "axios";
import Image from "next/image";

export default function UpdateImageProfile() {
  const [imageSelected, setImageSelected] = useState<File | undefined>();
  async function HandleUpdateProfile(imgURL: string) {
    const router = useRouter();
    const response = await fetch("/api/updateprofil?type=customer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imgURL),
    });
    if (response.ok) {
      router.push("/customer/profil");
    } else {
      console.error(response.statusText);
    }
  }

  const HandleSubmit = async (event: any) => {
    const formData = new FormData();
    {
      if (imageSelected) {
        //Cloudinary parameters
        formData.append("file", imageSelected);
        formData.append("upload_preset", "prema_upload123");
        formData.append("folder", "Letseat");
      }
      Axios.post(
        `https://api.cloudinary.com/v1_1/prema-cloud/image/upload`,
        formData
      ).then((response) => {
        console.log(response);
        let imgURL:string = response.data.secure_url;
        HandleUpdateProfile(imgURL);
      });

      event.preventDefault();
    }

    return (
      <>
        <Head>
          <title>Edit profil</title>
        </Head>

        {/* Header 1 */}
        <div>
          <h1>
            List Menu
          </h1>
        </div>

        {/* Form */}
        <div className="mx-5 mt-4">
          <form onSubmit={HandleSubmit} action="/" method="POST">
            <div className="mx-[78px] mt-6  md:flex md:justify-center">
              {/* Gambar berlaku sebagai tombol input karena 'htmlFor' mmerujuk ke id input */}
              <label htmlFor="file-input">
                <Image
                  src="/icon_m_inputimage.svg"
                  priority
                  alt=""
                  width={203}
                  height={203}
                  className="shadow-lg rounded-lg"
                />
              </label>
              {/* Mengatur input file, tombolnya di sembunyikan dari user */}
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
              {/* Menampilkan preview gambar sebelum di upload */}
              {imageSelected && (
                <Image
                  src={URL.createObjectURL(imageSelected)}
                  width={203}
                  height={203}
                  className="shadow-lg rounded-lg w-auto h-auto"
                  alt="Thumb"
                />
              )}

              {/* Save */}
              <button
                className="w-[314px] h-[44px] bg-[#EC7505] z-10 rounded-lg flex 
                            justify-center shadow-lg items-center my-4"
              >
                <h1 className="text-white font-poppins font-semibold text-[19px]">
                  Save
                </h1>
              </button>
            </div>
          </form>
        </div>
        <div className="mb-96"></div>
      </>
    );
  };
}