"use client";
// components/FeaturedProjects.js
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { id: 1, title: "Land Parcel 1", image: "/images/projects/project1.jpg" },
  { id: 2, title: "Land Parcel 2", image: "/images/projects/project2.jpg" },
  { id: 3, title: "Land Parcel 3", image: "/images/projects/project3.jpg" },
];

export default function FeaturedProjects() {
  return (
    <section className="py-6 sm:py-12 px-4 sm:px-12 bg-gradient-to-tr from-white to-green-50 rounded-xl shadow-xl m-3 sm:m-6">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl sm:text-5xl font-extrabold text-green-800 tracking-wide mb-16">
          Discover Our Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative bg-white border-2 border-green-200 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              whileHover={{ scale: 1.07 }}
            >
              {/* Image with subtle overlay effect */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-t-2xl"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold text-[green-800] mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore premium land located in prime areas with excellent
                  growth potential.
                </p>
                <Link href={"/projects/f"} className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-all duration-200">
                  View More
                </Link>
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 bg-green-600 p-3 rounded-tl-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
