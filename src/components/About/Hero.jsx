import React from 'react';
import { FaSchool, FaStar, FaGraduationCap } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div 
      className="hero-section bg-cover bg-center w-full h-52 md:h-96 flex items-center justify-center text-white mt-16 md:mt-24" 
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    >
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 rounded-lg flex flex-col items-center text-center space-y-4">
        <FaSchool className="w-16 h-16 md:w-24 md:h-24 text-white" />
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-white">
          🌟 Welcome to Springdale Public School 🌟
        </h1>
        <p className="md:text-lg text-center text-black font-semibold">
          Where education meets excellence. <FaGraduationCap className="inline text-yellow-400 text-xl" />✨
        </p>
        <div className='flex items-center justify-center gap-2'>
          Our Rating:
          <FaStar className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
          <FaStar className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
          <FaStar className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
          <FaStar className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
          <FaStar className="w-5 h-5 md:w-8 md:h-8 text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
