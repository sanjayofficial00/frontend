import React from 'react'

const Pagination = ({onPageChange, blogs, currentPage, pageSize}) => {
    const totalPage = Math.ceil(blogs.length / pageSize);
    // console.log(totalPage);
    const renderPaginationLinks = () => {
        return Array.from({length: totalPage}, (_,index) => index + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a className='mx-2 px-1 bg-[#323232] hover:bg-orange-500 border border-gray-500 rounded-md hover:text-black' href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    };
  return (
    <ul className='flex flex-wrap justify-center items-center my-8'>
        <li className='bg-[#323232] font-bold hover:bg-white hover:text-orange-500 rounded-md px-2 py-1'>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} >Previous</button>
        </li>
        <div className='flex px-10'>
            {renderPaginationLinks()}
        </div>
        <li className='bg-[#323232] font-bold hover:bg-white hover:text-orange-500 rounded-md px-2 py-1'>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPage}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination