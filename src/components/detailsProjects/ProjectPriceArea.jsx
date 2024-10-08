export default function ProjectPriceArea({price ,area}) {
  return (
    <section className="py-8 px-4 sm:px-12 bg-white rounded-lg m-4 shadow-sm">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Price & Area Details</h2>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-gray-50 p-6 rounded-lg shadow-md">
        <div>
          <h3 className="text-xl font-semibold text-green-700">Price:</h3>
          <p className="text-2xl font-bold text-gray-800">₹{price}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-green-700">Area:</h3>
          <p className="text-2xl font-bold text-gray-800">{area} </p>
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
