import React from 'react'
import { FaMailchimp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const ContactCard = ({ contact }) => {
    const IconCSS = "text-5xl text-orange-500"; // Add any necessary CSS classes here
    const icons = [<FaMailchimp className={IconCSS} />, <IoCallOutline className={IconCSS} />, <FaMapLocation className={IconCSS} />];
    return (
        <div className=''>
            <h4 className='text-xl font-medium uppercase'>Contact Info</h4>
            {contact.map((info, index) => (
                <div key={index}>
                    <ul className='mt-6'>
                        <li className='flex items-center gap-5 mb-10 pb-5'>
                            <div className='bg-[#202020] py-3 px-3 rounded-2xl'>
                                <i>{icons[index]}</i>
                            </div>
                            <div>
                                <h3 className='text-orange-500 tracking-wide font-bold'>{info.title}</h3>
                                {info.data.slice(0, 2).map((dataItem, dataIndex) => (
                                    <p className='text-md' key={dataIndex}>{dataItem}</p>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ContactCard