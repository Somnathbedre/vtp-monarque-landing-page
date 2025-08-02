
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import InquiryForm from './InquiryForm';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const links = [
    { label: 'About', to: 'about' },
    { label: 'Amenities', to: 'amenities' },
    { label: 'Features', to: 'features' },
    { label: 'Floor Plans', to: 'floorplans' },
    { label: 'Location', to: 'location' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo Only */}
          <div className="flex items-center space-x-2 pl-20">
            <img src="/vtp-realty-logo.png" alt="VTP Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 items-center">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-gray-700 hover:text-amber-600 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setShowPopup(true)}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition duration-300"
              >
                Enquire Now
              </button>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-700 hover:text-amber-600 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setShowPopup(true);
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-md"
                >
                  Enquire Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Enquiry Popup without dark background */}
      {showPopup && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] w-full max-w-2xl px-4">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-6">
              <InquiryForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
