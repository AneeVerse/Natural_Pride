// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-12 rounded-lg m-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Land & Property</h3>
          <p className="text-sm">
            We are committed to providing the best real estate services with a focus on customer satisfaction. Contact us to find your dream property today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition">About Us</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition">Projects</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition">About Us</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition">Projects</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link href="#" className="text-white hover:text-blue-600 transition">
              <FaFacebook size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-700 transition">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 flex justify-between items-center pt-4 text-sm text-center">
        <p>© 2024 Natural Pride. All Rights Reserved.</p>
        <Link href={"https://aneeverse.com/en/"} className="text-gray-400 mt-2 flex items-center gap-2"> <span>Managed & Designed By Aneeverse </span> 
        <Image src={"/logo/aneeverse-logo.png"} alt='aneeverse logo' width={20} height={20}/>
       </Link>
      </div>
    </footer>
  );
}
