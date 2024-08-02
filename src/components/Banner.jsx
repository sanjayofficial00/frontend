import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='mb-20 bg-[#181818] rounded-3xl py-10 px-5'>
        <div className='text-white text-center'>
            <h1 className='text-4xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Our Blogs</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything get to started, from helpful tips and tutorials</p>
            <div>
                <Link to="blogs" className='font-medium text-lg lg:text-xl hover:text-orange-500 inline-flex items-center'>Learn more <FaArrowRight className='mt-1 ml-2' /> </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner