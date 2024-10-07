import { FaCheckCircle } from 'react-icons/fa';

export default function ProjectKeyFeatures({features}) {
  return (
    <section className="py-6 sm:py-12 px-4 sm:px-12 bg-gradient-to-br from-green-100 via-green-50 to-white rounded-xl shadow-md m-3 sm:m-6">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-green-800 tracking-wide mb-12">
        Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((reason, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-white border-2 border-green-300 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaCheckCircle className="text-green-600 min-w-fit text-2xl mr-4" />
              <span className="text-lg font-medium text-gray-700">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}