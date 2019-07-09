import React, { useRef } from "react";

const ImageChangeOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const ImageRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        ImageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        ImageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=''
      ref={ImageRef}
    />
  );
};

export default ImageChangeOnMouseOver;
