// components/ProjectListings.js
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
  ];
  
  export default function ProjectListings() {
    return (
      <section className="py-8 bg-white rounded-lg m-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Available Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.location} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.location}</h3>
                  <p className="text-sm text-gray-600">Size: {project.size}</p>
                  <p className="text-sm text-gray-600">Price: {project.price}</p>
                  <p className="text-gray-700 mt-4">{project.description}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all">
                    View More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  