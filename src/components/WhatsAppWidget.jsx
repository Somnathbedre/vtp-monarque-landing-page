import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/917499439549?text=Hi%20VTP%20Team%2C%20I%20am%20interested%20in%20VTP%20Monarque.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
