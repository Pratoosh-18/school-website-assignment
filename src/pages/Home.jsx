// src/pages/HomePage.js
import React from "react";
import { FaFlask, FaMusic, FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import SchoolCarousel from "../components/Home/Carousel";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="bg-gradient-to-r from-red-100 to-red-200 py-10 text-center text-black rounded-b-lg shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            Welcome to Springdale Public School
          </h1>
          <p className="text-base md:text-2xl text-gray-700">
            A place for excellence in education
          </p>
        </div>
      </header>

      {/* Carousel component */}
      <SchoolCarousel />

      <section className="mt-10 introduction py-12 px-6 bg-red-50 text-center rounded-lg shadow-md">
        {/* <h2 className="text-2xl md:text-5xl font-bold text-gray-800">
          Introduction
        </h2> */}
        <p className="text-base md:text-2xl mt-4 w-[90%] md:w-[80%] mx-auto leading-relaxed font-semibold text-gray-800">
          Welcome to Springdale Public School, a place where we are dedicated to
          nurturing young minds and fostering a love for learning. Our
          commitment to excellence in education and holistic development ensures
          that every student is well-prepared for a bright and successful
          future. Join us in our journey to create leaders of tomorrow.
        </p>
      </section>

      <section className="upcoming-events py-10 px-4">
  <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
    Upcoming Events
  </h2>
  <div className="pt-5 flex flex-wrap justify-center gap-8 overflow-x-auto pb-5">
    <div className="event-card w-full md:w-[45%] bg-green-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:text-black hover:shadow-xl">
      <div className="flex gap-4">
        <FaFlask className="text-4xl mb-4 text-green-800" />
        <h3 className="text-2xl font-bold mb-2 text-green-800">
          Science Fair
        </h3>
      </div>
      <p className="text-green-700 mb-4">
        Join us for our annual Science Fair on August 15th. Explore innovative projects by our students.
      </p>
      <p className="text-black">
        <strong className="">Date:</strong> August 15, 2024
        <br />
        <strong className="">Days Left:</strong> 23 days
      </p>
    </div>
    <div className="event-card w-full md:w-[45%] bg-yellow-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:text-black hover:shadow-xl">
      <div className="flex gap-4">
        <FaMusic className="text-4xl mb-4 text-yellow-800" />
        <h3 className="text-2xl font-bold mb-2 text-yellow-800">
          Cultural Festival
        </h3>
      </div>
      <p className="text-yellow-700 mb-4">
        Experience the vibrant Cultural Festival on September 10th with performances and exhibitions.
      </p>
      <p className="text-black">
        <strong className="">Date:</strong> September 10, 2024
        <br />
        <strong className="">Days Left:</strong> 59 days
      </p>
    </div>
    <div className="event-card w-full md:w-[45%] bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:text-black hover:shadow-xl">
      <div className="flex gap-4">
        <FaChalkboardTeacher className="text-4xl mb-4 text-blue-800" />
        <h3 className="text-2xl font-bold mb-2 text-blue-800">
          Parent-Teacher Meeting
        </h3>
      </div>
      <p className="text-blue-700 mb-4">
        Our next Parent-Teacher Meeting will be held on October 5th. We look forward to your participation.
      </p>
      <p className="text-black">
        <strong className="">Date:</strong> October 5, 2024
        <br />
        <strong className="">Days Left:</strong> 88 days
      </p>
    </div>
    <div className="event-card w-full md:w-[45%] bg-pink-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:text-black hover:shadow-xl">
      <div className="flex gap-4">
        <FaFlask className="text-4xl mb-4 text-pink-800" />
        <h3 className="text-2xl font-bold mb-2 text-pink-800">
          Art Exhibition
        </h3>
      </div>
      <p className="text-pink-700 mb-4">
        Celebrate creativity at our Art Exhibition on November 20th, showcasing student artwork.
      </p>
      <p className="text-black">
        <strong className="">Date:</strong> November 20, 2024
        <br />
        <strong className="">Days Left:</strong> 120 days
      </p>
    </div>
    <div className="event-card w-full md:w-[45%] bg-purple-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:text-black hover:shadow-xl">
      <div className="flex gap-4">
        <FaBook className="text-4xl mb-4 text-purple-800" />
        <h3 className="text-2xl font-bold mb-2 text-purple-800">
          Book Fair
        </h3>
      </div>
      <p className="text-purple-700 mb-4">
        Visit our Book Fair on December 5th to find a wide range of books and educational materials.
      </p>
      <p className="text-black">
        <strong className="">Date:</strong> December 5, 2024
        <br />
        <strong className="">Days Left:</strong> 144 days
      </p>
    </div>
  </div>
</section>


      <section className="achievements py-10 px-4 bg-gray-100 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600">
          Our Achievements
        </h2>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <div className="achievement-card bg-green-100 p-6 rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-green-800">
              Top School in Region
            </h3>
            <p className="mt-2 text-gray-700">
              Springdale Public School has been ranked the top school in the
              region for academic excellence.
            </p>
          </div>
          <div className="achievement-card bg-yellow-100 p-6 rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-800">
              100% Graduation Rate
            </h3>
            <p className="mt-2 text-gray-700">
              We are proud to have a 100% graduation rate, with our students
              excelling in various fields.
            </p>
          </div>
          <div className="achievement-card bg-blue-100 p-6 rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800">
              Sports Championships
            </h3>
            <p className="mt-2 text-gray-700">
              Our school has won numerous sports championships, showcasing our
              students' athletic talents.
            </p>
          </div>
          <div className="achievement-card bg-pink-100 p-6 rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-pink-800">
              Community Service Excellence
            </h3>
            <p className="mt-2 text-gray-700">
              Our students have been recognized for outstanding contributions to
              community service and volunteering.
            </p>
          </div>
          <div className="achievement-card bg-purple-100 p-6 rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-purple-800">
              Innovative Science Projects
            </h3>
            <p className="mt-2 text-gray-700">
              We have been awarded for our innovative science projects and
              research in various fields.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
