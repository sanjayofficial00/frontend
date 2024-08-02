import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <section className='pt-[130px] md:pt-[200px] py-[40px] px-[15px] md:px-[30px] lg:px-[20px] xl:px-[120px]'>
      <div className='text-white text-center mb-20  '>
        <h1 className='text-4xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h1>
      </div>
      <BlogPage/>
    </section>
  )
}

export default Blogs