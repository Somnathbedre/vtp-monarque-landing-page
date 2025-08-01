
export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Prime{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Location
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Hinjawadi Phase 1 – Pune’s top IT hub with excellent connectivity to the Mumbai-Pune Expressway and all major IT parks.
          </p>
        </div>

        {/* Map & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/location/vtp-location.jpg"
            alt="VTP Location"
            className="w-full rounded-xl shadow-md transform hover:scale-105 transition-transform duration-500 border border-amber-100"
          />

          <iframe
            className="w-full h-96 rounded-xl shadow-lg border border-gray-200"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5031236036786!2d73.73468967516462!3d18.55085838256932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb3a2f6c9c1%3A0x3a7c773eeefad1ab!2sVTP%20Monarque!5e0!3m2!1sen!2sin!4v1698567915891!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Highlights Compact Section */}
        <div className="mt-16 max-w-5xl mx-auto bg-amber-50 rounded-2xl shadow-md p-8 text-center text-gray-800">
          <h3 className="text-2xl font-semibold text-amber-600 mb-4">Location Highlights & Township Benefits</h3>
          <p className="text-sm md:text-base leading-relaxed">
            📍 Hinjawadi Phase 1, near Infosys Circle, Wipro Campus, Proposed Metro Station, Mula River, and Mumbai-Bangalore Highway. <br />
            🏙️ Township Benefits: Multiple Grand Entrance Plazas, Riverside Promenade (~1km), Large Landscaped Zones, Grand Club & Spa, Well-Planned Internal Roads, High-Street Shopping, School & Crèche, Hospital, Police Station, Fire Station, Bus Stop, Convenience Store.
          </p>
        </div>
      </div>
    </section>
  );
}
