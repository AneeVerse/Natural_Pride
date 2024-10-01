import { FaCheckCircle, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

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

        {/* Team Section */}
        <section className="bg-gray-100 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaUserCircle className="text-6xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="mt-2 text-gray-700">John brings over 15 years of experience in the real estate industry and is known for his dedication to client success.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaUserCircle className="text-6xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Sales</p>
              <p className="mt-2 text-gray-700">Jane leads the sales team with a passion for finding the perfect properties for our clients.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaUserCircle className="text-6xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600">Senior Property Consultant</p>
              <p className="mt-2 text-gray-700">Mike is an expert in commercial properties and has been with us for over 8 years.</p>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-green-500 text-3xl mb-4" />
              <p className="text-gray-700 text-lg">&quot;I had a wonderful experience working with this company. They found me the perfect home in a prime location and made the entire process seamless!&quot;</p>
              <p className="mt-4 font-bold text-gray-800">- Sarah Williams</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-green-500 text-3xl mb-4" />
              <p className="text-gray-700 text-lg">&quot;Their professionalism and dedication were evident throughout the entire process. I highly recommend them for any property needs!&quot;</p>
              <p className="mt-4 font-bold text-gray-800">- Michael Brown</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-green-500 text-3xl mb-4" />
              <p className="text-gray-700 text-lg">&quot;Great service! They understood my requirements and helped me invest in the best property. I&apos;ll definitely work with them again!&quot;</p>
              <p className="mt-4 font-bold text-gray-800">- Emily Davis</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
