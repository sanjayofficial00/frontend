import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const BlogCard = ({blogs, currentPage, selectedCategory, pageSize}) => {
    // console.log(blogs.filter((blogs) => !selectedCategory || blogs.category === selectedCategory ));  
    const filteredBlogs = blogs.filter((blogs) => !selectedCategory || blogs.category === selectedCategory).slice((currentPage -1) *pageSize, currentPage * pageSize);
    // console.log(filteredBlogs);
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {
            filteredBlogs.map((blog) => (
                <Link key={blog.id} className='p-5 shadow-sm shadow-gray-500 rounded cursor-pointer'>
                    {/* {console.log(blog.category)} */}
                    <div>
                        <img src={blog.image} alt="" />
                    </div>
                    <h3 className='mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer'>{blog.title}</h3>
                    <p className='flex items-center mb-2'><FaUser className='mx-2 text-center text-sm' />{blog.author}</p>
                    <p className='text-gray-500 text-sm'>Published: {blog.published_date}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default BlogCard