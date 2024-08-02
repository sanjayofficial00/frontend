import React from 'react'
import ContactCard from '../components/Card/ContactCard'
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import FormCard from '../components/Card/FormCard';

const Contact = () => {
  const Info = [
    {
      title: "Mail Us",
      data: ["sanjayofficial00.com", "info@sanjayofficial00.xyz"],
    },
    {
      title: "Contact Us",
      data: ["8929796276", "7839796276"],
    },
    {
      title: "Location",
      data: ["Punjab", "Delhi"],
    }
  ]
  return (
    <section className='pt-[130px] md:pt-[200px] py-[40px] px-[15px] md:px-[30px] lg:px-[20px] xl:px-[120px]'>
      <div className=' grid grid-cols-3 gap-4'>
        <div className='col-span-1'>
          <ContactCard contact={Info} />
          <h3 className='text-xl uppercase font-medium '>Social Info</h3>
          <div className='flex py-7 gap-5'>
            <i className='rounded-full border-[0.4px] border-[#2B2B2B] px-5 py-5 bg-[#202020]'><FiGithub className='text-4xl md:text-4xl' /></i>
            <i className='rounded-full border-[0.4px] border-[#2B2B2B] px-5 py-5 bg-[#202020]'><CiLinkedin className='text-4xl md:text-4xl' /></i>
            <i className='rounded-full border-[0.4px] border-[#2B2B2B] px-5 py-5 bg-[#202020]'><FaWhatsapp className='text-4xl md:text-4xl' /></i>
          </div>
        </div>
        <div className='col-span-2'>
          <FormCard/>
        </div>
      </div>
    </section>
  )
}

export default Contact