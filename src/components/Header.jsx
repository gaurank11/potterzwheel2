import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import clsx from 'clsx'; // For conditional class names

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Properties",
      link: "/properties",
      dropdown: [
        { name: "Residential", link: "/properties/residential" },
        { name: "Commercial", link: "/properties/commercial" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { name: "Stamp Duty Calculator", link: "/resources/stamp_duty" },
        { name: "EMI Calculator", link: "/resources/emi" },
      ],
    },
    { name: "Interiors", link: "/interiors" },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  const toggleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  const renderDropdown = (dropdown, idx) => (
    <div className={clsx("absolute top-full left-0 bg-blue-950 text-white shadow-lg py-2", { hidden: openDropdown !== idx })}>
      {dropdown.map((subItem, subIdx) => (
        <Link key={subIdx} to={subItem.link} className="block px-4 py-2 hover:bg-blue-800">
          {subItem.name}
        </Link>
      ))}
    </div>
  );

  const renderMenuItems = (isMobile = false) => (
    menuItems.map((item, idx) => (
      <div key={idx} className="relative group">
        <Link to={item.link} className="relative group">
          {item.name}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Show dropdown for desktop */}
        {item.dropdown && !isMobile && renderDropdown(item.dropdown, idx)}

        {/* Handle dropdown for mobile */}
        {item.dropdown && isMobile && (
          <>
            <button onClick={() => toggleDropdown(idx)} className="text-white focus:outline-none">
              {openDropdown === idx ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
            </button>
            {openDropdown === idx && (
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
          </>
        )}
      </div>
    ))
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-950 text-white py-2 font-NOURD z-50 shadow-md">
      {/* Main container */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex md:space-x-8 text-DMSans">
            {renderMenuItems()}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 text-DMSans">
          <div className="space-y-2 px-4 py-4">
            {renderMenuItems(true)}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
