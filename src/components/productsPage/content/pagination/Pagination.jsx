import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    paginate(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <nav className="flex items-center justify-center border-t mt-5 pt-8 border-gray-200 bg-white sm:px-6">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              disabled={currentPage === number}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 ${
                currentPage === number ? "bg-gray-100" : "hover:bg-gray-50"
              } focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
            >
              {number}
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Pagination;
