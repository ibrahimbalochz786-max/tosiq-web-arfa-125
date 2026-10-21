import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    const links = [
        {url: "/", text: "Home"},
        {url: "/about", text: "About"},
    ]
  return (
    <div className='rounded-lg shadow p-3 my-5 mx-auto bg-white w-fit flex items-center gap-3'>
        {
            links.map((link, i) => {
                return (
                    <NavLink 
                    key={i} 
                    to={link.url} 
                    className={({ isActive }) => isActive ? "bg-black py-1 px-3 rounded text-white" :  " py-1 px-3 rounded" }>
                        {link.text}
                    </NavLink>
                )
            })
        }
        
    </div>
  )
}

export default Navbar