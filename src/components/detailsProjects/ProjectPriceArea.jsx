// components/PriceArea.js
export default function ProjectPriceArea() {
    return (
      <section className="py-8 bg-gray-100 rounded-lg m-4">
        <h2 className="text-2xl font-bold mb-4">Price & Area Details</h2>
        <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
          <div>
            <h3 className="text-xl font-semibold">Price:</h3>
            <p className="text-lg text-gray-700">$500,000</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Area:</h3>
            <p className="text-lg text-gray-700">500 sq. yards</p>
          </div>
        </div>
      </section>
    );
  }
  