// components/Header.js
import { FaHome, FaInfoCircle, FaProjectDiagram, FaPhone } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-md rounded-lg m-4">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">Logo</div>
        <nav className="flex gap-6">
          <a href="/" className="flex items-center">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="/about" className="flex items-center">
            <FaInfoCircle className="mr-2" /> About Us
          </a>
          <a href="/projects" className="flex items-center">
            <FaProjectDiagram className="mr-2" /> Projects
          </a>
          <a href="/contact" className="flex items-center">
            <FaPhone className="mr-2" /> Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
