"use client";

import Link from "next/link";

const projects = [
    {
        id: 1,
        image: "/images/projects/project1.jpg",
        location: "City A, Region X",
        size: "500 sq. yards",
        price: "$500,000",
        description: "A prime residential land located in the heart of City A. Ideal for building your dream home."
    },
    {
        id: 2,
        image: "/images/projects/project2.jpg",
        location: "City B, Region Y",
        size: "750 sq. yards",
        price: "Contact for Price",
        description: "A spacious commercial property located in City B. Perfect for businesses and investment."
    },
    {
        id: 3,
        image: "/images/projects/project3.jpg",
        location: "City C, Region Z",
        size: "300 sq. yards",
        price: "$300,000",
        description: "An agricultural land perfect for farming, situated in the peaceful outskirts of City C."
    },
    {
        id: 4,
        image: "/images/projects/project4.jpg",
        location: "City D, Region W",
        size: "1,000 sq. yards",
        price: "$1,000,000",
        description: "Luxurious residential land with stunning views in City D. Ideal for high-end developments."
    },
    {
        id: 5,
        image: "/images/home/banner.jpg",
        location: "City E, Region V",
        size: "400 sq. yards",
        price: "$400,000",
        description: "A commercial land opportunity in City E, surrounded by bustling businesses and amenities."
    },
];

export default function ProjectListings() {
    return (
        <section className="py-6 sm:py-12 px-4 sm:px-12 bg-gray-50 rounded-lg m-4 shadow-lg">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-500">Available Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
                            <img src={project.image} alt={project.location} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-green-600">{project.location}</h3>
                                <p className="text-sm text-gray-600">Size: {project.size}</p>
                                <p className="text-sm text-gray-600">Price: {project.price}</p>
                                <p className="text-gray-700 mt-4">{project.description}</p>
                                <Link href={"/projects/"+project.id} className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all">
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
