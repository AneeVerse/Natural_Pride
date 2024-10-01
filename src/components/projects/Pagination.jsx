// components/Pagination.js
export default function Pagination({ currentPage, totalPages }) {
    return (
      <div className="flex justify-center space-x-4 mt-8">
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full" disabled={currentPage === 1}>
          Previous
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            className={`px-4 py-2 rounded-full ${page + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          >
            {page + 1}
          </button>
        ))}
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full" disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  }
  