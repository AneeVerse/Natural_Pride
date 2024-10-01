// components/KeyFeatures.js
import { FaCheckCircle } from 'react-icons/fa';

const features = [
  "Close to Highway",
  "Water Supply Available",
  "Government Approved",
  "Peaceful Surroundings",
  "Proximity to Schools and Hospitals"
];

export default function ProjectKeyFeatures() {
  return (
    <section className="py-8 bg-white rounded-lg m-4">
      <h2 className="text-2xl font-bold mb-4">Key Features</h2>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2 p-4 bg-gray-50 rounded-full shadow-sm">
            <FaCheckCircle className="text-green-500" />
            <span className="text-lg">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
