import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const slides = [
    {
      image: 'https://indecrafts.com/cdn/shop/files/WhatsApp_Image_2024-01-02_at_18.27.00_14ce0335_1524x.jpg?v=1704200483',
    },
    {
      image: 'https://indecrafts.com/cdn/shop/files/IMG-20231213-WA0034_1524x.jpg?v=1702619890',

    },
    {
      image: 'https://indecrafts.com/cdn/shop/files/CAKE_STANDS_1524x.jpg?v=1696945778',

    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt="image"
            className="object-cover w-full h-full"
          />

        </div>
      ))}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-2 focus:outline-none ${index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;