import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa' 

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() =>{
        fetch("/api/posts").then(res => res.json()).then(data => setPopularBlogs(data.slice(0,15)))
    },[])

    // console.log(popularBlogs); 
    
  return (
    <div className='shadow-sm shadow-gray-500 rounded cursor-pointer'>
        {/* Latest Blogs */}
        <div className='py-4'>
            <h3 className='text-2xl font-semibold px-5 text-orange-500'>Latest Blogs</h3>
            <div className=''>
                {
                popularBlogs.slice(0,5).map((blog) => (
                    <div key={blog.id} className='px-4 py-2 rounded-md mx-4 my-4 bg-[#181818]'>
                        <h4 className='text-md'>{blog.title}</h4>
                        <Link to="/" className='font-medium text-base pb-2 py-1 hover:text-orange-500 inline-flex items-center'>Read now <FaArrowRight className='mt-1 ml-2' /> </Link>
                    </div>
                ))
                }
            </div>
        </div>

        {/* Popular Blogs */}
        <div className='py-4'>
            <h3 className='text-2xl font-semibold px-5 text-orange-500'>Popular Blogs</h3>
            <div className=''>
                {
                popularBlogs.slice(6,10).map((blog) => (
                    <div key={blog.id} className='px-4 py-2 rounded-md mx-4 my-4 bg-[#181818]'>
                        <h4 className='text-md'>{blog.title}</h4>
                        <Link to="/" className='font-medium text-base pb-2 py-1 hover:text-orange-500 inline-flex items-center'>Read now <FaArrowRight className='mt-1 ml-2' /> </Link>
                    </div>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar