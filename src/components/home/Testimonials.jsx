// components/Testimonials.js
const testimonials = [
  {
    name: "Pratik Yadav",
    review: "Great company..great Customer service Genuine and honest staff. Every person who is looking to invest in land must visit this land venture company.",
    location: "India",
  },
  {
    name: "Pushkar Dake",
    review: "They have amazing land properties, and the team is highly professional. Highly recommended for anyone looking for great investment opportunities in land!",
    location: "India",
  },
  {
    name: "Govind sah",
    review: "A professional team that really understands the real estate market. I’m very happy with my purchase.",
    location: "Mumbai, India",
  },
  {
    name: "Maria Garcia",
    review: "Exceptional customer service and a great selection of properties. Highly satisfied!",
    location: "India",
  }
];

export default function Testimonials() {
  return (
    <section className="py-6 sm:py-12 px-4 sm:px-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-xl m-3 sm:m-6">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-green-800 tracking-wide mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-green-300 rounded-3xl p-8 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <p className="text-lg italic text-gray-700 mb-4">
                &quot;{testimonial.review}&quot;
              </p>
              <h3 className="text-2xl font-bold text-green-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
