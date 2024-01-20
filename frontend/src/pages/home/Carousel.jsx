// HeroCarousel.js
import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../index.css'; // Create this file for custom styles

import img1 from '../../components/images/image1.jpg'
import img2 from '../../components/images/image2.jpg'
import img3 from '../../components/images/image3.jpg'

const Carousel = () => {
  const images = [
    img1,
    img2,
    img3,
    // Add more image paths as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <FaArrowLeft />,
    nextArrow: <FaArrowRight />,
  };

  return (
    <div className="relative h-[60vh] md:h-[80vh]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="hero-slide h-[60vh] md:h-[80vh]">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fit"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center w-full">
              <div className="flex justify-center">
                {images.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`radio-dot ${index === dotIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* welcome text */}
      <div className="absolute w-msg  flex md:top-[15rem] top-[30%] left-[10%] md:left-[5rem] h-[5rem] overflow-hidden">
        <div className="w-2  bg-blue-700"></div>
      <div className="md:p-4 md:pr-[50px] flex justify-center items-center  md:text-[4rem] font-bold text-xl p-2">Welcome to our homepage</div>
      </div>
      
      
    </div>
  );
};

export default Carousel;
