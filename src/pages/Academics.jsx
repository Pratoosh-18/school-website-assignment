// src/pages/AcademicsPage.js
import React from 'react';

const AcademicsPage = () => {
  return (
    <div className="academics-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Academics</h2>

        <div className="curriculum mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Curriculum</h3>
          <div className="mb-6">
            <h4 className="text-2xl font-semibold">Primary (Grades 1-5)</h4>
            <p className="text-lg">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          </div>
          <div className="mb-6">
            <h4 className="text-2xl font-semibold">Secondary (Grades 6-10)</h4>
            <p className="text-lg">
              English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Senior Secondary (Grades 11-12)</h4>
            <div className="ml-4">
              <h5 className="text-xl font-semibold">Science Stream</h5>
              <p className="text-lg">Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
            </div>
            <div className="ml-4">
              <h5 className="text-xl font-semibold">Commerce Stream</h5>
              <p className="text-lg">Accountancy, Business Studies, Economics, Mathematics, English</p>
            </div>
          </div>
        </div>

        <div className="methodologies mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Teaching Methodologies</h3>
          <p className="text-lg">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </div>

        <div className="resources p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Educational Resources</h3>
          <p className="text-lg">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
