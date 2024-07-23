// src/components/About/PrincipalMessage.js
import React from 'react';

const PrincipalMessage = () => {
  return (
    <div className="principal-message w-full p-6 bg-light-gray flex items-center">
      {/* Principal Image */}
      <div className="flex-shrink-0 w-1/3 mr-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRgdq_ATvBI0Hqys9emLPx9Y0VQstgPoc7Q&s" // Replace with the path to your image
          alt="Principal"
          className="w-full h-auto rounded-full shadow-lg"
        />
      </div>

      {/* Principal Message */}
      <div className="w-2/3">
        <h2 className="text-3xl font-semibold mb-10 mt-10 text-red-400">Principal's Message</h2>
        <p className="text-lg mb-10">
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our commitment to excellence is reflected in the personalized attention and support we offer to each student, ensuring they are well-prepared for their future endeavors.
        </p>
      </div>
    </div>
  );
};

export default PrincipalMessage;
