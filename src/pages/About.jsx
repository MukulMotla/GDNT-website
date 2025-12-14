import React from "react";
import { FaMedkit, FaAward, FaUsers, FaShippingFast } from "react-icons/fa";
import Aboutimg from "../assets/about.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* --- IMAGE --- */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={Aboutimg}
            alt="About Us"
            className="w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* --- CONTENT --- */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About Our Company
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            We are a leading medical manufacturing company committed to producing high-quality medical products and protective equipment for hospitals, clinics, and healthcare professionals.
          </p>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Our mission is to deliver safe, reliable, and innovative solutions that meet global standards.
          </p>

          {/* --- FEATURE CARDS --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-center gap-4 bg-gradient-to-r from-teal-100 to-blue-100 p-5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <FaMedkit className="text-blue-700 text-3xl" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">100+ Products</h4>
                <p className="text-gray-600 text-sm">Manufactured</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-r from-green-100 to-green-200 p-5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <FaAward className="text-green-600 text-3xl" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Certified Quality</h4>
                <p className="text-gray-600 text-sm">ISO & FDA</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-r from-purple-100 to-purple-200 p-5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <FaUsers className="text-purple-600 text-3xl" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Experienced Team</h4>
                <p className="text-gray-600 text-sm">10+ Years</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-r from-teal-200 to-blue-200 p-5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <FaShippingFast className="text-teal-600 text-3xl" />
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Fast Delivery</h4>
                <p className="text-gray-600 text-sm">Worldwide</p>
              </div>
            </div>
          </div>

          {/* --- CTA BUTTON --- */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-700 to-teal-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
