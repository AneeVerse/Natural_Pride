"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { href: "/", label: "Home", icon: <FaHome className="mr-2 text-lg" /> },
  { href: "/about", label: "About Us", icon: <FaInfoCircle className="mr-2 text-lg" /> },
  { href: "/projects", label: "Projects", icon: <FaProjectDiagram className="mr-2 text-lg" /> },
  { href: "/contact", label: "Contact Us", icon: <FaPhone className="mr-2 text-lg" /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow border rounded-lg m-3 sm:m-4">
      <div className="container mx-auto flex justify-between items-center h-[90px] px-6">
        <Link href="/" className="text-2xl font-bold text-[#8fae15] flex items-center gap-2">
          <img src="/logo/logo.jpg" alt='logo' className='w-16 h-16 -mb-2 self-center' />
          <span>{"Nature Pride".toUpperCase()}</span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-3xl text-[#8fae15]" /> : <FaBars className="text-3xl text-[#8fae15]" />}
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="flex items-center text-gray-700 hover:text-[#8fae15] transition-colors duration-300">
              {link.icon} {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 p-6"
          initial={{ x: '-100%' }} // Slide in from the left
          animate={{ x: 0 }} // Slide to the position
          exit={{ x: '-100%' }} // Slide back out
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }} // Smooth transition
        >
          <div className="flex justify-between items-center mb-4">
            <Link href="/" className="text-2xl font-bold text-[#8fae15] flex items-center gap-2">
              <img src="/logo/logo.jpg" alt='logo' className='w-10 h-10' />
              <span>{"Natural Pride".toUpperCase()}</span>
            </Link>
            <button onClick={toggleMenu} className="text-[#8fae15] text-3xl">
              <FaTimes />
            </button>
          </div>

          {/* Sidebar Navigation Links */}
          <div className="flex flex-col gap-4 mt-[40px]">
            {navLinks.map(link => (
              <Link key={link.label} href={link.href} className="flex bg-green-50 p-5 rounded-lg items-center text-gray-700 hover:text-[#8fae15] transition-colors duration-300" onClick={toggleMenu}>
                {link.icon} {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
