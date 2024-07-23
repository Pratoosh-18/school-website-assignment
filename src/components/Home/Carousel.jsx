import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const SchoolCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="carousel"
      >
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Event 1" />
          <div className="text-sm md:text-base w-full absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded translate-y-[-10px]">
            Annual Sports Day - Celebrating Excellence in Sports
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Event 2" />
          <div className="text-sm md:text-base w-full absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded translate-y-[-10px]">
            Science Exhibition - Showcasing Student Innovations
          </div>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Event 3" />
          <div className="text-sm md:text-base w-full absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded translate-y-[-10px]">
            Cultural Fest - Embracing Diversity and Creativity
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SchoolCarousel;
