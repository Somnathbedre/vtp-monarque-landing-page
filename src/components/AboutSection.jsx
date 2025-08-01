
export default function AboutSection() {
  const stats = [
    { value: "39+", label: "Years Legacy" },
    { value: "30+", label: "Delivered Projects" },
    { value: "30M", label: "Sq.Ft. Ongoing" },
    { value: "12M+", label: "Sq.Ft. Delivered" },
    { value: "20K+", label: "Happy Customers" },
  ];

  const philosophy = [
    "MLA Advantage (Maximum Livable Area)",
    "High Build Quality",
    "Right Priced Products",
    "Better Design & Architecture",
    "Transparent Transactions",
    "Customer-Centric Approach",
    "Post Sales & Possession Support",
    "Better Build & Higher ROI",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            The Dawn of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Royal Living
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            VTP Monarque represents the pinnacle of luxurious residential living in Pune's thriving IT hub of Hinjawadi.
          </p>

          <p className="text-lg text-gray-700 font-semibold mb-6">
            🏆 Pune’s #1 Real Estate Brand – 6 Years in a Row
          </p>
        </div>

        {/* Stats Cards (Same style as Amenities) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100"
            >
              <div className="text-3xl font-bold text-amber-600 mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>

        {/* VTP Brand Promise (Same feel as Additional Amenities section) */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The VTP Brand Promise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {philosophy.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 bg-amber-50 rounded-xl text-gray-700 text-sm border border-amber-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                ✔️ {item}
              </div>
            ))}
          </div>
        </div>

        {/* Award Image */}
        <div className="flex justify-center mt-12">
          <img
            src="/vtp-award.png"
            alt="VTP Award"
            className="w-full max-w-lg md:max-w-xl shadow-lg rounded-xl border border-amber-100"
          />
        </div>
      </div>
    </section>
  );
}

