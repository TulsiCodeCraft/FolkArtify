import React from 'react';
import { motion } from 'framer-motion';

const Card1 = ({ image }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4"
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        damping: 20
      }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-md bg-white max-h-80 p-10">
        <img src={image} alt="Product" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
        <button className="absolute bottom-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
          View Products
        </button>
      </div>
    </motion.div>
  );
};

const CardContainer = () => {
  const cards = [
    { image: 'https://images.pexels.com/photos/713661/pexels-photo-713661.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { image: 'https://images.pexels.com/photos/6739702/pexels-photo-6739702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { image: 'https://images.pexels.com/photos/6707632/pexels-photo-6707632.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore the Artify
      </motion.h2>
      <div className="flex flex-wrap -mx-4">
        {cards.map((card, index) => (
          <Card1 key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;