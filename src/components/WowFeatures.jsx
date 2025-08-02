
import { Shield, Wifi, Building, Home, CheckCircle, Star } from 'lucide-react';

const wowProjectFeatures = [
  "Earthquake Resistant RCC Structure",
  "100% DG Backup for Lifts & Common Areas",
  "EV Charging Points Provision",
  "Smart Home Automation"
];

const smartFeatures = [
  "Digital Lock System",
  "Featherlike Touch Pad Switches",
  "Smart Home Control Hub",
  "Alexa Compatible Controls",
  "3-Tier Security System",
  "Video Door Phone Connected to Smartphone"
];

const premiumFinishes = [
  "Large Sized Marble Finish Glazed Vitrified Tiles",
  "Veneer Finish Main Entrance Door",
  "Premium Kitchen Platform with S.S. Sink",
  "Designer CP & Sanitary Fittings"
];

export default function WowFeatures() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">WOW</span> Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Exceptional features that set VTP Monarque apart from the ordinary.
          </p>

          <img
            src="/hero-images/wow-feature.jpg"
            alt="WOW Features"
            className="mx-auto w-full max-w-3xl h-auto rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project WOW Features */}
          <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100 rounded-3xl p-8 shadow-xl border border-purple-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Building className="w-7 h-7 text-purple-600 mr-3" />
              WOW at Project Level
            </h3>
            <div className="space-y-4">
              {wowProjectFeatures.map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center p-4 bg-white/80 rounded-xl transition-transform duration-300 hover:scale-105"
                >
                  <Shield className="w-5 h-5 text-purple-500 mr-4" />
                  <span className="text-gray-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WOW Inside Your Home */}
          <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Home className="w-7 h-7 text-indigo-600 mr-3" />
              WOW Inside Your Home
            </h3>

            {/* Smart Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Wifi className="w-5 h-5 text-indigo-500 mr-2" />
                Smart Home Features
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {smartFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-3 bg-white/70 rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Finishes */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Premium Finishes</h4>
              <div className="space-y-2">
                {premiumFinishes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-2 bg-white/60 rounded-lg transition-transform duration-300 hover:scale-105"
                  >
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
