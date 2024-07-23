// src/pages/StudentsPage.js
import React from 'react';

const StudentsPage = () => {
  return (
    <div className="students-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Students</h2>

        <div className="life-at-school mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Life at Springdale</h3>
          <div className="mb-6">
            <h4 className="text-2xl font-semibold">Extracurricular Activities</h4>
            <p className="text-lg">Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Clubs and Societies</h4>
            <p className="text-lg">Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
          </div>
        </div>

        <div className="achievements mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Achievements</h3>
          <ul className="list-disc list-inside text-lg">
            <li>John Smith - National Level Math Olympiad Winner</li>
            <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
            <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
          </ul>
        </div>

        <div className="student-council p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Student Council</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-2xl font-semibold">President</h4>
              <p className="text-lg">Amy Parker, Grade 12</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Vice President</h4>
              <p className="text-lg">Rajiv Mehta, Grade 11</p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Secretary</h4>
              <p className="text-lg">Lisa Wong, Grade 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
