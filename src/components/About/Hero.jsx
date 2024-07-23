// src/components/About/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Springdale Public School</h1>
        <p className="text-lg">Where education meets excellence.</p>
      </div>
    </div>
  );
};

export default HeroSection;
