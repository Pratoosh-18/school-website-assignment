// src/components/About/VisionMission.js
import React from 'react';

const VisionMission = () => {
  return (
    <div className="vision-mission mb-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Vision & Mission</h2>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">Vision</h3>
        <p className="text-lg">
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Mission</h3>
        <p className="text-lg">
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
