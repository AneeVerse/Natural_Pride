// components/ProjectCategories.js
export default function ProjectCategories() {
    const categories = ["Residential", "Commercial", "Agricultural", "Industrial"];
  
    return (
      <section className="py-8 bg-gray-100 rounded-lg m-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Project Categories</h2>
          <div className="flex justify-start space-x-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white shadow-md rounded-full px-6 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }
  