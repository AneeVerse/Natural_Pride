"use client";
export default function ProjectCategories() {
    const categories = ["Residential", "Commercial", "Agricultural", "Industrial", "Mixed-Use", "Luxury Properties"];

    return (
        <section className="px-3 py-12 bg-gray-50 rounded-lg m-4 shadow-lg">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Project Categories</h2>
                <div
                    className="flex p-3 lg:justify-center overflow-x-auto gap-4"
                    style={{ scrollbarWidth: 'none', 'msOverflowStyle': 'none' }} // Firefox and Internet Explorer
                >
                    {/* Hide scrollbar for WebKit browsers */}
                    <style jsx>{`
                        div::-webkit-scrollbar {
                            display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
                        }
                    `}</style>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className="bg-white shadow-lg rounded-full px-6 min-w-fit py-3 text-gray-800 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <p className="mt-4 text-center text-gray-600 text-lg">
                    Explore our diverse range of projects tailored to meet your needs. Click on a category to learn more!
                </p>
            </div>
        </section>
    );
}
