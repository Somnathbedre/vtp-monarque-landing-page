

import { CheckCircle, Building, Dumbbell, Waves, Heart, TreePine, Play } from 'lucide-react';

const primaryAmenities = [
  { icon: <Building className="w-6 h-6" />, name: "Grand Clubhouse", desc: "Multipurpose Hall" },
  { icon: <Dumbbell className="w-6 h-6" />, name: "Fully Equipped Gym", desc: "Modern Equipment" },
  { icon: <Waves className="w-6 h-6" />, name: "Infinity Swimming Pool", desc: "With Kids Pool" },
  { icon: <Heart className="w-6 h-6" />, name: "Yoga & Zumba Room", desc: "Wellness Center" },
  { icon: <TreePine className="w-6 h-6" />, name: "Cycling Track", desc: "Jogging Track" },
  { icon: <Play className="w-6 h-6" />, name: "Tennis Court", desc: "Box Cricket" }
];

const additionalAmenities = [
  "Activity Lawn", "Amphitheatre", "Herbal Garden", "Indoor Games Room",
  "Kids Play Area", "Meditation Zone", "Senior Citizen Corner", "Library Corner"
];

export default function AmenitiesSection({ onEnquireClick }) {
  return (
    <section
      id="amenities"
      className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Larger Than Life{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
              Amenities
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Indulge in premium amenities designed to elevate your lifestyle across multiple levels of luxury.
          </p>
        </div>

        {/* Primary Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {primaryAmenities.map((amenity, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-gray-800">{amenity.name}</h3>
                  <p className="text-gray-500 text-sm">{amenity.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hurry Up Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={onEnquireClick}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Hurry Up!
          </button>
        </div>

        {/* Additional Amenities List */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Additional Premium Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalAmenities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center p-3 bg-blue-50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

