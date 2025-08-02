
export default function FloorPlansSection({ onEnquireClick }) {
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
            Spacious{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Floor Plans
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our thoughtfully designed 1, 2 & 3 BHK residences — crafted
            with optimal space planning and modern finishes.
            <br />
            <span className="block mt-2 text-sm text-gray-500">
              2 BHK from 68.55 sq.m. / 737.87 sq.ft. onwards · 3 BHK from 94.47
              sq.m. / 1016.88 sq.ft. onwards
            </span>
            <span className="block mt-2 font-medium text-amber-600">
              Download detailed floor plans from the brochure.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(({ type, image }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100 text-center"
            >
              <img
                src={image}
                alt={`${type} Floor Plan`}
                className="rounded-lg mx-auto mb-4 w-full h-64 object-cover filter blur-sm"
              />
              <h3 className="text-xl font-semibold text-gray-700">{type}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Premium layout with modern finishes.
              </p>
              <button
                onClick={onEnquireClick}
                className="mt-2 px-6 py-3 bg-purple-400 text-white font-semibold text-sm rounded-lg shadow hover:bg-purple-500 transition duration-300"
              >
                Download Floor Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

