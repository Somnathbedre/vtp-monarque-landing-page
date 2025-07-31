



export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            The Dawn of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Royal Living</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            VTP Monarque represents the pinnacle of luxurious residential living in Pune's thriving IT hub of Hinjawadi. 
            Experience grandeur redefined with world-class amenities, smart home features, and unparalleled connectivity.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { value: "39+", label: "Years Legacy" },
              { value: "30+", label: "Delivered Projects" },
              { value: "30M", label: "Sq.Ft. Ongoing" },
              { value: "20K+", label: "Happy Customers" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-amber-600">{item.value}</div>
                <div className="text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>

          {/* 🏆 Award Image - Bigger */}
          <div className="flex justify-center">
            <img
              src="/vtp-award.png"
              alt="VTP Award"
              className="w-full max-w-lg md:max-w-xl shadow-lg rounded-xl border border-amber-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
