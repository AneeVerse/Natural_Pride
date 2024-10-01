// components/Testimonials.js
const testimonials = [
    {
      name: "John Doe",
      review: "Amazing service! I found the perfect property thanks to this platform.",
    },
    {
      name: "Jane Smith",
      review: "Highly recommend for anyone looking for prime land!",
    }
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-16 bg-gray-100 rounded-lg m-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                <p className="text-lg italic mb-2">"{testimonial.review}"</p>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  