"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center h-[calc(100vh-130px)] min-h-[400px] rounded-lg m-3 sm:m-4 shadow-2xl"
      style={{ backgroundImage: 'url("/images/home/banner.jpg")' }}
    >
      <div className="bg-black bg-opacity-60 h-full flex flex-col items-center justify-center rounded-lg px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-[#8fae15] text-3xl sm:text-6xl font-extrabold tracking-tight">
            Find Your Dream Land/Property
          </h1>
          <p className="text-white text-xl sm:text-2xl mt-6 font-medium tracking-wide">
            Discover prime locations, secure investments, and trusted partnerships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row text-center gap-4"
        >
          <Link href={"/projects"} className="bg-[#8fae15] text-white text-md sm:text-lg px-6 py-3 rounded-full hover:bg-[#657b0e] transition-all">
            Explore More
          </Link>
          <Link href={"/contact"} className="bg-white border border-[#657b0e] text-[#657b0e] text-md sm:text-lg px-6 py-3 rounded-full hover:text-white hover:bg-[#657b0e] transition-all">
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
