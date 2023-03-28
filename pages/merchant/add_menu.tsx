// import Head from "next/head"
// import Link from "next/link"
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// import Header_TambahMenu from "@/components/Merchant/Add_Menu/Header_TambahMenu"
// import Header_w_notif from "@/components/Merchant/Header_w_notif"
// import M_Navbar from "@/components/Merchant/M_Navbar"

// export default function Add_menu () {
//     const [nama, setNama] = useState('');
//     const [harga, setHarga] = useState('');
//     const [desk, setDesk] = useState('');
//     const [tag, setTag] = useState('');
//     const [kategori, setKategori] = useState('');
//     const [rating, setRating] = useState('');
//     const router = useRouter();

//     const handleSubmit = async (event : any) => {
//         event.preventDefault();
//         const response = await fetch('/api/signup?type=menu', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ nama, harga, desk, tag, kategori, rating}),
//         });
//         if (response.ok) {
//         router.push('/merchant/list_menu');
//         } else {
//         console.error(response.statusText);
//         }
//     };

//     return (
//         <>
//             <Head>
//                 <title>Tambah Menu</title>
//             </Head>

//             {/* Header 1 */}
//             <div>
//                 <Header_w_notif>
//                     List Menu
//                 </Header_w_notif>
//             </div>

//             {/* Header 2 */}
//             <div>
//                 <Header_TambahMenu />
//             </div>

//             {/* Input Gambar */}
//             <div className="mx-[78px] mt-6  md:flex md:justify-center">
//                 <input type="image" src="/icon_m_inputimage.svg" alt=""className="shadow-lg rounded-lg w-[203px]" />
//             </div>

//             {/* Form */}
//             <div className="mx-5 mt-4">
//                 <form onSubmit={handleSubmit}
//                 action="/"
//                 method="POST">
//                     <div className="flex-col">
//                         {/* Nama Makanan */}
//                         <div className="flex-col">
//                             <h1 className="font-poppins font-bold text-[15px]">Nama Makanan</h1>
//                             <input type="text" className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
//                              rounded-lg"
//                              value={nama}
//                              onChange={(event) => setNama(event.target.value)}
//                              />
//                         </div>

//                         {/* Harga */}
//                         <div className="flex-col mt-2">
//                             <h1 className="font-poppins font-bold text-[15px]">Harga</h1>
//                             <input type="text" className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
//                              rounded-lg"
//                              value={harga}
//                              onChange={(event) => setHarga(event.target.value)}
//                              />
//                         </div>

//                         {/* Kategori */}
//                         <div className="flex-col mt-2">
//                             <h1 className="font-poppins font-bold text-[15px]">Kategori</h1>

//                             <Link href='/merchant/add_kategori'>
//                                 <button className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
//                                 rounded-lg">
//                                     <h1 className="font-popins font-semibold text-[15px] text-[#000000] text-opacity-60">Pilih</h1>
//                                 </button>
//                             </Link>
//                         </div>

//                         {/* Deskripsi */}
//                         <div className="flex-col mt-2">
//                             <h1 className="font-poppins font-bold text-[15px]">Deskripsi Makanan</h1>
//                             <input type="text" className="w-[314px] h-[142px] border-[1px] border-[#000000] border-opacity-25
//                              rounded-lg"
//                              value={desk}
//                              onChange={(event) => setDesk(event.target.value)}
//                              />
//                         </div>

//                         {/* Save */}
//                         <button className="w-[314px] h-[44px] bg-[#EC7505] z-10 rounded-lg flex
//                             justify-center shadow-lg items-center my-4">
//                             <h1 className="text-white font-poppins font-semibold text-[19px]">
//                                 Save
//                             </h1>
//                         </button>
//                     </div>
//                 </form>
//             </div>

//             <div className="mb-96"></div>

//             <div>
//                 <M_Navbar />
//             </div>

//         </>
//     )
// }

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import Header_TambahMenu from "@/components/Merchant/Add_Menu/Header_TambahMenu";
import Header_w_notif from "@/components/Merchant/Header_w_notif";
import M_Navbar from "@/components/Merchant/M_Navbar";
import Axios from "axios";
import Image from "next/image";

