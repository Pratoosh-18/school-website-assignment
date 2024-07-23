import React from 'react';
import AdmissionForm from '../components/Admission/AdmissionForm';
import { AdmissionFormProvider } from '../context/AdmissionFormContext';


const AdmissionsPage = () => {
  return (
    <AdmissionFormProvider>
      <div className="admissions-page bg-gray-100 text-gray-800 py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-red-500">Admissions</h2>
          
          <AdmissionForm />

          <div className="process mb-10 p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-3xl font-semibold mb-4 text-red-400">Admission Process</h3>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
              <li>Download the admission form from our website or collect it from the school office.</li>
              <li>Complete the form with accurate details and attach the required documents.</li>
              <li>Submit the filled form and documents at the school office or via email.</li>
              <li>Wait for a confirmation email regarding the admission status.</li>
              <li>Attend the entrance test if applicable, and follow up with the school office for further instructions.</li>
            </ol>
          </div>

          <div className="criteria mb-10 p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
            <h3 className="text-3xl font-semibold mb-4 text-red-400">Admission Criteria</h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              <li>Applicants must have completed the previous grade with satisfactory grades.</li>
              <li>Entrance tests may be required for specific grades to assess academic readiness.</li>
              <li>Preference may be given to siblings of current students and children of school staff.</li>
              <li>All required documents must be submitted with the admission form.</li>
              <li>Admission is subject to availability of seats in the respective grade.</li>
            </ul>
          </div>

          <div className="important-dates grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="date-card p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Admission Form Availability</h3>
              <p className="text-lg text-gray-700">March 1st</p>
              <p className="mt-2 text-gray-500">Forms are available for download from our website and at the school office.</p>
            </div>

            <div className="date-card p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Last Date for Submission</h3>
              <p className="text-lg text-gray-700">March 31st</p>
              <p className="mt-2 text-gray-500">Ensure all forms and documents are submitted by this date to be considered.</p>
            </div>

            <div className="date-card p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Entrance Test</h3>
              <p className="text-lg text-gray-700">April 15th</p>
              <p className="mt-2 text-gray-500">Test will be conducted for grades where applicable. Check for specific time and location details.</p>
            </div>

            <div className="date-card p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Announcement of Results</h3>
              <p className="text-lg text-gray-700">April 30th</p>
              <p className="mt-2 text-gray-500">Results will be announced on our website and communicated via email to all applicants.</p>
            </div>

            <div className="date-card p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Orientation Day</h3>
              <p className="text-lg text-gray-700">May 15th</p>
              <p className="mt-2 text-gray-500">New students and their families are invited to an orientation session to learn about the school and meet the faculty.</p>
            </div>

            <div className="date-card p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">First Day of School</h3>
              <p className="text-lg text-gray-700">June 1st</p>
              <p className="mt-2 text-gray-500">The academic year begins. Make sure to complete all registration steps prior to this date.</p>
            </div>
          </div>
        </div>
      </div>
    </AdmissionFormProvider>
  );
};

export default AdmissionsPage;
