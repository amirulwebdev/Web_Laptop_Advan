import React, { useState, useEffect } from 'react'
import Advan from '../public/advan.png'
import Shopee from '../public/shopee.png'
import Tokopedia from '../public/tokopedia.png'
import Blibli from '../public/blibli.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false) // scroll down
      } else {
        setShowNavbar(true) // scroll up
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <div className={`bg-white fixed w-full z-50 shadow-md transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <header className="inset-x-0 top-0">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ADVAN</span>
              <img className="h-8 w-auto" src={Advan} alt="Logo Advan" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12 lg:justify-center">
            {['Produk', 'Spesifikasi', 'Review', 'Testimoni'].map((item) => {
              let href = '#'
              if (item === 'Produk') href = '#motto'
              else if (item === 'Spesifikasi') href = '#spesifikasi'
              else if (item === 'Review') href = '#review'

              return (
                <a
                  key={item}
                  href={href}
                  className="text-sm font-semibold font-montserrat-reguler text-gray-900 hover:bg-pink-600 hover:text-white hover:px-3 hover:rounded-3xl transition-all duration-300 ease-in-out"
                >
                  {item}
                </a>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end relative group">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-pink-600 transition-all duration-300"
            >
              Beli Sekarang
            </button>
            {/* Dropdown icons */}
            <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-white rounded-lg shadow-lg w-32 p-2">
              <a
                href="https://shopee.co.id/ADVAN-Laptop-Workplus-AMD-Ryzen-5-6600H-Ryzen-7-7735HS-16Gb-512Gb-1TB-14''-FHD-IPS-16-10-Fingerprint-Windows-11-Garansi-Resmi-1-Tahun-i.919692407.20591880461?sp_atk=b2fafefb-5d5d-43b7-9955-4485788c276f&is_from_login=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center p-2 hover:bg-red-100 rounded-md transition-all"
              >
                <img src={Shopee} alt="Shopee" className="w-10" />
              </a>
              <a
                href="https://www.tokopedia.com/advanofficialitstore/advan-workplus-amd-ryzen-5-6600h-14-fhd-ips-16gb-512gb-notebook-laptop-free-windows-11-upgradeable-1730815564311856950?extParam=ivf%3Dtrue%26keyword%3Dadvan+workplus%26search_id%3D202504271507242BD6F52BF8C50D2EFRVD%26src%3Dsearch&t_id=1745766451725&t_st=1&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center p-2 hover:bg-green-100 rounded-md transition-all"
              >
                <img src={Tokopedia} alt="Tokopedia" className="w-10" />
              </a>
              <a
                href="https://www.blibli.com/p/advan-laptop-workplus-amd-ryzen-5-6600h-14-fhd-ips-16gb-512gb-win-11/ps--ADI-70031-00095?ds=ADI-70031-00095-00002&source=SEARCH&sid=d47c76682eea8c09&cnc=false&pickupPointCode=PP-3310191&pid1=ADI-70031-00095"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center p-2 hover:bg-blue-100 rounded-md transition-all"
              >
                <img src={Blibli} alt="Blibli" className="w-10" />
              </a>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden px-6 pb-6">
            <div className="space-y-2 pt-4 bg-white shadow-md rounded-lg transition-all duration-300">
              {['Produk', 'Spesifikasi', 'Review', 'Testimoni'].map((item) => (
                <a
                  key={item}
                  href={item === 'Produk' ? '#motto' : item === 'Spesifikasi' ? '#spesifikasi' : item === 'Review' ? '#review' : '#'}
                  className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-pink-600 hover:text-white rounded-lg transition-all duration-300"
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
