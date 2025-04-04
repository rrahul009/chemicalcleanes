'use client';

import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const Slider = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        showIndicators={false}
      >
        {/* Slide 1 */}
        <div className="relative">
          <div className="flex items-center justify-between max-w-7xl mx-auto py-16 px-6 md:px-12">
            {/* Left Side: Text and Form */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                Housekeeping & Cleaning Made Easy
              </h1>
              <p className="text-lg text-gray-950 mb-3 leading-relaxed">
                We offer professional and reliable housekeeping cleaning services for your home and office.
              </p>
              <p>
                &quot;Our team has 10 years of experience, and our innovative approach and commitment to excellence aim to make cleaning healthier, sustainable, and effortless with Bhagwati Durga chemicals.&quot;
              </p>

              {/* Form Section */}
              <div className="mb-3 space-y-4">
                <label htmlFor="email" className="block text-white text-lg font-semibold">
                  Stay Updated with Our Services
                </label>
                <div className="flex items-center justify-start space-x-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black text-white font-semibold rounded-md shadow-md hover:bg-gray-800 transition duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <Link href="/contact" legacyBehavior>
                <a className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                  Order Now
                </a>
              </Link>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 relative overflow-hidden transform hover:scale-105 transition duration-300 lg:ml-10 hidden md:block">
            <Image
  src="https://5.imimg.com/data5/SELLER/Default/2023/10/353184550/GX/ZY/NN/12410061/housekeeping-materials-supplier.jpg"
  alt="Cleaning Products"
  className="w-full h-auto object-cover object-center"
  width={800}  // Set the width of the image
  height={900} // Set the height of the image
/>

            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;