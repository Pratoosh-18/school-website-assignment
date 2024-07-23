// src/pages/AcademicsPage.js
import React from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptop,
  FaCloud,
} from "react-icons/fa"; // Added icons

const AcademicsPage = () => {
  return (
    <div className="academics-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Academics</h2>

        <div className="curriculum mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Primary Curriculum Card */}
          <div className="p-6 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-4xl text-blue-600 mr-4" />
              <h3 className="text-2xl font-semibold">Primary (Grades 1-5)</h3>
            </div>
            <p className="text-lg">
              English, Mathematics, Science, Social Studies, Art, Physical
              Education
            </p>
          </div>

          {/* Secondary Curriculum Card */}
          <div className="p-6 bg-green-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaChalkboardTeacher className="text-4xl text-green-600 mr-4" />
              <h3 className="text-2xl font-semibold">
                Secondary (Grades 6-10)
              </h3>
            </div>
            <p className="text-lg">
              English, Mathematics, Science (Physics, Chemistry, Biology),
              Social Studies, Computer Science, Physical Education, Art
            </p>
          </div>

          {/* Science Stream Card */}
          <div className="p-6 bg-yellow-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaLaptop className="text-4xl text-yellow-600 mr-4" />
              <h3 className="text-2xl font-semibold">
                Senior Secondary - Science Stream (Grades 11-12)
              </h3>
            </div>
            <p className="text-lg">
              Physics, Chemistry, Biology, Mathematics, Computer Science,
              English
            </p>
          </div>

          {/* Commerce Stream Card */}
          <div className="p-6 bg-red-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCloud className="text-4xl text-red-600 mr-4" />
              <h3 className="text-2xl font-semibold">
                Senior Secondary - Commerce Stream (Grades 11-12)
              </h3>
            </div>
            <p className="text-lg">
              Accountancy, Business Studies, Economics, Mathematics, English
            </p>
          </div>

          {/* Additional Curriculum Card */}
          <div className="p-6 bg-purple-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-4xl text-purple-600 mr-4" />
              <h3 className="text-2xl font-semibold">Additional Electives</h3>
            </div>
            <p className="text-lg">
              Creative Writing, Foreign Languages, Environmental Science
            </p>
          </div>
        </div>

        <div className="methodologies mb-8 p-6 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors duration-300">
          <h3 className="text-3xl font-semibold mb-4 text-red-400">
            Teaching Methodologies
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
            <li>Interactive and participatory teaching methods.</li>
            <li>Use of multimedia and technology to enhance learning.</li>
            <li>
              Project-based learning to apply knowledge in real-world scenarios.
            </li>
            <li>Regular assessments and feedback to track student progress.</li>
            <li>
              Encouraging collaborative learning through group activities.
            </li>
          </ul>
        </div>

        <div className="resources mb-8 p-6 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors duration-300">
          <h3 className="text-3xl font-semibold mb-4 text-red-400">
            Educational Resources
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
            <li>Digital classrooms equipped with interactive boards.</li>
            <li>
              Access to a variety of online educational platforms and tools.
            </li>
            <li>Comprehensive library with physical and digital resources.</li>
            <li>Educational software for personalized learning experiences.</li>
            <li>Regular workshops and seminars to enhance learning.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
