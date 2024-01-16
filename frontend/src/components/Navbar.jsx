// src/components/Navbar.jsx
import React, { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    const navbarRef = navbarContainer.current;

    if (navbarRef && !navbarRef.contains(event.target)) {
      closeNavbar();
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50 pixels
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarContainer = useRef(null);

  return (
    <nav
    ref={navbarContainer}
      className={` md:p-4 transition-all  shadow duration-300 ${
        scrolled ? 'fixed top-0 inset-x-0 shadow-md' : ''
      }`}
    >
      <div className="container md:mx-auto ">
        <div className="md:flex hidden  items-center justify-between">
          <div className="text-gray-800 text-xl font-bold">
            <Link to="/">AAES</Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none ">
            {!isOpen? <IoMenu size={'2rem'} className='text-gray-800' />:
            <IoMdClose size={'2rem'} className='text-gray-800'/>}
            </button>
          </div>

          <div className={`hidden md:flex space-x-4`}>
            <Link to="/" className="text-gray-800">
              Home
            </Link>
            <Link to="/about" className="text-gray-800">
              About
            </Link>
            <Link to="/services" className="text-gray-800">
              Services
            </Link>
            <Link to="/contact" className="text-gray-800">
              Contact
            </Link>
          </div>

        </div>
        <div className="">
            {/* Responsive Menu for Small Screens */}
            {isOpen ? (
            <div className="md:hidden absolute h-screen w-screen bg-gray-800 z-[100]">
                
            <div className="text-white p-4 text-2xl mb-0 pb-0 font-bold flex justify-between">
            <Link to="/">AAES</Link>
            <IoMdClose size={'2rem'} onClick={toggleNavbar}/>
          </div>

              <div className="flex flex-col space-y-2 p-4">
                <Link to="/" className="text-white">
                  Home
                </Link>
                <Link to="/about" className="text-white">
                  About
                </Link>
                <Link to="/services" className="text-white">
                  Services
                </Link>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </div>
            </div>
          ): <div className="flex p-4 md:hidden  items-center justify-between">
          <div className="text-gray-800 text-xl font-bold">
            <Link to="/">AAES</Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none ">
            {!isOpen? <IoMenu size={'2rem'} className='text-gray-800' />:
            <IoMdClose size={'2rem'} className='text-gray-800'/>}
            </button>
          </div>

          <div className={`hidden md:flex space-x-4`}>
            <Link to="/" className="text-gray-800">
              Home
            </Link>
            <Link to="/about" className="text-gray-800">
              About
            </Link>
            <Link to="/services" className="text-gray-800">
              Services
            </Link>
            <Link to="/contact" className="text-gray-800">
              Contact
            </Link>
          </div>

        </div> }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
