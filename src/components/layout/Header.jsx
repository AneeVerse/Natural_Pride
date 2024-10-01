"use client";
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaPhone } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow border rounded-lg m-4">
      <div className="container mx-auto flex justify-between items-center h-[90px] px-6">
        <Link href={"/"} className="text-2xl font-bold text-[#8fae15] flex items-center gap-2">
          <img src={"/logo/logo.jpg"} alt='logo' className='w-16 h-16 self-center'/>
         <span>{"Natural Pride".toUpperCase()}</span>         
         </Link>
        <nav className="flex gap-8">
          <Link href="/" className="flex items-center text-gray-700 hover:text-[#8fae15] transition-colors duration-300">
            <FaHome className="mr-2 text-lg" /> Home
          </Link>
          <Link href="/about" className="flex items-center text-gray-700 hover:text-[#8fae15] transition-colors duration-300">
            <FaInfoCircle className="mr-2 text-lg" /> About Us
          </Link>
          <Link href="/projects" className="flex items-center text-gray-700 hover:text-[#8fae15] transition-colors duration-300">
            <FaProjectDiagram className="mr-2 text-lg" /> Projects
          </Link>
          <Link href="/contact" className="flex items-center text-gray-700 hover:text-[#8fae15] transition-colors duration-300">
            <FaPhone className="mr-2 text-lg" /> Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
