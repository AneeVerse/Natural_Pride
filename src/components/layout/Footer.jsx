"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-3 sm:px-12 rounded-lg m-4">
      <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 place-content-center  text-center md:text-left">
        
        {/* Company Info */}
        <div>
        <div className='flex flex-col lg:flex-row gap-3 items-center mb-4 justify-center sm:justify-start'>
          <img src='/logo/logo.png' alt='nature pride logo' className='w-[46px] h-[46px] rounded-full'/>

          <h3 className="text-3xl font-bold text-[#8fae15]">Nature Pride Reality Pvt. Ltd.</h3>
          
        </div>
        <p className="text-sm">
            We are dedicated to offering the best real estate services with a focus on customer satisfaction. Explore our listings to find your dream property today.
          </p>
        </div>

        {/* Quick Links */}
        <div className=' place-self-center'>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-green-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 transition">About Us</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-green-400 transition">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Additional Quick Links */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="hover:text-green-400 transition">Blog</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-green-400 transition">FAQ</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-green-400 transition">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link>
            </li>
          </ul>
        </div> */}

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=61566460405792" className="text-white hover:text-blue-600 transition">
              <FaFacebook size={24} />
            </Link>
            {/* <Link href="#" className="text-white hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-700 transition">
              <FaLinkedin size={24} />
            </Link> */}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center pt-4 text-sm text-center">
        <p>© 2024 Nature Pride Reality Pvt. Ltd. All Rights Reserved.</p>
        <Link target="_blank" href="https://aneeverse.com/en/" className="text-gray-400 hover:text-green-400 mt-2 flex items-center gap-2"> 
          <span>Managed & Designed By Aneeverse</span> 
          <Image src="/logo/aneeverse-logo.png" alt='Aneeverse logo' width={20} height={20} />
        </Link>
      </div>
    </footer>
  );
}
