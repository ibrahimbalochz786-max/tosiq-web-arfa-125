import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const links = [
    { url: '/', text: 'Home' },
    { url: '/users', text: 'Users' }
  ]
  return (
    <div className='w-fit flex items-center gap-3 rounded-lg bg-white shadow p-3 mx-auto my-5'>
      {links.map((link, i) => {
        return (
          <NavLink
            to={link.url}
            className={({ isActive }) =>
              isActive ? 'bg-slate-900 text-slate-100 py-2 px-4 rounded-lg' : ''
            }
          >
            {link.text}
          </NavLink>
        )
      })}
    </div>
  )
}

export default Navbar
