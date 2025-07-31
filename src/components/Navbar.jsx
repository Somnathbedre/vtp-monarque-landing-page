import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'About', to: 'about' },
    { label: 'Amenities', to: 'amenities' },
    { label: 'Features', to: 'features' },
    { label: 'Floor Plans', to: 'floorplans' },
    { label: 'Location', to: 'location' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="/vtp-realty-logo.png" alt="VTP Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold text-amber-600">VTP Monarque</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
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
          </ul>
        </div>
      )}
    </header>
  );
}
