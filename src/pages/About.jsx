// src/pages/AboutPage.js
import React from 'react';
import HeroSection from '../components/About/Hero';
import History from '../components/About/History';
import VisionMission from '../components/About/VissionMission';
import PrincipalMessage from '../components/About/PrincipalMessage';
import Infrastructure from '../components/About/Infrastructure';


const AboutPage = () => {
  return (
    <div className="about-page ">
      <HeroSection />
      <div className="container mx-auto py-10 px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-10">About Us</h1> */}
        <History />
        <VisionMission />
        <PrincipalMessage />
        <Infrastructure />
      </div>
    </div>
  );
};

export default AboutPage;
