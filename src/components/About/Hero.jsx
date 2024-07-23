import React from 'react';
import { FaSchool, FaStar, FaGraduationCap } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div 
      className="hero-section bg-cover bg-center w-full h-52 md:h-96 flex items-center justify-center text-white mt-16 md:mt-24" 
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg flex flex-col items-center text-center space-y-4">
        <FaSchool className="w-16 h-16 md:w-24 md:h-24 text-yellow-400" />
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-yellow-400">
          🌸 Welcome to Springdale Public School 🌸
        </h1>
        <p className="md:text-lg text-center text-blue-300">
          Where education meets excellence. <FaGraduationCap className="inline text-yellow-300 text-xl" />✨
        </p>
        <div className='flex items-center justify-center gap-2'>
          Our Rating:
          <FaStar className="w-4 h-4 md:w-10 md:h-10 text-yellow-400" />
          <FaStar className="w-4 h-4 md:w-10 md:h-10 text-yellow-400" />
          <FaStar className="w-4 h-4 md:w-10 md:h-10 text-yellow-400" />
          <FaStar className="w-4 h-4 md:w-10 md:h-10 text-yellow-400" />
          <FaStar className="w-4 h-4 md:w-10 md:h-10 text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
