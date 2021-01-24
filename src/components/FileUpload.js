import React,{ useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Dropzone from 'react-dropzone';
// import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';




export default function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");


  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }

 

  return (
      <div>

    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
      {file && <ImageThumb image={file} />}
    </div>
    </div>
  );
}


const ImageThumb = ({ image }) => {
const [cropData, setCropData] = useState("#");
const [cropper, setCropper] = useState();
    const getCropData = () => {
        if (typeof cropper !== "undefined") {
          setCropData(cropper.getCroppedCanvas().toDataURL());
        }
      };
  return ( <div>
    <Cropper
    style={{ height: 400, width: "100%" }}
    initialAspectRatio={1}
    preview=".img-preview"
    src={URL.createObjectURL(image)}
    viewMode={1}
    guides={true}
    minCropBoxHeight={10}
    minCropBoxWidth={10}
    background={false}
    responsive={true}
    autoCropArea={1}
    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
    onInitialized={(instance) => {
      setCropper(instance);
    }}
  />
  <h1>
            <span>Crop</span>
            <button style={{ float: "right" }} onClick={getCropData}>
              Crop Image
            </button>
          </h1>
          {/* <img style={{ width: "100%" }} src={cropData} alt="cropped" /> */}
          <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
        
  {/* <img src={URL.createObjectURL(image)} alt={image.name} /> */}
  </div>);
};
