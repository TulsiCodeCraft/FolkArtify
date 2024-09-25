import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeaturedCollections = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const collections = [
        { id: 1, image: 'https://indecrafts.com/cdn/shop/files/FRN-TB498_720x.jpg?v=1705146511', price: 'Rs 1000', person: 'Jay Mishra' },
        { id: 2, image: 'https://tse1.mm.bing.net/th?id=OIP.aTE7b-z-9pfCbNUnNMO1TgAAAA&pid=Api&P=0&h=180', price: 'Rs 1500', person: 'Jane Smith' },
        { id: 3, image: 'https://indecrafts.com/cdn/shop/products/FRN-ST136_720x.jpg?v=1639551772', price: 'Rs 2000', person: 'Aliza shah' },
        { id: 4, image: 'https://indecrafts.com/cdn/shop/products/ST106_720x.jpg?v=1624978313', price: 'Rs 1800', person: 'Babu shah' },
        { id: 5, image: 'https://indecrafts.com/cdn/shop/products/CB104_1024x.jpg?v=1629195192', price: 'Rs 2200', person: 'Eva Brown' },
        { id: 6, image: 'https://indecrafts.com/cdn/shop/products/BS301_720x.jpg?v=1654601292', price: 'Rs 1900', person: 'Mital gaud' },
        { id: 7, image: 'https://indecrafts.com/cdn/shop/products/CS108_00a4a2ce-3ce8-4246-b758-5e9c5a0739a4_720x.jpg?v=1625331408', price: 'Rs 2500', person: 'Sarah Wilson' },
    ];

    const cardsToShow = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === collections.length - cardsToShow ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? collections.length - cardsToShow : prevIndex - 1
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl  mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-950 text-transparent bg-clip-text">Some Featured Collections</h2>
            <div className="relative">
                <div className="overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
                        transition={{ duration: 0.5 }}
                    >
                        {collections.map((collection) => (
                            <motion.div
                                key={collection.id}
                                className="w-1/3 px-4 flex-shrink-0"
                            >
                                <div className="mb-4">
                                    <div className="bg-white rounded-lg shadow-md overflow-hidden group relative h-96">
                                        <img
                                            src={collection.image}
                                            alt={`Collection ${collection.id}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <motion.div
                                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            <p className="text-white text-lg font-semibold">View Collection</p>
                                        </motion.div>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <p className="text-xl font-semibold">{collection.price}</p>
                                        <p className="text-gray-600">{collection.person}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default FeaturedCollections;