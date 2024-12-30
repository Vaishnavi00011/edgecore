import React, { useState, useEffect } from "react";

const EnhancedCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Connecting Talent with Opportunity",
      subheading: "Your gateway to top IT recruiting solutions.",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Empowering Careers in IT",
      subheading: "Let’s build a brighter future together.",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Simplifying Hiring for Organizations",
      subheading: "Streamline your recruitment process with us.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-screen relative"
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.heading}
              </h1>
              <p className="text-lg md:text-2xl">{slide.subheading}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index
                ? "bg-white"
                : "bg-gray-500 hover:bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EnhancedCarousel;
