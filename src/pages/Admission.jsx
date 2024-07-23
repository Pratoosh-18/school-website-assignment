// src/pages/AdmissionsPage.js
import React from 'react';

const AdmissionsPage = () => {
  return (
    <div className="admissions-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Admissions</h2>

        <div className="process mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Admission Process</h3>
          <p className="text-lg">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
        </div>

        <div className="criteria mb-10 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Admission Criteria</h3>
          <p className="text-lg">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </div>

        <div className="important-dates p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Important Dates</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
