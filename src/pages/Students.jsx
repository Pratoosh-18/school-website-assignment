// src/pages/StudentsPage.js
import React from 'react';
import { FaMusic, FaPaintBrush, FaRobot, FaTrophy, FaStar, FaBook, FaCalendarDay, FaLeaf, FaCode, FaGlobe, FaSpaceShuttle } from 'react-icons/fa';
import {  FaSwimmer, FaUserTie, FaUserShield, FaUserEdit } from 'react-icons/fa';

const StudentsPage = () => {
  return (
    <div className="students-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Students</h2>

        <div className="life-at-school mb-10 p-6 bg-white rounded-lg">
      <h3 className="text-3xl font-semibold mb-4">Life at Springdale</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Extracurricular Activities Cards */}
        <div className="card mb-6 p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold mb-2">Extracurricular Activities</h4>
          <ul className="text-lg space-y-1">
            <li className="flex items-center"><FaMusic className="mr-2 text-blue-500" /> Music</li>
            <li className="flex items-center"><FaPaintBrush className="mr-2 text-red-500" /> Art</li>
            <li className="flex items-center"><FaRobot className="mr-2 text-green-500" /> Robotics</li>
            <li className="flex items-center"><FaStar className="mr-2 text-yellow-500" /> Drama</li>
            <li className="flex items-center"><FaTrophy className="mr-2 text-orange-500" /> Sports</li>
            <li className="flex items-center"><FaBook className="mr-2 text-purple-500" /> Debate Club</li>
            <li className="flex items-center"><FaCalendarDay className="mr-2 text-teal-500" /> Science Club</li>
          </ul>
        </div>

        {/* Clubs and Societies Cards */}
        <div className="card mb-6 p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold mb-2">Clubs and Societies</h4>
          <ul className="text-lg space-y-1">
            <li className="flex items-center"><FaLeaf className="mr-2 text-green-600" /> Environmental Club</li>
            <li className="flex items-center"><FaGlobe className="mr-2 text-blue-600" /> Astronomy Club</li>
            <li className="flex items-center"><FaCode className="mr-2 text-gray-600" /> Coding Club</li>
            <li className="flex items-center"><FaBook className="mr-2 text-red-600" /> Literary Society</li>
          </ul>
        </div>

        {/* Upcoming Events Cards */}
        <div className="card mb-6 p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold mb-2">Upcoming Events</h4>
          <ul className="text-lg space-y-1">
            <li className="flex items-center"><FaCalendarDay className="mr-2 text-blue-500" /> Science Fair - September 15</li>
            <li className="flex items-center"><FaCalendarDay className="mr-2 text-orange-500" /> Annual Sports Meet - October 20</li>
            <li className="flex items-center"><FaCalendarDay className="mr-2 text-purple-500" /> Music Concert - November 10</li>
            <li className="flex items-center"><FaCalendarDay className="mr-2 text-teal-500" /> Art Exhibition - December 5</li>
          </ul>
        </div>

        {/* Student Achievements Cards */}
        <div className="card mb-6 p-4 bg-gray-100 rounded-lg transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold mb-2">Student Achievements</h4>
          <ul className="text-lg space-y-1">
            <li className="flex items-center"><FaStar className="mr-2 text-yellow-500" /> Math Olympiad Winner</li>
            <li className="flex items-center"><FaStar className="mr-2 text-red-500" /> Regional Debate Champion</li>
            <li className="flex items-center"><FaStar className="mr-2 text-green-500" /> Science Quiz Master</li>
            <li className="flex items-center"><FaStar className="mr-2 text-blue-500" /> Art Contest First Place</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="achievements-and-council mb-10 p-6 bg-white rounded-lg">
      {/* Achievements Section */}
      <div className="achievements mb-10 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-3xl font-semibold mb-4 flex items-center">
          <FaTrophy className="mr-3 text-yellow-600" /> Achievements
        </h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li className="flex items-center">
            <FaTrophy className="mr-2 text-yellow-600" /> John Smith - National Level Math Olympiad Winner
          </li>
          <li className="flex items-center">
            <FaSwimmer className="mr-2 text-blue-600" /> Sarah Lee - Gold Medalist in State Swimming Championship
          </li>
          <li className="flex items-center">
            <FaRobot className="mr-2 text-gray-600" /> Tech Innovators Club - Winners of Inter-School Robotics Competition
          </li>
        </ul>
      </div>

      {/* Student Council Section */}
      <div className="student-council p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-3xl font-semibold mb-4 flex items-center">
          <FaUserTie className="mr-3 text-purple-600" /> Student Council
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold mb-2 flex items-center">
              <FaUserTie className="mr-2 text-blue-500" /> President
            </h4>
            <p className="text-lg">Amy Parker, Grade 12</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold mb-2 flex items-center">
              <FaUserShield className="mr-2 text-green-500" /> Vice President
            </h4>
            <p className="text-lg">Rajiv Mehta, Grade 11</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold mb-2 flex items-center">
              <FaUserEdit className="mr-2 text-red-500" /> Secretary
            </h4>
            <p className="text-lg">Lisa Wong, Grade 10</p>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default StudentsPage;
