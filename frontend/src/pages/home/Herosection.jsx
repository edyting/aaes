import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


import img1 from '../../components/images/image1.jpg';
import img2 from '../../components/images/image2.jpg';
import img3 from '../../components/images/image3.jpg';
import img4 from '../../components/images/image4.jpg';




function Herosection() {

  const images = [
    {img:img1,id:1},
    {img:img2,id:2},
    {img:img3,id:3},
    {img:img4,id:4}
   ];

  const [index, setIndex] = useState(0);

  // const handlePrev = () => {
  //   setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  // const handleNext = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };



  return (
    <div className=''>
      {/* main hero section container */}
       <div className="h-[calc(100vh-10rem)] relative w-full bg-blue-200">
          {/* image slider */}
          <div className="h-full w-full">
            image
          </div>
          {/* text */}
          <div className="absolute top-0 right-0 bg-red-100">
            Welcome to our homepage
          </div>


       </div>
       {/* main end */}
    </div>
  )
}

export default Herosection



