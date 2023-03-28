import React, { useState } from "react";
import Axios from "axios";
import { CloudinaryImage } from "@cloudinary/url-gen";
import Image from "next/image";
import { mapImageResources, search } from "@/src/lib/cloudinary";

function App(images:any, next_cursor:any) {
  //Ini tampilin file yang sudah di upload
    // const myImage = new CloudinaryImage("jgeoz0cjgypfkguitmi3.jpg", {
    //   cloudName: "prema-cloud",
    // });

  console.log('images',images);
  console.log('next_cursor', next_cursor);


  //Ini function untuk upload file
    const [imageSelected, setImageSelected] = useState();
    const uploadImage = () => {
      // console.log(files[0]);
      const formData = new FormData();
      if (imageSelected) {
        formData.append("file", imageSelected);
        formData.append("upload_preset", "prema_upload123");
        formData.append('folder', 'Letseat');
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
        {images.map(image => {
          return(
            <li key={image.id}>
              <a href={image.link} rel="noerferrer">
                <div>
                  <Image width={image.width} height={image.height} src={image.image} alt=""/>
                </div>
                <h3>
                  { image.title }
                </h3>
              </a>
            </li>
          )
        })}
      </div>
    </div>
  );
}
export default App;

export async function getStaticProps(){
  const results = await search();
  
  const { resources, next_cursor:nextCursor } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images
    }
  }
}

