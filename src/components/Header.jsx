import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from "../images/logo.png"

const Header = () => {

  const [isMenuOpen , setIsMenuOpen] = useState(false)
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  // Function to handle click events for toggling the Pages dropdown
  const handleHomeDropdownToggle = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
    setIsPagesDropdownOpen(false);
    setIsNewsDropdownOpen(false);
  };

  const handlePagesDropdownToggle = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
    setIsHomeDropdownOpen(false);
    setIsNewsDropdownOpen(false);
  };

  // Function to handle click events for toggling the News dropdown
  const handleNewsDropdownToggle = () => {
    setIsPagesDropdownOpen(false);
    setIsHomeDropdownOpen(false);
    setIsNewsDropdownOpen(!isNewsDropdownOpen);
  };


  const toggleNav = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-customPurple py-4">
      <div className="container mx-auto flex items-center justify-between md:px-20 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link onClick={()=> setIsMenuOpen(false)} to="/">
          <img className="h-8" src={LogoImage} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden  md:flex space-x-8">
          <div className="relative flex items-center  justify-center" onClick={handleHomeDropdownToggle}>
            <Link to="/" className=" text-pinkText font-bold text-xl">Home
            </Link>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            {/* Dropdown Menu */}
            {isHomeDropdownOpen && (
              <div className="absolute top-full left-0 bg-customPurple border mt-2 w-32 rounded-lg shadow-lg">
                <Link to="/creative-agency" className="block px-4 py-2  hover:bg-gray-400 border border-black">Creative Agency</Link>
                <Link to="/portfolio" className="block px-4 py-2 hover:bg-gray-400 border border-black">Personal Portfolio</Link>
                <Link to="/digital-agency" className="block px-4 py-2  hover:bg-gray-400 border border-black">Digital Agancy</Link>
              </div>
            )}
          </div>
          <Link to="/aboutus" className="text-pinkText font-bold text-xl">About Us</Link>
          {/* Pages Dropdown */}
          <div className="relative flex items-center justify-center " onClick={handlePagesDropdownToggle}>
            <Link to="#" className="font-bold text-xl text-pinkText">Pages
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            {/* Dropdown Menu */}
            {isPagesDropdownOpen && (
              <div className="absolute top-full left-0 bg-customPurple mt-2 w-32 rounded-lg shadow-lg">
                <Link to="#" className="block px-4 py-2 border border-black  hover:bg-gray-400">About me</Link>
                <Link to="#" className="block px-4 py-2 border border-black  hover:bg-gray-400">Our Team</Link>
                <Link to="/team-details" className="block px-4 py-2 border border-black hover:bg-gray-400">Team Details</Link>
                <Link to="#" className="block px-4 py-2  hover:bg-gray-400 border border-black">Project Details</Link>
                <Link to="#" className="block px-4 py-2  hover:bg-gray-400 border border-black">Service Details</Link>
                <Link to="/contactus" className="border border-black block px-4 py-2 hover:bg-gray-400">Contact Us</Link>
              </div>
            )}
          </div>
          {/* News Dropdown */}
          <div className="relative flex items-center justify-center" onClick={handleNewsDropdownToggle}>
            <Link to="#" className=" text-pinkText font-bold text-xl">News
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            {/* Dropdown Menu */}
            {isNewsDropdownOpen && (
              <div className="absolute  top-full left-0 bg-customPurple mt-2 w-32 rounded-lg shadow-lg">
                <Link to="/blog" className="block px-4 py-2 border border-black hover:bg-gray-400">Our Blog</Link>
                <Link to="/blog-details" className="block px-4 py-2 border border-black hover:bg-gray-400">Blog Details</Link>
              </div>
            )}
          </div>
        </nav>

       

<div className={`md:hidden `}>
          {/* Hamburger Icon for Mobile */}
          <button onClick={toggleNav} className=" focus:outline-none">
           

            {
              isMenuOpen ? (
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              ) : (
                 <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
              )
            }
            
          </button>
        </div>






      </div>

      {
      isMenuOpen && (
        <>

        
            <div
            className={`md:hidden  mt-5 flex  flex-col items-center gap-8 `}
          >
            <div className="w-full text-pinkText flex items-center justify-center" onClick={handleHomeDropdownToggle}>
            <Link onClick={()=> setIsMenuOpen(false)} to="/" className="  font-bold text-xl  justify-center">Home
              

            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            
          </div>

          {/* Dropdown Menu */}
          {isHomeDropdownOpen && (
              <div className="bg-customPurple   w-full text-center rounded-lg shadow-lg">
                <Link onClick={()=> setIsMenuOpen(false)} to="#" className="block  px-4 py-2  hover:bg-gray-400 ">Creative Agency</Link>
                <Link onClick={()=> setIsMenuOpen(false)} to="/portfolio" className="block px-4 py-2 hover:bg-gray-400 ">Personal Portfolio</Link>
                <Link onClick={()=> setIsMenuOpen(false)} to="/digital-agency" className="block px-4 py-2  hover:bg-gray-400">Digital Agancy</Link>
              </div>
            )}

           
                <Link
                to="/aboutus"
                className="text-pinkText w-full text-xl font-bold text-center py-2 rounded-md  block md:inline-block"
                onClick={toggleNav}
                
              >
                About Us
              </Link>
           

              <div className="w-full flex items-center text-pinkText  justify-center " onClick={handlePagesDropdownToggle}>
            <Link to="/" className=" font-bold text-xl ">Pages
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            
          </div>

          {/* Dropdown Menu */}
          {isPagesDropdownOpen && (
              <div className="bg-customPurple  mt-2 w-full text-center rounded-lg shadow-lg">
              <Link onClick={()=> setIsMenuOpen(false)} to="#" className="block  px-4 py-2  hover:bg-gray-400 ">About me</Link>
              <Link onClick={()=> setIsMenuOpen(false)} to="#" className="block px-4 py-2 hover:bg-gray-400 ">Our Team</Link>
              <Link onClick={()=> setIsMenuOpen(false)} to="/team-details" className="block px-4 py-2  hover:bg-gray-400">Team Details</Link>
              <Link onClick={()=> setIsMenuOpen(false)} to="#" className="block px-4 py-2  hover:bg-gray-400">Project Details</Link>
              <Link onClick={()=> setIsMenuOpen(false)} to="#" className="block px-4 py-2  hover:bg-gray-400">Service Details</Link>
              <Link onClick={()=> setIsMenuOpen(false)} to="/contactus" className="block px-4 py-2  hover:bg-gray-400">Contact us</Link>
            </div>
            )}

          <div className="w-full flex items-center justify-center text-pinkText" onClick={handleNewsDropdownToggle}>
            <Link to="/" className=" font-bold text-xl  ">News
              
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            
          </div>
          {/* Dropdown Menu */}
          {isNewsDropdownOpen && (
              <div className="bg-customPurple  mt-2 w-full text-center rounded-lg shadow-lg">
                <Link onClick={()=> setIsMenuOpen(false)} to="/blog" className="block  px-4 py-2  hover:bg-gray-400 ">Our Blog</Link>
                <Link to="/blog-details" onClick={()=> setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-400 ">Blog Details</Link>
              </div>
            )}
          </div>
         
           
        </>
       
      )
     }
    </header>
  );
};

export default Header;







