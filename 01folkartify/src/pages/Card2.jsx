import React from 'react';
import { motion } from 'framer-motion';

const Card2 = ({ image, price, artist }) => {
  return (
    <motion.div 
      className="w-full sm:w-2/5 md:w-1/3 p-10"
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
    >
      <div className="flex flex-col max-h-80">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-2 flex-grow">
          <img src={image} alt={`Artwork by ${artist}`} className="w-full h-64 object-cover" />
        </div>
        <div className="text-center mt-auto">
          <p className="text-lg font-bold">Rs. {price}</p>
          <p className="text-sm text-gray-600">By {artist}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  const products = [
    { image: 'https://images.pexels.com/photos/6315702/pexels-photo-6315702.jpeg?auto=compress&cs=tinysrgb&w=600', price: '1500', artist: 'John Pandey' },
    { image: 'https://indecrafts.com/cdn/shop/files/LN419_720x.jpg?v=1699012239', price: '2000', artist: 'Neha Jain' },
    { image: 'https://indecrafts.com/cdn/shop/products/CS106_1_720x.jpg?v=1625330527', price: '1800', artist: 'Vignya Gaud' },
    { image: 'https://indecrafts.com/cdn/shop/products/CN153_720x.jpg?v=1654607192', price: '2200', artist: 'Sushmita sen' },
    { image: 'https://indecrafts.com/cdn/shop/products/VS126_720x.jpg?v=1625145150', price: '1900', artist: 'David Jain' },
    { image: 'https://indecrafts.com/cdn/shop/products/WD107_720x.jpg?v=1625390655', price: '2100', artist: 'Tanmay Gupta' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Best Sellers Products
      </motion.h2>
      <div className="flex flex-wrap justify-center -mx-4">
        {products.map((product, index) => (
          <Card2 key={index} {...product} />
        ))}
      </div>
      <motion.button
        className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-md mx-auto block"
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "#7c3aed",
        }}
        transition={{ duration: 0.2 }}
      >
        View All Products
      </motion.button>
    </div>
  );
};

export default ProductGrid;