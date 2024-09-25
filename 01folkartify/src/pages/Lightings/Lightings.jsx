import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lightings = () => {
  const [lightings, setLightings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Lightings')
      .then((response) => response.json())
      .then((data) => setLightings(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8 text-purple-600">
        Shop the Lighting Accessories by FolkArtify Online
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lightings.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="w-full h-85 mb-4 overflow-hidden rounded-lg shadow-lg">
              <Link to={`/product/Lightings/${item.id}`}>
                <img
                  src={item.poster}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </Link>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">by {item.by}</p>
              <p className="text-xl font-bold text-purple-600">${item.price}</p>
              <Link 
                to={`/product/Lightings/${item.id}`} 
                className="mt-4 bg-purple-500 text-white px-4 py-2 rounded inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lightings;
