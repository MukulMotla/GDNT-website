import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-700 text-white pt-12 pb-6 mt-10">
      {/* --- CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* --- COMPANY INFO --- */}
        <div>
          <h2 className="text-2xl font-bold mb-4">GDNT Medicare Pvt. Ltd.</h2>
          <p className="text-gray-200 leading-6">
            GDNT Medicare Pvt. Ltd. is a rapidly growing pharmaceutical company
            committed to delivering safe, effective, and affordable medicines.
            We follow strict quality standards and maintain strong relationships
            with healthcare professionals through reliability, transparency,
            and timely supply.
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
              <FaPhoneAlt className="text-xl mt-1" />
              <span>+91 98053 04024</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-xl mt-1" />
              <span>medicaregdnt@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <span>Rohta Road, Meerut, Uttar Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- SOCIAL ICONS --- */}
      <div className="mt-10 flex justify-center gap-6 text-white text-2xl">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-teal-300 transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-teal-300 transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-teal-300 transition"
        >
          <FaInstagram />
        </a>
      </div>

      {/* --- COPYRIGHT --- */}
      <div className="text-center text-gray-200 text-sm mt-6 border-t border-gray-300/30 pt-4">
        © {new Date().getFullYear()} belahiri tech (M.M). — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
