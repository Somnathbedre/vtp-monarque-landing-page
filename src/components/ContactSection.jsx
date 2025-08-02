
import InquiryForm from "./InquiryForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-teal-500">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Schedule a site visit, get a personalized quote or just know more about the project.
          </p>
        </div>

        {/* Inquiry Form */}
        <InquiryForm />
      </div>
    </section>
  );
}
