import React from "react";
import { Link } from "react-router-dom";
import { products} from "../data/products";
import HomeFeaturedProduct from "../components/HomeFeaturedProduct";
import Herovideo from "../assets/hero-video.mp4"; // <-- Import the video

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative h-screen flex justify-center items-center text-center text-white px-4 overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={Herovideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Quality Medical Manufacturing
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
            Providing top-quality medical products and protective equipment for hospitals, clinics, and healthcare professionals.
          </p>

          <Link
            to="/products"
            className="bg-white text-blue-700 px-6 py-3 rounded shadow-lg font-semibold hover:bg-gray-100 transition"
          >
            View Products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <HomeFeaturedProduct key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/products"
            className="text-blue-700 font-semibold hover:underline"
          >
            See All Products
          </Link>
        </div>
      </section>

      {/* About / Call-to-Action Section */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          We specialize in manufacturing high-quality medical products that meet global standards.  
          Our commitment is to provide safe, reliable, and innovative solutions for healthcare professionals.
        </p>
        <Link
          to="/contact"
          className="bg-blue-700 text-white px-6 py-3 rounded shadow-lg font-semibold hover:bg-blue-800 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
