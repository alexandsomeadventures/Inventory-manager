import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";
import {Button} from "@mui/material";
const CameraComponent = ({updateImageData}) => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const imageStyles = {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    top: '0px',
    left: '-550px'
  };
  

  return (
    <div style={{ position: 'relative' }}>
      {cameraActive && <Camera ref={camera} aspectRatio={1 / 1}/>}
      <Button variant='contained' id='takePhoto' onClick={async () => {setCameraActive(true); if (camera.current) {setImage(await camera.current.takePhoto()); updateImageData(image);}}}>Take photo</Button>
      <Button variant='contained' style={{ marginLeft: '16px' }} onClick={() => {setCameraActive(false);}}>Deactivate</Button>
      <img style={imageStyles} src={image} />
    </div>
  );
}

export default CameraComponent;