import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiYoutube } from "react-icons/ci";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import NavMenu from './Card/NavMenu';

const Header = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggelMenu = () => {
        setisMenuOpen(!isMenuOpen)
    }

    const navItems = [{ path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/works", link: "Works" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" }
    ]
    return (
        <header className='text-white bg-[#0F0F0F] fixed top-0 left-0 right-0 outline outline-[#161616] z-50'>
            {/* navitens for lg devices */}
            <nav className='px-4 py-6 max-w-6xl mx-auto flex justify-between items-center] border-white'>
                <a className='text-2xl text-white flex items-center font-bold hover:scale-110' href="/">Sanjay<span className='text-orange-500'>Kumar</span></a>
                <NavMenu/>
                {/* <ul className='md:flex items-center  gap-12 text-lg hidden'>
                    {navItems.map(({ path, link }) =>
                        <li className='hover:scale-105 hover:border-b-2 hover:border-orange-500' key={path}>
                            <NavLink to={path} className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }>{link}
                            </NavLink>
                        </li>
                    )}
                </ul> */}

                {/* menu icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/"><CiLinkedin className='text-2xl hover:text-orange-500 hover:scale-110' /></a>
                    <a href="/"><FaWhatsapp className='text-2xl hover:text-orange-500 hover:scale-110' /></a>
                    <a href="/"><PiTelegramLogoLight className='text-2xl hover:text-orange-500 hover:scale-110' /></a>
                    <a href="/"><CiYoutube className='text-2xl hover:text-orange-500 hover:scale-110' /></a>
                    <button className='bg-[#323232] px-4 py-2 font-medium rounded-3xl flex gap-3 text-lg items-center justify-center hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in hover:scale-105'><FaArrowRightFromBracket />Let's talk</button>
                </div>

                {/* mobile menu btn, display mobile screen */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggelMenu} className='cursor-pointer'>
                        {isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
                    </button>
                </div>
            </nav>
            {/* <div className='md:show'></div> */}
            {/* menu items only for mobile */}
            <div className='flex justify-center'>
                <ul className={`${isMenuOpen ? "md:hidden text-lg block space-y-2 mt-10 transition-all ease-out duration-150" : "hidden"}`}>
                    {navItems.map(({ path, link }) =>
                        <li className='flex items-center justify-center' key={path}>
                            <NavLink onClick={toggelMenu} to={path}>{link}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )
}

export default Header