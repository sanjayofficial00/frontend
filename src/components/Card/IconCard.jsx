import React from 'react'

import { CiCamera } from "react-icons/ci";
import { PiPencilCircleLight } from "react-icons/pi";
import { IoColorFilterOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";


const IconCard = ({type}) => {
    let content;
    if (type === "Service") {
        content = <div className='flex items-center justify-center py-10 px-10 gap-6 md:gap-14'>
            <i><CiCamera className='text-3xl md:text-5xl' /></i>
            <i><PiPencilCircleLight className='text-3xl md:text-5xl' /></i>
            <i><IoColorFilterOutline className='text-3xl md:text-5xl' /></i>
            <i><FaLaptopCode className='text-3xl md:text-5xl' /></i>
        </div>
    }
    else if(type === "Profile") {
        content = <div className='border-[0.4px] border-[#2B2B2B] bg-[#1c1c1c] flex items-center justify-center rounded-[2.5vw] px-5 py-5 my-2 gap-5   '>
            <i className='rounded-full border-[0.4px] border-[#2B2B2B] px-2 py-2'><FiGithub className='text-4xl md:text-5xl' /></i>
            <i className='rounded-full border-[0.4px] border-[#2B2B2B] px-2 py-2'><CiLinkedin className='text-4xl md:text-5xl' /></i>
            <i className='rounded-full border-[0.4px] border-[#2B2B2B] px-2 py-2'><FaWhatsapp className='text-4xl md:text-5xl' /></i>
        </div>
    }

    return (
        <>
            {content}
        </>
    )
}

export default IconCard