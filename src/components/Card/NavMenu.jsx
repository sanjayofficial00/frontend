import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
    const navItems = [{ path: "/", link: "Home" },
        { path: "/about", link: "About" },
        { path: "/works", link: "Works" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" }
        ]
    return (
        <ul className='md:flex items-center  gap-12 text-lg hidden'>
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
        </ul>
    )
}

export default NavMenu