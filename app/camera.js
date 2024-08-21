import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import { Button } from "@mui/material";

const CameraComponent = ({ updateImageData }) => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  const imageStyles = {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    top: '0px',
    left: '-550px',
  };

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto();
    setImage(photo);
    updateImageData(photo);
  };

  const openCamera = () => {
    setCameraActive(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      {cameraActive && <Camera ref={camera} aspectRatio={1 / 1} />}
      <Button variant="contained" onClick={openCamera}>
        Open Camera
      </Button>
      {cameraActive && (
        <Button variant="contained" style={{ marginLeft: '16px' }} onClick={takePhoto}>
          Take Photo
        </Button>
      )}
      <Button variant="contained" style={{ marginLeft: '16px' }} onClick={() => setCameraActive(false)}>
        Deactivate
      </Button>
      <img style={imageStyles} src={image} alt="Captured" />
    </div>
  );
};

export default CameraComponent;
