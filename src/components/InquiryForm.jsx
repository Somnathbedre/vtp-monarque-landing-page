import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // ✅ New state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
    setIsSubmitted(false); // Reset on input change
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (phone.length < 10) {
      setError("Phone number must be at least 10 digits.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setIsSubmitted(true); // ✅ Mark as submitted
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (err) => {
          setError("Failed to send message. Please try again later.");
          console.error(err);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 border rounded-lg w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 border rounded-lg w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="p-4 border rounded-lg w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="p-4 border rounded-lg w-full md:col-span-2"
        />
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <button
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-lg font-semibold rounded-lg hover:shadow-xl transition duration-300"
        disabled={isSubmitted}
      >
        {isSubmitted ? "Submitted ✅" : "Submit"}
      </button>
    </form>
  );
}






