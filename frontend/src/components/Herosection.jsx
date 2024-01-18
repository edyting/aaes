import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/image4.jpg';




function Herosection() {

  const images = [
    {img:img1,id:1},
    {img:img2,id:2},
    {img:img3,id:3},
    {img:img4,id:4}
   ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // const slideProps = useSpring({
  //   transform: `translateX(-${index * 100}%)`,
  // });

  return (
    <div>
  
    </div>
  )
}

export default Herosection



