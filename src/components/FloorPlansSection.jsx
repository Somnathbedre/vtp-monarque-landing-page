// export default function FloorPlansSection() {
//   return (
//     <section id="floorplans" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-gray-800 mb-6">
//             Spacious <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Floor Plans</span>
//           </h2>
//           <p className="text-lg text-gray-600">
//             Choose from 2, 3, and 4 BHK homes thoughtfully designed for space and elegance.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {["2 BHK", "3 BHK", "4 BHK"].map((type, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-amber-100 text-center"
//             >
//               <img
//                 src={`https://via.placeholder.com/300x200?text=${type}+Plan`}
//                 alt={`${type} Floor Plan`}
//                 className="rounded-lg mx-auto mb-4"
//               />
//               <h3 className="text-xl font-semibold text-gray-700">{type}</h3>
//               <p className="text-sm text-gray-500">Premium layout with modern finishes.</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





export default function FloorPlansSection() {
  const plans = [
    { type: "1 BHK", image: "/floorplans/1bhk.jpg" },
    { type: "2 BHK", image: "/floorplans/2bhk.jpg" },
    { type: "3 BHK", image: "/floorplans/3bhk.jpg" },
  ];

  return (
    <section id="floorplans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Spacious <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Floor Plans</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose from 2, 3, and 4 BHK homes thoughtfully designed for space and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(({ type, image }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-amber-100 text-center"
            >
              <img
                src={image}
                alt={`${type} Floor Plan`}
                className="rounded-lg mx-auto mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-700">{type}</h3>
              <p className="text-sm text-gray-500">Premium layout with modern finishes.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
