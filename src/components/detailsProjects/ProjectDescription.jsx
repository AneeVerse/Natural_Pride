export default function ProjectDescription() {
  return (
    <section className="py-8 px-12 bg-white rounded-lg m-4 shadow-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Project Description</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This land/property is located in the prime area of City A, offering an ideal opportunity
        for residential development. Surrounded by lush greenery, the property is perfect for
        building your dream home or for investment purposes. It is close to essential amenities,
        including schools, hospitals, and shopping centers.
      </p>
      <p className="text-gray-700 leading-relaxed">
        The area is known for its peaceful environment and excellent connectivity to major roads
        and highways, making it convenient for commuters. Whether you&apos;re looking to settle down or
        invest in real estate, this property offers great value.
      </p>
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-700 mb-2">Key Highlights:</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Close proximity to essential amenities</li>
          <li>Peaceful and green surroundings</li>
          <li>Excellent connectivity to major roads</li>
          <li>Ideal for residential or investment purposes</li>
        </ul>
      </div>
    </section>
  );
}
