import React, { useState } from "react";
import Axios from "axios";
import {Image} from "cloudinary-react";

function App() {

const [imageSelected, setImageSelected] = useState();

  const uploadImage = () => {
    // console.log(files[0]);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "dxcatj5b");

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
        
      <Image cloudName="prema-cloud" publicId="https://res.cloudinary.com/prema-cloud/image/upload/v1679195233/binpfhmjqum0og4ubjw8.jpg"/>

    </div>
  );
}
export default App;
