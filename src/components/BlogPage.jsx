import React, { useEffect } from 'react'
import { useState } from 'react';
import BlogCard from './Card/BlogCard';
import axios from 'axios';
import Pagination from './Pagination';
import CategorySelection from './Card/CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blog per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  


  //   useEffect(() => {
  //     axios.get('http://127.0.0.1:8000/api/posts/')
  //         .then(response => {
  //             setBlogs(response.data);
  //             // console.log(typeof response.data);
  //             // console.log(response.data);
  //         })
  //         .catch(error => {
  //             console.error('There was an error fetching the posts!', error);
  //         });
  // }, []);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `/api/posts?page=${currentPage}&limit=${pageSize}`;
      // let url = "http://127.0.0.1:8000/api/posts";

      // filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`
      }
      // console.log(url);

      const response = await fetch(url);
      const data = await response.json();
      // console.log("Loading..");
      // console.log(data);
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory])

  // page change btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

    // category change btn
  const handleCategoryChange = (category) => {
    // console.log(category);
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  return (
    <div>
      {/* category section */}
      <div className='my-4'>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      </div>

      {/* blogcards section */}
      <div className='grid grid-cols-3 gap-8'>
        {/* blog cards components */}
        <div className='col-span-2'>
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
        </div>

        {/* sidebar components */}
        <div className='col-span-1'>
          <SideBar />
        </div>
      </div>

      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default BlogPage