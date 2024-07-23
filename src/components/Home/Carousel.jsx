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
        interval={2000}
        className="carousel z-20"
      >
        <div>
          <img className='max-h-[700px]' src="https://media.istockphoto.com/id/466335022/photo/space-hopper-challenge.webp?b=1&s=170667a&w=0&k=20&c=_lvYehFmtbuccznb6XMhyvWVaeCgcK3BivokDOoJH1c=" alt="Event 1" />
          <div className="bg-white w-fit font-semibold text-sm md:text-xl absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded translate-y-[-20px]">
            Annual Sports Day - Celebrating Excellence in Sports
          </div>
        </div>
        <div>
          <img className='max-h-[700px]' src="https://media.istockphoto.com/id/1901753288/photo/secondary-or-high-school-students-studying-wind-turbines-in-science-class-with-teacher.webp?b=1&s=170667a&w=0&k=20&c=48qFbaQSdlyuXVV8iQvuPCShAkxGT0fi-dx2hGkrGu8=" alt="Event 2" />
          <div className="bg-white w-fit font-semibold text-sm md:text-xl absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded translate-y-[-20px]">
            Science Exhibition - Showcasing Student Innovations
          </div>
        </div>
        <div>
          <img  className='max-h-[700px]' src="https://media.istockphoto.com/id/1357248261/photo/crowd-of-people-dancing-in-a-concert.webp?b=1&s=170667a&w=0&k=20&c=SiO5dLJA8Gh7Wymv2Vsp_fdjgbrvxqdnQzCP3ZDHK60=" alt="Event 3" />
          <div className="bg-white w-fit font-semibold text-sm md:text-xl absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded translate-y-[-20px]">
            Cultural Fest - Embracing Diversity and Creativity
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SchoolCarousel;
