import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Properties",
      link: "/properties",
    },
  
    { name: "Interiors", link: "/interiors" },
    { name: "Blogs", link: "/blog" },
    {
      name: "About Us",
      link: "/about",

    },
    
    { name: "Contact Us", link: "/contact" },
  ];

  const toggleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-950 text-white py-2 font-NOURD z-50 shadow-md">
  {/* Main container */}
  <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-12">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            src="/logo.png" 
            alt="Logo"
            className="h-12 w-auto" // Increased size for better visibility
          />
        </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex md:space-x-8 text-DMSans">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link to={item.link} className="relative group">
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {item.dropdown && openDropdown === idx && (
                  <div className="absolute top-full left-0 bg-blue-950 text-white shadow-lg py-2">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.link}
                        className="block px-4 py-2 hover:bg-blue-800"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-950 text-DMSans">
          <div className="space-y-2 px-4 py-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-center">
                  <Link
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:text-gray-200"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleDropdown(idx)}
                      className="text-white focus:outline-none"
                    >
                      {openDropdown === idx ? (
                        <MinusIcon className="h-5 w-5" />
                      ) : (
                        <PlusIcon className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
                {item.dropdown && openDropdown === idx && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={subItem.link}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-gray-400 hover:text-gray-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
