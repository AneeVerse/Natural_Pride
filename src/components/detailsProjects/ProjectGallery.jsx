"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// const images = [
//     '/images/home/banner.jpg',
//     '/images/projects/project1.jpg',
//     '/images/projects/project3.jpg',
//     '/images/projects/project4.jpg',
//     '/images/projects/project2.jpg',  // Added another image for variety
//     '/images/home/banner.jpg',  // Added another image for variety
// ];

export default function ProjectGallery({images}) {
    const [currentImage, setCurrentImage] = useState(images[0]);
 

    return (
        <section className="bg-gray-50 rounded-lg m-3 sm:m-4 p-3 sm:p-6 shadow-lg">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-4">Project Gallery</h2>
                <img 
                    src={currentImage} 
                    alt="Project view" 
                    className="w-full h-80 sm:h-96 md:h-[540px] object-cover rounded-lg mb-4 shadow-md transition-transform duration-300"
                />
                <div className="flex lg:justify-center gap-4 overflow-x-auto"
                
                style={{ scrollbarWidth: 'none', 'msOverflowStyle': 'none' }} // Firefox and Internet Explorer
                >
                    {images && images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            width={80}
                            height={80}
                            alt={`Gallery ${index + 1}`}
                            className="w-20 h-20 rounded-md object-cover shadow-sm cursor-pointer border-2 border-transparent transition-all duration-200"                          
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


