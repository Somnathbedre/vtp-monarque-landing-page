import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
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
        <h1 className="text-2xl font-bold text-amber-600">VTP Monarque</h1>
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
      </nav>
    </header>
  );
}
