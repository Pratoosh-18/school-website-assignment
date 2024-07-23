// src/components/About/VisionMission.js
import React from 'react';

const VisionMission = () => {
  return (
    <div className="vision-mission w-full p-6 bg-light-gray">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Vision & Mission</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Vision Section */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">Vision</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>To create a learning environment that fosters academic excellence.</li>
            <li>To encourage critical thinking and innovation.</li>
            <li>To instill ethical values and a sense of responsibility.</li>
          </ul>
        </div>
        
        {/* Mission Section */}
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>To empower students with the knowledge and skills needed for success.</li>
            <li>To support personal growth and development through diverse programs.</li>
            <li>To foster a sense of community and global awareness.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
