import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const CorporateAndBuilding = () => {
    return (
        <div className="py-16 px-6 md:px-12 bg-gray-100">
            {/* Container */}
            <div className="max-w-7xl mx-auto text-center space-y-8">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                    Premium Cleaning Solutions for Corporate &amp; Building Facilities
                </h1>

                {/* Main Content */}
                <p className="text-lg text-gray-800 mb-6 leading-relaxed max-w-3xl mx-auto">
                    At Bhagwati Durga Enterprises, we offer eco-friendly cleaning chemicals tailored for corporate offices, shopping malls, hospitals, and other commercial buildings. Keep your environment clean and hygienic with our sustainable and effective solutions.
                </p>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 relative overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="https://img.freepik.com/premium-photo/business-meeting-working-room-office-building_105762-1736.jpg"
                                alt="Corporate Office"
                                fill
                                className="object-cover rounded-t-xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 mt-6">Tailored for Your Needs</h3>
                        <p className="text-gray-700">
                            Customized cleaning solutions designed to meet the unique needs of your facility, ensuring efficiency and cleanliness in every corner.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 relative overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="https://media.istockphoto.com/id/93495322/photo/shopping-hall-motion-blur.jpg?s=612x612&w=0&k=20&c=F6X-vxObX6j4b2exAw9LyPFMzm_ftVXhJtw7-Uhwsv0="
                                alt="Shopping Mall"
                                fill
                                className="object-cover rounded-t-xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 mt-6">Eco-Friendly Products</h3>
                        <p className="text-gray-700">
                            Our products are not only powerful but also environmentally friendly, ensuring a clean space without harming the planet.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 relative overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="https://t3.ftcdn.net/jpg/02/96/74/64/360_F_296746476_F0wDElEXSb0Rd1tyDnsCBLVBHGAsJm3O.jpg"
                                alt="Hospital"
                                fill
                                className="object-cover rounded-t-xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 mt-6">Comprehensive Coverage</h3>
                        <p className="text-gray-700">
                            Whether it&apos;s a corporate office, shopping mall, or healthcare facility, we have the perfect solution to meet your cleaning requirements.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8">
                    <Link href="/contact" legacyBehavior>
                        <a className="inline-block px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-700 transition duration-300 transform hover:scale-105">
                            Get a Free Consultation
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CorporateAndBuilding;