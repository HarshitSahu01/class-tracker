import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { default as logo } from "../assets/logo.svg";
import { TbMapSearch } from "react-icons/tb";
const navElems = [
  { path: '/home', name: 'Home' },
  { path: '/AvailableClassRoom', name: 'Available Classrooms' },
  { path: '/contact', name: 'Contact Us' },
  { path: '/Maps', name: <TbMapSearch /> },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-4 text-2xl ">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="font-medium text-[#5f5f5f] text-xl ml-2" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            CLASS TRACKER
          </span>
        </Link>
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav className="hidden lg:flex flex-1 justify-end space-x-8 mr-4 text-2xl ">
        {navElems.map(
          elem => <Link to={elem.path} className="text-[#5f5f5f] hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            {elem.name}
          </Link>
        )}
      </nav>

      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navElems.map(
              elem => <Link to={elem.path} className="text-[#5f5f5f] hover:text-blue-600 transition-colors duration-200" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                {elem.name}
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;