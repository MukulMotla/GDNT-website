import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png"; // <-- Import your logo

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/about", label: "About Us" },
    { id: 3, path: "/products", label: "Products" },
    { id: 4, path: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 text-white fixed top-0 bg-gradient-to-r from-teal-700 to-blue-800 shadow-lg z-50">
      
      {/* --- LOGO --- */}
      <div>
        <RouterLink to="/">
          <img src={logo} alt="MediTech Logo" className="h-12 w-auto" />
        </RouterLink>
      </div>

      {/* --- DESKTOP MENU --- */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, path, label }) => (
          <li
            key={id}
            className="cursor-pointer capitalize text-lg font-medium text-gray-200 hover:text-white hover:scale-105 transition duration-200"
          >
            <RouterLink to={path}>{label}</RouterLink>
          </li>
        ))}
      </ul>

      {/* --- MOBILE ICON --- */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-200 md:hidden"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* --- MOBILE MENU --- */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 to-teal-800 text-gray-100 space-y-10 text-3xl">
          {links.map(({ id, path, label }) => (
            <li key={id} className="hover:text-white transition">
              <RouterLink onClick={() => setNav(false)} to={path}>
                {label}
              </RouterLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
