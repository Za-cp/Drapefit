import React, { useRef } from 'react';
import ModelViewer from '../ModelViewer'; // your ModelViewer component

const ParentComponent = () => {
  const modelViewerRef = useRef(null);

  const images = [
    { src: "/assets1/1.png", model: "/model/shirt1.glb" },
    { src: "/assets1/2.png", model: "/model/shirt2.glb" },
    { src: "/assets1/3.png", model: "/model/shirt3.glb" }
  ];

  const handleModelChange = (modelPath) => {
    if (modelViewerRef.current) {
      modelViewerRef.current.src = modelPath;
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ModelViewer ref={modelViewerRef} />

      <div style={{ marginTop: "20px" }}>
        {images.map((item, index) => (
          <img 
            key={index}
            src={item.src}
            alt="Shirt" 
            style={{ width: "100px", margin: "10px", cursor: "pointer" }}
            onClick={() => handleModelChange(item.model)}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
