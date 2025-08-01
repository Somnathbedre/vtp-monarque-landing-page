import InquiryForm from "./InquiryForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a site visit, get a personalized quote or just know more about the project.
          </p>
        </div>

        {/* Inquiry Form */}
        <InquiryForm />

        {/* Address */}
        <div className="mt-12 text-center text-gray-700 text-lg font-medium">
          📍 Address: Near Hinjawadi Phase 1, Pune
        </div>
      </div>
    </section>
  );
}
