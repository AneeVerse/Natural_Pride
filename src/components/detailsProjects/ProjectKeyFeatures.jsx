import { FaCheckCircle } from 'react-icons/fa';

const features = [
  "Close to Highway",
  "Water Supply Available",
  "Government Approved",
  "Peaceful Surroundings",
  "Proximity to Schools and Hospitals",
  "Well-Planned Layout",  // Added more features
  "24/7 Security Services",
  "Excellent Investment Potential"
];

export default function ProjectKeyFeatures() {
  return (
    <section className="py-20 px-12 bg-gradient-to-br from-green-100 via-green-50 to-white rounded-xl shadow-xl m-6">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-green-800 tracking-wide mb-12">
        Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((reason, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-white border-2 border-green-300 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaCheckCircle className="text-green-600 text-2xl mr-4" />
              <span className="text-lg font-medium text-gray-700">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}