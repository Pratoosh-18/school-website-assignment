import React from 'react';
import facultyMembers from '../constants/facultyMembers';

const FacultyPage = () => {
  return (
    <div className="faculty-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-red-500">Our Faculty</h2>
        <div className="space-y-10">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${member.color} rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-6 md:p-8 mb-10`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover m-6 border-4 border-gray-300 transform transition-transform duration-300 hover:scale-110"
              />
              <div className={`md:w-2/3 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'} text-center md:text-left`}>
                <h3 className="text-2xl font-semibold text-red-400 mb-2">{member.name}</h3>
                <p className="text-lg font-medium text-gray-700 mb-2">{member.title}</p>
                <p className="text-lg text-gray-600 mb-2">{member.qualifications}</p>
                <p className="text-lg font-semibold text-gray-800">{member.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
