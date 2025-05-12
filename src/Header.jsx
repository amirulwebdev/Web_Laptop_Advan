import React, { useState, useEffect, useCallback } from 'react';
import Advan from '../public/advan.png';
import Shopee from '../public/shopee.png';
import Tokopedia from '../public/tokopedia.png';
import Blibli from '../public/blibli.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false); // scroll down
    } else {
      setShowNavbar(true); // scroll up
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Produk', href: '#motto' },
    { name: 'Spesifikasi', href: '#spesifikasi' },
    { name: 'Review', href: '#review' },
    { name: 'Testimoni', href: '#' },
  ];

  const marketplaceLinks = [
    {
      name: 'Shopee',
      href: 'https://shopee.co.id/ADVAN-Laptop-Workplus-AMD-Ryzen-5-6600H-Ryzen-7-7735HS-16Gb-512Gb-1TB-14\'\'-FHD-IPS-16-10-Fingerprint-Windows-11-Garansi-Resmi-1-Tahun-i.919692407.20591880461?sp_atk=b2fafefb-5d5d-43b7-9955-4485788c276f&is_from_login=true',
      icon: Shopee,
      hoverClass: 'hover:bg-red-100',
    },
    {
      name: 'Tokopedia',
      href: 'https://www.tokopedia.com/advanofficialitstore/advan-workplus-amd-ryzen-5-6600h-14-fhd-ips-16gb-512gb-notebook-laptop-free-windows-11-upgradeable-1730815564311856950?extParam=ivf%3Dtrue%26keyword%3Dadvan+workplus%26search_id%3D202504271507242BD6F52BF8C50D2EFRVD%26src%3Dsearch&t_id=1745766451725&t_st=1&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result',
      icon: Tokopedia,
      hoverClass: 'hover:bg-green-100',
    },
    {
      name: 'Blibli',
      href: 'https://www.blibli.com/p/advan-laptop-workplus-amd-ryzen-5-6600h-14-fhd-ips-16gb-512gb-win-11/ps--ADI-70031-00095?ds=ADI-70031-00095-00002&source=SEARCH&sid=d47c76682eea8c09&cnc=false&pickupPointCode=PP-3310191&pid1=ADI-70031-00095',
      icon: Blibli,
      hoverClass: 'hover:bg-blue-100',
    },
  ];

  return (
    <div
      className={`bg-white fixed w-full z-50 shadow-md transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <header className="inset-x-0 top-0">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5" aria-label="Advan Home">
              <span className="sr-only">ADVAN</span>
              <img src={Advan} alt="Advan Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-8 lg:justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-semibold font-montserrat-reguler text-gray-900 hover:bg-pink-600 hover:text-white px-3 py-2 rounded-3xl transition-all duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end relative">
            <div className="relative group">
              <button
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 text-md font-semibold text-white shadow-md hover:bg-pink-700 transition-all duration-300"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Beli Sekarang
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown icons */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 flex flex-col bg-white rounded-lg shadow-lg w-32 p-2 z-50"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {marketplaceLinks.map((marketplace) => (
                    <a
                      key={marketplace.name}
                      href={marketplace.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex justify-center p-2 rounded-md transition-all ${marketplace.hoverClass}`}
                    >
                      <img src={marketplace.icon} alt={marketplace.name} className="w-10" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden px-6 pb-6">
            <div className="space-y-2 pt-4 bg-white shadow-md rounded-lg transition-all duration-300">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-pink-600 hover:text-white rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <p className="px-4 py-2 text-sm font-medium text-gray-500">Beli di:</p>
                <div className="flex justify-around px-4 py-2">
                  {marketplaceLinks.map((marketplace) => (
                    <a
                      key={marketplace.name}
                      href={marketplace.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-md transition-all ${marketplace.hoverClass}`}
                    >
                      <img src={marketplace.icon} alt={marketplace.name} className="w-8" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;