export default function Add_menu() {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [desk, setDesk] = useState("");
  const [tag, setTag] = useState("");
  const [kategori, setKategori] = useState("");
  const [rating, setRating] = useState("");
  const router = useRouter();
  const [imageSelected, setImageSelected] = useState();

  const HandleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch("/api/signup?type=menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nama, harga, desk, tag, kategori, rating }),
    });
    if (response.ok) {
      router.push("/merchant/list_menu");
    } else {
      console.error(response.statusText);
    }

    //Ini daerah fungsi untuk upload image
    // console.log(files[0]);

    const formData = new FormData();
    if (imageSelected) {
      formData.append("file", imageSelected);
      formData.append("upload_preset", "prema_upload123");
      // formData.append("folder", "Letseat");
    }
    // This function will be triggered when the file field change

    Axios.post(
      `https://api.cloudinary.com/v1_1/prema-cloud/image/upload`,
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <Head>
        <title>Tambah Menu</title>
      </Head>

      {/* Header 1 */}
      <div>
        <Header_w_notif>List Menu</Header_w_notif>
      </div>

      {/* Header 2 */}
      <div>
        <Header_TambahMenu />
      </div>

      {/* Form */}
      <div className="mx-5 mt-4">
        <form onSubmit={HandleSubmit} action="/" method="POST">
          {/* Input Gambar */}
          <div className="mx-[78px] mt-6  md:flex md:justify-center">
            <label htmlFor="file-input">
              <img
                src="/icon_m_inputimage.svg"
                alt=""
                className="shadow-lg rounded-lg w-[203px]"
              />
            </label>
            <input
              id="file-input"
              type="file"
              accept=".png, .jpg, .jpeg"
              className="invisible"
              onChange={(event) => {
                setImageSelected(event.target.files[0]);
              }}
            />
            {imageSelected && (
                <img
                  src={URL.createObjectURL(imageSelected)}
                  className="shadow-lg rounded-lg w-[203px]"
                  alt="Thumb"
                />
            )}
            {/* <input
              type="image"
              src="/icon_m_inputimage.svg"
              alt=""
              className="shadow-lg rounded-lg w-[203px]"
            /> */}
          </div>

          {/* <h1 className="form__title">Image Preview in Reactjs</h1>
            <div className="form__img-input-container">
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg" 
                    id="photo" 
                    className="visually-hidden"
                    onChange={(event) => {
                        setImageSelected(event.target.files[0]);
                    }}

                />
                <label htmlFor="photo" className="form-img__file-label">
                    <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#56ceef" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                        <circle cx="12" cy="10" r="3" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </label>
                {imageSelected && (<img src={URL.createObjectURL(imageSelected)} alt="thumb" className="form-img img-preview"/>)}
            </div> */}

          <div className="flex-col">
            {/* Nama Makanan */}
            <div className="flex-col">
              <h1 className="font-poppins font-bold text-[15px]">
                Nama Makanan
              </h1>
              <input
                type="text"
                className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg"
                value={nama}
                onChange={(event) => setNama(event.target.value)}
              />
            </div>

            {/* Harga */}
            <div className="flex-col mt-2">
              <h1 className="font-poppins font-bold text-[15px]">Harga</h1>
              <input
                type="text"
                className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg"
                value={harga}
                onChange={(event) => setHarga(event.target.value)}
              />
            </div>

            {/* Kategori */}
            <div className="flex-col mt-2">
              <h1 className="font-poppins font-bold text-[15px]">Kategori</h1>

              <Link href="/merchant/add_kategori">
                <button
                  className="w-[314px] h-[32px] border-[1px] border-[#000000] border-opacity-25
                                rounded-lg"
                >
                  <h1 className="font-popins font-semibold text-[15px] text-[#000000] text-opacity-60">
                    Pilih
                  </h1>
                </button>
              </Link>
            </div>

            {/* Deskripsi */}
            <div className="flex-col mt-2">
              <h1 className="font-poppins font-bold text-[15px]">
                Deskripsi Makanan
              </h1>
              <input
                type="text"
                className="w-[314px] h-[142px] border-[1px] border-[#000000] border-opacity-25
                             rounded-lg"
                value={desk}
                onChange={(event) => setDesk(event.target.value)}
              />
            </div>

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

      <div>
        <M_Navbar />
      </div>
    </>
  );
}
