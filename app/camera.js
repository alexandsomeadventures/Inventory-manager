import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";
import {Button} from "@mui/material";
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
  
  const fetchResponse = async (image) => {
    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image }),
    });
    const data = await res.json();
    console.log(data.choices[0]);
  };

  const handlePhoto = async () => {
    fetchResponse(image);
  }
  return (
    <div style={{ position: 'relative' }}>
      {cameraActive && <Camera ref={camera} aspectRatio={16 / 9}/>}
      <Button variant='contained' style={{ marginRight: '16px' }} onClick={()=> {handlePhoto()}}>Classify</Button>
      <Button variant='contained' onClick={() => {setCameraActive(true); if (camera.current) {setImage(camera.current.takePhoto());}}}>Take photo</Button>
      <Button variant='contained' style={{ marginLeft: '16px' }} onClick={() => {setCameraActive(false); setImage(null)}}>Deactivate</Button>
      <img style={imageStyles} src={image} />
    </div>
  );
}

export default CameraComponent;