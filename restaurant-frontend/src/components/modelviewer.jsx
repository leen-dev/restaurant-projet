import React from 'react';
import '@google/model-viewer'; // Import de la librairie

const ModelViewer = ({ src, alt, width = "100%", height = "500px" }) => {
  return (
    <model-viewer
    src={src}
    alt={alt}
    auto-rotate
    camera-controls
    ar
    shadow-intensity="1"
    exposure="1"
    environment-image="neutral"
    style={{ width, height }}
    />
  );
};

export default ModelViewer;
