import React, { useState } from "react";
import Axios from "axios";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

function App() {
  // console.log("images", images);
    const myImage = new CloudinaryImage("/Letseat/logo_login_sel_x15ih9", {
      cloudName: "prema-cloud",
    }).resize(fill().width(100).height(150));

    const [imageSelected, setImageSelected] = useState();

    const uploadImage = () => {
      // console.log(files[0]);
      const formData = new FormData();
      if (imageSelected) {
        formData.append("file", imageSelected);
        formData.append("upload_preset", "prema_upload123");
      }

      Axios.post(
        "https://api.cloudinary.com/v1_1/prema-cloud/image/upload",
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

      <AdvancedImage cldImg={myImage} />
    </div>
  );
}
export default App;

