// components/Testimonials.js
const testimonials = [
  {
    name: "John Doe",
    review: "Amazing service! I found the perfect property thanks to this platform.",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    review: "Highly recommend for anyone looking for prime land! They made the whole process easy and smooth.",
    location: "London, UK",
  },
  {
    name: "Arjun Patel",
    review: "A professional team that really understands the real estate market. I’m very happy with my purchase.",
    location: "Mumbai, India",
  },
  {
    name: "Maria Garcia",
    review: "Exceptional customer service and a great selection of properties. Highly satisfied!",
    location: "Madrid, Spain",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-xl m-6">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-green-800 tracking-wide mb-12">
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
