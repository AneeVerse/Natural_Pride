"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen rounded-lg m-4 shadow-2xl"
      style={{ backgroundImage: 'url("/images/home/banner.jpg")' }}
    >
      <div className="bg-black bg-opacity-60 h-full flex flex-col items-center justify-center rounded-lg px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-[#8fae15] text-6xl font-extrabold tracking-tight">
            Find Your Dream Land/Property
          </h1>
          <p className="text-white text-2xl mt-6 font-medium tracking-wide">
            Discover prime locations, secure investments, and trusted partnerships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 flex space-x-4"
        >
          <Link href={"/projects"} className="bg-[#8fae15] text-white text-lg px-6 py-3 rounded-full hover:bg-[#657b0e] transition-all">
            Explore More
          </Link>
          <Link href={"/contact"} className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition-all">
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-white text-sm"
        >
          <p className="italic">
            “Your trusted partner in real estate excellence.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
