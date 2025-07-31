

// import { useEffect, useState } from 'react';
// import { Award, ChevronRight, Download } from 'lucide-react';

// const images = [
//   '/hero-images/building1.jpg',
//   '/hero-images/building2.jpg',
//   '/hero-images/building3.jpg',
//   '/hero-images/building4.jpg',
//   '/hero-images/building5.jpg',
//   '/hero-images/building6.jpg',
//   '/hero-images/building7.jpg',
//   '/hero-images/building8.jpg',
// ];

// export default function HeroSection() {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
//         <img
//           src={images[currentImage]}
//           alt="Building"
//           className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
//         />
//       </div>

//       {/* Overlay gradients */}
//       <div className="absolute inset-0 bg-black/30 z-10"></div>

//       {/* Content container */}
//       <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
//         <div className="max-w-4xl">
//           {/* Highlight banner */}
//           <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/90 rounded-full shadow-lg">
//             <Award className="w-5 h-5 text-amber-600 mr-2" />
//             <span className="text-sm font-medium text-gray-700">
//               Pune's #1 Real Estate Brand - 6 Years Running
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-6xl md:text-8xl font-bold text-gray-100 mb-6 leading-tight">
//             VTP <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Monarque</span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-2xl md:text-3xl text-white mb-4 font-light">
//             Luxury Residences in Hinjawadi Phase 1
//           </p>

//           {/* Description box */}
//           <div className="bg-white/90 rounded-2xl p-6 mb-8 shadow-xl border border-white/50">
//             <p className="text-lg text-gray-600">
//               A Majestic <span className="font-semibold text-amber-600">9-acre Estate</span> with 
//               <span className="font-semibold text-orange-600"> 4 acres of 'Larger than Life' Amenities</span> & 
//               Lush Greenery... <span className="font-bold text-gray-800">Yours for a lifetime.</span>
//             </p>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
//               <div className="flex items-center justify-center">
//                 <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
//                 Download Brochure
//               </div>
//             </button>

//             {/* WhatsApp Button */}
//             <a
//               href="https://wa.me/919876543210?text=Hi%20VTP%20Team%2C%20I%20am%20interested%20in%20VTP%20Monarque.%20Please%20share%20more%20details."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-4 bg-white/90 text-gray-800 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-white/50 text-center flex items-center justify-center gap-2"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//                 alt="WhatsApp"
//                 className="w-5 h-5"
//               />
//               Enquire on WhatsApp
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Scroll icon */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
//         <ChevronRight className="w-8 h-8 text-white rotate-90" />
//       </div>
//     </section>
//   );
// }





import { useEffect, useState } from 'react';
import { Award, ChevronRight, Download } from 'lucide-react';

const images = [
  '/hero-images/building1.jpg',
  '/hero-images/building2.jpg',
  '/hero-images/building3.jpg',
  '/hero-images/building4.jpg',
  '/hero-images/building5.jpg',
  '/hero-images/building6.jpg',
  '/hero-images/building7.jpg',
  '/hero-images/building8.jpg',
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
        <img
          src={images[currentImage]}
          alt="Building"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content container */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Highlight banner */}
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/90 rounded-full shadow-lg">
            <Award className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Pune's #1 Real Estate Brand - 6 Years Running
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-100 mb-6 leading-tight">
            VTP <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Monarque</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white mb-4 font-light">
            Luxury Residences in Hinjawadi Phase 1
          </p>

          {/* Description box */}
          <div className="bg-white/90 rounded-2xl p-6 mb-8 shadow-xl border border-white/50">
            <p className="text-lg text-gray-600">
              A Majestic <span className="font-semibold text-amber-600">9-acre Estate</span> with 
              <span className="font-semibold text-orange-600"> 4 acres of 'Larger than Life' Amenities</span> & 
              Lush Greenery... <span className="font-bold text-gray-800">Yours for a lifetime.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Download Brochure (Google Drive link) */}
            <a
              href="https://shorturl.at/pm0HL"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Brochure
              </div>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/7499439549?text=Hi%20VTP%20Team%2C%20I%20am%20interested%20in%20VTP%20Monarque.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/90 text-gray-800 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-white/50 text-center flex items-center justify-center gap-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronRight className="w-8 h-8 text-white rotate-90" />
      </div>
    </section>
  );
}
