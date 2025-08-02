// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-10">
//       <div className="container mx-auto px-4 text-center">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} VTP Monarque. All Rights Reserved.
//         </p>
        
//         {/* MahaRERA Number */}
//         <p className="text-sm text-gray-400 mt-2">
//           MahaRERA Registration No.: <span className="font-medium">P52100077322, P52100079440</span>
//         </p>

//         <p className="text-xs text-gray-400 mt-2">Designed by SB Web Design</p>
//       </div>
//     </footer>
//   );
// }




export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 scroll-smooth">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div className="md:pl-15">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:text-white transition-all duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition-all duration-300">
                WOW Features
              </a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-white transition-all duration-300">
                Amenities
              </a>
            </li>
            <li>
              <a href="#floorplans" className="hover:text-white transition-all duration-300">
                Floor Plans
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-white transition-all duration-300">
                Location
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-all duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Project Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Project Information</h3>
          <p className="text-sm text-gray-400 mb-2">
            VTP Monarque – Luxury Residences in the heart of Hinjawadi Phase 1.
          </p>
          <p className="text-sm text-gray-400">
            MahaRERA No.: <span className="font-medium text-white">P52100077322, P52100079440</span>
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-sm text-gray-400">
            📍 Hinjawadi Phase 1, Pune, Maharashtra
          </p>
          <p className="text-sm text-gray-400">📞 +91 1234567890</p>
          <p className="text-sm text-gray-400">✉️ info@vtpmonarque.com</p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} VTP Monarque. All Rights Reserved.</p>
        <p className="mt-1">Designed by SB Web Design</p>
      </div>
    </footer>
  );
}

