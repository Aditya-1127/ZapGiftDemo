import React, {useMemo,useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({accept: 'image/*'});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
      const getCropData = () => {
          if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
          }
        };
  const files = acceptedFiles.map(file => (
     <div>
     <Cropper
     style={{ height: 400, width: "100%" }}
     initialAspectRatio={1}
     preview=".img-preview"
     src={URL.createObjectURL(file)}
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
   <span>Crop</span>
                <button style={{ float: "right" }} onClick={getCropData}>
                  Crop Image
                </button>
                <img style={{ width: "100%" }} src={cropData} alt="cropped" />
   </div> 
  ));

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
        {/* {files && <ImageThumb image={files} />} */}
      </aside>
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
        // src={URL.createObjectURL(image)}
        src={image}
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
              <img style={{ width: "100%" }} src={cropData} alt="cropped" />
            
      {/* <img src={URL.createObjectURL(image)} alt={image.name} /> */}
      </div>);
    };
    