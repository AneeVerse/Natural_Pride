"use client"
// components/ProjectGallery.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/home/banner.jpg',
  '/images/projects/project1.jpg',
  '/images/projects/project3.jpg',
  '/images/projects/project4.jpg',
];

export default function ProjectGallery() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <section className="bg-gray-100 rounded-lg m-4">
      <div className="container mx-auto">
        <img src={currentImage} alt="Project view" className="w-full h-96 object-cover rounded-lg mb-4" />
        <div className="flex space-x-4">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-20 h-20 rounded-md cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
