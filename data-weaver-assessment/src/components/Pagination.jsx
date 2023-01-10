import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {


  return (
    <div className='py-2 text-center'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing 
          <span className='font-medium'> {currentPage * postsPerPage - 10} </span>
          to
          <span className='font-medium'> {currentPage * postsPerPage} </span>
          of
          <span className='font-medium'> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className='block'></nav>
      <div>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <a
            onClick={() => {
              paginateBack();
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</span>
          </a>

          <a
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {currentPage} </span>
          </a>

          <a
            onClick={() => {
              paginateFront();
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</span>
          </a>
        </nav>
      </div>
    </div>
  );
}