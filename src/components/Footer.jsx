import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // Updated import

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-700 text-white pt-12 pb-6 mt-10">

      {/* --- CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* --- COMPANY INFO --- */}
        <div>
          <h2 className="text-2xl font-bold mb-4">GDNT Medicare Pvt.</h2>
          <p className="text-gray-200 leading-6">
            GDNT Medicare Pvt. Ltd. is a rapidly growing pharmaceutical company focused on providing safe, effective and affordable medicines for the betterment of society. We believe in maintaining the highest quality standards and delivering formulations that doctors can confidently prescribe. we have built strong relationships with healthcare professionals and distributors by ensuring product reliability, timely supply and transparent business practices.
          </p>
        </div>

        {/* --- QUICK LINKS --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-white transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/products">Products</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* --- CONTACT INFO --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-xl" />
              <span>+91 98053 04024</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-xl" />
              <span>medicaregdnt@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-xl" />
              <span>Rohta Road, Meerut, UP, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- SOCIAL ICONS --- */}
      <div className="mt-10 flex justify-center gap-6 text-white text-2xl">
        <a href="#" className="hover:text-teal-300 transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-teal-300 transition"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-teal-300 transition"><FaInstagram /></a>
      </div>

      {/* --- COPYRIGHT --- */}
      <div className="text-center text-gray-200 text-sm mt-6 border-t border-gray-300/30 pt-4">
        © {new Date().getFullYear()} MediTech Industries — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
