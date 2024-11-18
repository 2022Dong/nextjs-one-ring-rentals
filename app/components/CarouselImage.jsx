import React from "react";
import Image from "react-bootstrap/Image";

function CarouselImage({ text }) {
  return (
    <Image
      // the encoding returns https://via.placeholder.com/800x400.png?text=First%20slide
      src={`https://via.placeholder.com/800x400.png?text=${encodeURIComponent(
        text
      )}`}
      alt={text}
      fluid
    />
  );
}

export default CarouselImage;