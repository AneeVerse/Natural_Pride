"use client";

import Link from "next/link";
import projects from "@/data/projects";

export default function ProjectListings() {
    return (
        <section className="py-6 sm:py-12 px-2 sm:px-12 m-2  sm:m-4 ">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#166534]">Available Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="px-3 py-6 sm:p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                                <p className="text-sm text-gray-600">Size: {project.area}</p> 
                                 <p className="text-sm text-gray-600">Price: ₹{project.price}</p>
                                <p className="text-gray-700 mt-4">{project.des}</p>
                                <Link href={"/projects/"+project.id} className=" mt-4 inline-block  px-6 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-all duration-200">
                                    View More Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
