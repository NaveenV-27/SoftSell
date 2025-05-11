"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-blue-800 via-blue-900 to-red-600 p-4">
      <div className="md:w-3/5 w-full mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-1 text-shadow-blue-300 text-shadow-2xs">
          <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="4" rx="2" ry="2" /><line x1="2" x2="22" y1="20" y2="20" /></svg>
          <h1 className="text-blue-600 font-bold text-3xl">Soft<span className="text-red-600">Sell</span></h1>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1 md:gap-4 font-sans font-light text-white">
          <li><a href="#progress" className="hover:text-blue-200">How It Works</a></li>
          <li><a href="#info" className="hover:text-blue-200">Why Choose Us</a></li>
          <li><a href="#Reviews" className="hover:text-blue-200">Reviews</a></li>
          <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu List */}
      {isOpen && (
        <ul className="md:hidden mt-2 flex flex-col gap-2 px-4 text-white font-light">
          <li><a href="#progress" className="block py-2 hover:text-blue-200">How It Works</a></li>
          <li><a href="#info" className="block py-2 hover:text-blue-200">Why Choose Us</a></li>
          <li><a href="#Reviews" className="block py-2 hover:text-blue-200">Reviews</a></li>
          <li><a href="#contact" className="block py-2 hover:text-blue-200">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
