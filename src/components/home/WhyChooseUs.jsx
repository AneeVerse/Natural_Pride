// components/WhyChooseUs.js
import { FaCheckCircle } from 'react-icons/fa';

const reasons = [
  "Trusted by 500+ Clients",
  "Prime Locations Available",
  "Transparent Deals",
  "Legal Assistance"
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white rounded-lg m-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <ul className="space-y-4">
          {reasons.map((reason, index) => (
            <li key={index} className="flex justify-center items-center space-x-2 p-2 bg-gray-50 rounded-full shadow-sm">
              <FaCheckCircle className="text-green-500" />
              <span className="text-lg">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
