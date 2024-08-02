import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import NavMenu from './Card/NavMenu';

const Footer = () => {
  return (
    <div className='mt-5 pt-5'>
      <div className='flex justify-center'>
      <a className='text-2xl text-white flex items-center font-bold hover:scale-110' href="/">Sanjay<span className='text-orange-500'>Kumar</span></a>
      </div>
      <div className='flex justify-center items-center my-10'>
        <NavMenu/>
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <div><FaRegCopyright /></div>
        <div>All rights reserved by</div>
        <div>Sanjay Kumar</div>
      </div>
    </div>
  )
}

export default Footer