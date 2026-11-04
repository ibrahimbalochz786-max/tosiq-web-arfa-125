import React from 'react'
import { Home, Users, Info, Cat, MessageSquareQuote, Mail } from 'lucide-react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-600">
              Employee<span className="text-gray-800">Hub</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Manage your workforce with ease.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-blue-600"
            >
              <Home size={16} />
              Home
            </Link>

            <Link
              to="/employees"
              className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-blue-600"
            >
              <Users size={16} />
              Employees
            </Link>

            <Link
              to="/about-us"
              className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-blue-600"
            >
              <Info size={16} />
              About Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https:/ Cat.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:bg-blue-600 hover:text-white"
            >
              <Cat size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:bg-blue-600 hover:text-white"
            >
              <MessageSquareQuote size={18} />
            </a>

            <a
              href="mailto:info@example.com"
              aria-label="Email"
              className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:bg-blue-600 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EmployeeHub. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer