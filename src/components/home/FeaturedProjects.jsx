"use client"
// components/FeaturedProjects.js
// components/FeaturedProjects.js
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Land Parcel 1', image: '/images/projects/project1.jpg' },
  { id: 2, title: 'Land Parcel 2', image: '/images/projects/project2.jpg' },
  { id: 3, title: 'Land Parcel 3', image: '/images/projects/project3.jpg' },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-gray-100 rounded-lg m-4">
      <h2 className="text-center text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
