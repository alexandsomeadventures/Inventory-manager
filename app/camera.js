import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";
import {Button} from "@mui/material";
import { Height, Widgets } from "@mui/icons-material";
const CameraComponent = () => {
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
      {cameraActive && <Camera ref={camera} aspectRatio={4 / 3}/>}
      <Button variant='contained' onClick={() => {setCameraActive(true); if (camera.current) {setImage(camera.current.takePhoto());}}}>Take photo</Button>
      <Button variant='contained' style={{ marginLeft: '16px' }} onClick={() => {setCameraActive(false)}}>Deactivate</Button>
      <img style={imageStyles} src={image} />
    </div>
  );
}

export default CameraComponent;