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
            Whether you're stocking your store or supplying your business, our eco-friendly solutions have you covered.
          </p>
          <p>
            We aim to make cleaning easier, healthier, and more sustainable!
          </p>
        </div>

        {/* Benefits and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-1">
              <h3 className="text-xl font-semibold text-black">High-Quality Products</h3>
              <Image
                src="https://img.freepik.com/free-vector/premium-certified-quality-stamp_78370-1800.jpg?t=st=1743767591~exp=1743771191~hmac=8ea784e003d237a6b272ca94ab37ee67af12d53851207b959628185782e4406c&w=1380" // Ensure path is correct
                alt="High-Quality Products"
                className="mb-1 rounded-md w-full h-60 object-contain "
                width={200}
                height={150}
              />

            </div>
            <p className="text-gray-700">
              We provide high-quality, eco-friendly cleaning products that are effective and safe for use in various environments.
            </p>
          </div>

          {/* Card 2 */}
          {/* Card Example with proper image display */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-xl font-semibold text-black ">Competitive Prices</h3>
              <div className="relative w-full aspect-[4/3]"> {/* 4:3 aspect ratio */}
                <Image
                  src="https://st2.depositphotos.com/4152719/8388/i/450/depositphotos_83882532-stock-photo-competitive-pricing-concept-image-with.jpg"
                  alt="Competitive Prices"
                  // fill
                  className="mb-4 rounded-md w-full h-60 object-contain "
                  width={200}
                  height={150}
                />
              </div>

            </div>
            <p className="text-gray-700">
              Our wholesale prices are designed to maximize your profit margins.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
            <h3 className="text-xl font-semibold text-black">Flexible Orders</h3>
            <Image
                  src="https://img.freepik.com/free-photo/medium-shot-man-carrying-box_23-2148773967.jpg?t=st=1743771508~exp=1743775108~hmac=ddfb23512d73f4255bb95e9d152fc8bb19bd9f2cdcb5db85c2f2fe1b086720d5&w=1800"
                  alt="Competitive Prices"
                  // fill
                  className="mb-4 rounded-md w-full h-60 object-contain "
                  width={200}
                  height={150}
                />
     
            </div>
            <p className="text-gray-700">
              We offer flexible order quantities to suit your business needs, whether you're ordering small or large volumes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
              <Image
                src="https://img.freepik.com/free-vector/delivery-man-driving-way_56104-669.jpg?t=st=1743600725~exp=1743604325~hmac=f2289e04a6ae9a8f1070790ad29e43998121f21b7288932e50db8193030512de&w=1800" // External image, ensure correct URL
                alt="Fast Delivery"
                className="mb-4 rounded-md w-full h-full object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">Fast & Reliable Delivery</h3>
            </div>
            <p className="text-gray-700">
              Count on us for fast and reliable delivery, ensuring you always stay stocked and ready to meet customer demands.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
            <Image
                src="https://img.freepik.com/free-photo/colleagues-working-together-call-center-office_23-2149256064.jpg?t=st=1743771692~exp=1743775292~hmac=0cbbe6ec651a36aea69fdd14610f5c6a2fd47b6fd66ff34b84d5d27aa056d520&w=2000" // External image, ensure correct URL
                alt="Fast Delivery"
                className="mb-4 rounded-md w-full h-full object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">Customer Support</h3>
            </div>
            <p className="text-gray-700">
              Our dedicated customer support team is always available to help with any queries or specific requirements you have.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center mb-4">
            <Image
                src="https://thumbs.dreamstime.com/b/special-offer-star-7527442.jpg" // External image, ensure correct URL
                alt="Fast Delivery"
                className="mb-4 rounded-md w-full h-60 object-cover"
                width={400}
                height={250}
              />
              <h3 className="text-xl font-semibold text-black">Exclusive Offers</h3>
            </div>
            <p className="text-gray-700">
              We offer exclusive deals and discounts for bulk orders, making it more affordable to stock your inventory.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link href="/contact">
            <button className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
              Contact Us for Bulk Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WholeshellRetails;
