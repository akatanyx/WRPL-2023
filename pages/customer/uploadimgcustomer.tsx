import React, { useState } from "react";
import Axios from "axios";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { mapImageResources, search } from "@/src/lib/cloudinary";
import Image from "next/image";

// interface Gambar {
//   id: string;
//   title: string;
//   image: string;
//   link:string;
//   width: number;
//   height: number;
// }

// interface GambarProps {
//   gambars:Gambar[];
// }

function App({images, next_cursor}) {
  //Ini tampilin file yang sudah di upload
  // const myImage = new CloudinaryImage("jgeoz0cjgypfkguitmi3.jpg", {
  //   cloudName: "prema-cloud",
  // });

  console.log("images", images);
  console.log("next_cursor", next_cursor);

  //Ini function untuk upload file
  const [imageSelected, setImageSelected] = useState();
  const uploadImage = () => {
    // console.log(files[0]);
    const formData = new FormData();
    if (imageSelected) {
      formData.append("file", imageSelected);
      formData.append("upload_preset", "prema_upload123");
      formData.append("folder", "Letseat");
    }

    Axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}> Upload Image</button>

      {/* <AdvancedImage cldImg={myImage} /> */}
      <div>
        <h1>My images</h1>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <a href={image.link} rel="noerferrer">
                <div>
                  <Image
                    width={image.width}
                    height={image.height}
                    src={image.image}
                    alt=""
                  />
                </div>
                <h3>{image.title}</h3>
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
}
export default App;

export async function getStaticProps() {
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,{
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
    }
  }).then(r=>r.json());

  const { resources, next_cursor:nextCursor } = results;

  const images = resources.map(resource=>{
    const { width, height } = resource;
    return{
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height
    } 
});
  // const gambars:Gambar[] = await results.json();

  return {
    props: {
      images,
    },
  };
}
