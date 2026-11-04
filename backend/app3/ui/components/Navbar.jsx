import React from 'react'
import { NavLink } from 'react-router'
import { Home, Users, Info } from 'lucide-react'

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Employees', path: '/employees', icon: Users },
    { name: 'About Us', path: '/about-us', icon: Info },
  ]

  return (
    <nav className="w-full flex justify-center pt-6 px-4">
      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-md">
        {links.map((link) => {
          const Icon = link.icon

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`
              }
            >
              <Icon size={18} />
              <span>{link.name}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar