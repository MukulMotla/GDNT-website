import React, { useState } from "react";
import contactImg from "../assets/contact.png"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="relative bg-white shadow-sm">
        <div className="absolute inset-0 opacity-10">
        </div>

        <div className="relative py-16 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            We're here to support your healthcare needs. Feel free to reach out anytime.
          </p>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* CONTACT CONTENT */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={contactImg}
              alt="Contact Illustration"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
            <p className="text-gray-600 mb-8 text-center lg:text-left">
              Send us a message or contact us on WhatsApp for quick support.
            </p>

            {/* WhatsApp Button */}
            <div className="text-center lg:text-left mb-8">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-medium shadow-md w-full sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium transition shadow-md w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
