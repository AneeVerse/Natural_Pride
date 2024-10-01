"use client"
// components/Hero.js
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-cover bg-center h-screen rounded-lg m-4" style={{ backgroundImage: 'url("/images/home/banner.jpg")' }}>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center rounded-lg">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-white text-5xl font-bold text-center">
            Find Your Dream Land/Property
          </h1>
          <p className="text-white text-lg mt-4 text-center">
            Explore prime locations and trusted deals
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mx-2 hover:bg-blue-600 transition-all">
              Explore More
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full mx-2 hover:bg-green-600 transition-all">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
