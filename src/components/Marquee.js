"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Marquee = ({ images, slidesToShow}) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow || 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4 items-center ml-9">
            <img src={image.src} alt={image.alt} name={image.name} className="h-full w-96 object-fit" />
            <p className="text-sm mt-2">{image.name}</p>
          </div>
          
        ))}
      </Slider>
      <button
        onClick={previous}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10"
      >
        <IoIosArrowForward/>
      </button>
    </div>
  );
};

export default Marquee;
