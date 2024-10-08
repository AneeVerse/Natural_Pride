import { FaCheckCircle, FaUserCircle } from 'react-icons/fa';

// Array of client images
const clientImages = [
  "/images/home/clients/client1.jpg",
  "/images/home/clients/client2.jpg",
  "/images/home/clients/client3.jpg",
  "/images/home/clients/client4.jpg",
  "/images/home/clients/client5.jpg",
  "/images/home/clients/client6.jpg",
  "/images/home/clients/client7.jpg",
];

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-6 sm:py-12 px-3 sm:px-12">
        {/* Company Information */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-green-500">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Our Company</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We are a leading real estate firm with over a decade of experience in the land and property market.
            Our vision is to help people find the perfect property to meet their needs, whether for residential,
            commercial, or investment purposes. With a strong commitment to integrity, transparency, and customer
            satisfaction, we are driven by the mission to provide the highest quality service in real estate.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our dedicated team of professionals is always ready to assist you in navigating the complexities of
            the real estate market, ensuring a smooth and enjoyable experience for all our clients.
          </p>
        </section>

        {/* Experience and Credentials */}
        <section className="bg-gray-100 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Experience & Credentials</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li><FaCheckCircle className="inline-block text-green-500 mr-2" /> 10+ years of experience in real estate</li>
            <li><FaCheckCircle className="inline-block text-green-500 mr-2" /> 200+ successful projects sold</li>
            <li><FaCheckCircle className="inline-block text-green-500 mr-2" /> Trusted by 500+ satisfied clients</li>
            <li><FaCheckCircle className="inline-block text-green-500 mr-2" /> Specializing in residential, commercial, and agricultural properties</li>
            <li><FaCheckCircle className="inline-block text-green-500 mr-2" /> Industry awards for excellence in service</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe in building trust and long-lasting relationships with our clients. Our professional team of
            real estate experts ensures that you get access to the best properties, in the best locations, at the best prices.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-gray-700">
            <li>Comprehensive market knowledge</li>
            <li>Transparent pricing with no hidden costs</li>
            <li>Dedicated customer support throughout the process</li>
            <li>Customized services to meet your needs</li>
            <li>Post-purchase assistance and follow-up</li>
          </ul>
        </section>

        {/* Happy Client Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Happy Clients</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clientImages.map((image, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-4">
                <img src={image} alt={`Client ${index + 1}`} className="w-[260px] h-40 sm:h-56 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-100 rounded-lg shadow-lg p-8 mb-8">
  <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Director</h2>
  <div className="md:flex md:items-center bg-white p-6 rounded-lg shadow-lg">
    {/* Image Section */}
    <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
      <img
        src="/images/director.jpg" // Replace with the actual path to the director's image
        alt="John Doe"
        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
      />
    </div>
    
    {/* Text Section */}
    <div className="md:w-2/3 md:ml-6 text-center md:text-left">
      <h3 className="text-2xl font-semibold text-gray-800">Kishore More</h3>
      <p className="text-gray-600">Director</p>
      <p className="mt-2 text-gray-700">
        Kishore More has over 20+ years of experience in the real estate industry. As the director of our company, his 
        leadership, vision, and expertise have been instrumental in shaping our growth. Kishore More is deeply committed to 
        building a team that thrives on integrity, transparency, and client satisfaction. His in-depth knowledge 
        of the property market allows him to provide insightful guidance and strategic advice to both the team and 
        clients.
      </p>
      <p className="mt-2 text-gray-700">
        Under Kishore More leadership, our company has successfully completed numerous high-profile real estate projects, 
        delivering results that exceed client expectations. His passion for the real estate sector, coupled with 
        his strong dedication to community development, makes him a respected figure in the industry.
      </p>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
