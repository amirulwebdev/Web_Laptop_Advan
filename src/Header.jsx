import React, { useState } from 'react'
import Advan from './assets/advan.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={Advan} alt="Logo Advan" />
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:mx-auto">
            {['Produk', 'Spesifikasi', 'Review', 'Testimoni'].map((item) => {

              let href = '#'
              if (item === 'Produk') href = '#motto'
              else if (item === 'Spesifikasi') href = '#spesifikasi'
              else if (item === 'Review') href = '#review'

              return (
                <a
                  key={item}
                  href={href}
                  className="text-sm font-semibold font-montserrat-reguler text-gray-900 hover:bg-red-700 hover:text-white hover:px-3 hover:rounded-3xl transition-all duration-300 ease-in-out"
                >
                  {item}
                </a>
              )
            })}
          </div>

          {/* Removed Log In */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-6 pb-6">
            <div className="space-y-2 pt-4 bg-white shadow-md rounded-lg transition-all duration-300">
              {['Produk', 'Spesifikasi', 'Showcase', 'Testimoni'].map((item) => (
                <a
                  key={item}
                  href={item === 'Produk' ? '#bio' : '#'}
                  className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-red-700 hover:text-white rounded-lg transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
