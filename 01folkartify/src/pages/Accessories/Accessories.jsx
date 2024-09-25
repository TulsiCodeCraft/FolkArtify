import React, { useEffect, useState } from 'react';

const Accessories= () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    // Fetching data from JSON Server
    fetch('http://localhost:8000/Accessories')
      .then((response) => response.json())
      .then((data) => setAccessories(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8 text-purple-600">Shop the Accessories of FolkArtify Online</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accessories.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            {/* Card with only image */}
            <div className="w-full h-85 mb-4 overflow-hidden rounded-lg shadow-lg">
              <img 
                src={item.poster} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            
            {/* Content Section outside the card */}
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">by {item.by}</p>
              <p className="text-xl font-bold text-purple-600">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;