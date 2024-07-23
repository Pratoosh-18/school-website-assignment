import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./SchoolCarousel.css";

const SchoolCarousel = () => {
  return (
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
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Event 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Event 3" />
      </div>
    </Carousel>
  );
};

export default SchoolCarousel;
