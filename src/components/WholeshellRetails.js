import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const WholeshellRetails = () => {
  return (
    <div className="wholeshell-retails-container py-4 px-6 md:px-12 bg-gray-100">
      {/* Container */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold text-black text-center leading-tight mb-6">
          Wholesale &amp; Retail Chemicals at Best Prices
        </h1>

        {/* Main Content */}
        <div className="text-lg mx-w-4xl text-gray-950 mb-6 leading-relaxed text-center md:text-center">
          <span style={{ color: 'green' }} className="font-bold text-xl">Bhagwati Durga Enterprises</span> offers top-quality cleaning chemicals at the best prices for wholesalers and retailers.

          <p>
            Whether you&apos;re stocking your store or supplying your business, our eco-friendly solutions have you covered.
          </p>
          <p>
            We aim to make cleaning easier, healthier, and more sustainable!
          </p>
        </div>

        {/* Benefits and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-full h-60">
                <Image
                  src="https://img.freepik.com/free-vector/delivery-man-driving-way_56104-669.jpg"
                  alt="Fast Delivery"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4">Fast & Reliable Delivery</h3>
            </div>
            <p className="text-gray-700">
              Count on us for fast and reliable delivery, ensuring you always stay stocked and ready to meet customer demands.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-full h-60">
                <Image
                  src="https://img.freepik.com/free-photo/businessman-talking-phone_23-2148738347.jpg?t=st=1743774271~exp=1743777871~hmac=cd2f669b6db533aef45654c9fc5722a4828c2b029d6dc3d63324b4db37e797ef&w=2000"
                  alt="Customer Support"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4">Customer Support</h3>
            </div>
            <p className="text-gray-700">
              Our dedicated customer support team is always available to help with any queries or specific requirements you have.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-full h-60">
                <Image
                  src="https://img.freepik.com/premium-vector/exclusive-offer-banner-design_686319-748.jpg?semt=ais_hybrid"
                  alt="Exclusive Offers"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4">Exclusive Offers</h3>
            </div>
            <p className="text-gray-700">
              We offer exclusive deals and discounts for bulk orders, making it more affordable to stock your inventory.
            </p>
          </div>
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-full h-90">
                <Image
                  src="https://img.freepik.com/free-vector/premium-certified-quality-stamp_78370-1800.jpg"
                  alt="High-Quality Products"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4">High-Quality Products</h3>
            </div>
            <p className="text-gray-700">
              We provide high-quality, eco-friendly cleaning products that are effective and safe for use in various environments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-full h-90">
                <Image
                  src="https://st2.depositphotos.com/4152719/8388/i/450/depositphotos_83882532-stock-photo-competitive-pricing-concept-image-with.jpg"
                  alt="Competitive Prices"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4">Competitive Prices</h3>
            </div>
            <p className="text-gray-700">
              Our wholesale prices are designed to maximize your profit margins, helping you stay competitive in the market.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-full h-90">
                <Image
                  src="https://img.freepik.com/free-photo/client-receiving-boxes-from-express-delivery_651396-978.jpg?t=st=1743774223~exp=1743777823~hmac=5194f38230ff50bb569012c086f7f8687f3320f39d52985ce0f999ee686a1ce5&w=2000"
                  alt="Flexible Orders"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mt-4">Flexible Orders</h3>
            </div>
            <p className="text-gray-700">
              We offer flexible order quantities to suit your business needs, whether you&apos;re ordering small or large volumes.
            </p>
          </div>

        
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link href="/contact" legacyBehavior>
            <a className="inline-block px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300">
              Contact Us for Bulk Orders
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WholeshellRetails;