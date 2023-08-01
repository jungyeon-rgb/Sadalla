import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const Slide = styled.img`
  width: 100%;
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => {
      clearInterval(slideInterval);
    };
  }, [images.length]);

  return (
    <CarouselContainer>
      <SlideWrapper
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </SlideWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
