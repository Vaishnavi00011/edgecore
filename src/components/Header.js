import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
return (
    <header className="  bg-blue-200 text-white shadow-lg  md:px-0 px-4  ">
    <div className="  md:flex bg-blue-900  hidden  p-4  items-center justify-between  gap-2">
        <div className="flex items-center justify-center gap-2 px-2">
        <i class="fa fa-map-marker text-[16px]" aria-hidden="true"></i>
         <label className="text-[12px] font-bold">            
          <span className="text-[14px]">#</span> 113 , SETHI NAGAR, LAL BAG , RTO CHOURAHA,  Indore- 452002, Madhya Pradesh, India
        </label>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-gray-400">
            follow Us on :</label>
            <div className="flex gap-3 ">
        <a href="" target="_blank"><i class="fa fa-facebook-f "></i></a>
        <a href="" target="_blank"><i class="fa fa-instagram"></i></a>
        <a href=""><i class="fa fa-whatsapp " target="_blank"></i></a>
        <a href="#"><i class="fa fa-linkedin  " target="_blank"></i></a>
      </div>
        </div>
       </div>
      <div className="flex justify-between items-center px-6   ">
         <div className="text-2xl font-bold">
          <img className=" w-[80px] h-[80px]" src="CT.png"></img>
        </div>
{/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-white text-blue-950 font-bold">Home</Link>
          <Link to="/about-us" className="hover:text-white  text-blue-950 font-bold">About Us</Link>
          <Link to="/service" className="hover:text-white  text-blue-950 font-bold">Services</Link>
          <Link to="/contactus" className="hover:text-white  text-blue-950 font-bold">Contact Us</Link>
        </nav>
  {/* Call to Action Button
        <Link
          to="/contact"
          className="hidden md:inline-block bg-blue-800 text-white px-4 py-2 rounded hover:bg-yellow-400"
        >
          Get Started
        </Link> */}
       
   

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/about-us" className="hover:text-yellow-300">About Us</Link>
            <Link to="/service" className="hover:text-yellow-300">Services</Link>
            <Link to="/contactus" className="hover:text-yellow-300">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
