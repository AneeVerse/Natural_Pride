export default function ProjectPriceArea() {
  return (
    <section className="py-8 px-12 bg-white rounded-lg m-4 shadow-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Price & Area Details</h2>
      <div className="flex justify-between items-center bg-gray-50 p-6 rounded-lg shadow-md">
        <div>
          <h3 className="text-xl font-semibold text-green-700">Price:</h3>
          <p className="text-2xl font-bold text-gray-800">$500,000</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-green-700">Area:</h3>
          <p className="text-2xl font-bold text-gray-800">500 sq. yards</p>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-600">
        <p className="text-sm">
          *Prices are subject to change. Please contact us for the latest information.
        </p>
      </div>
    </section>
  );
}
