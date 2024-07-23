// src/components/About/Infrastructure.js
import React from 'react';
import { FaMicroscope, FaLaptopCode, FaBook, FaSwimmer, FaChalkboardTeacher, FaArtstation, FaBus, FaCogs } from 'react-icons/fa'; // Added more icons

const infrastructureItems = [
  {
    title: 'Science and Computer Labs',
    description: 'Our state-of-the-art science and computer labs are equipped with the latest technology to provide hands-on learning experiences and foster scientific inquiry and technical skills.',
    icon: <FaMicroscope className="text-4xl text-green-600" />,
    color: 'bg-green-100'
  },
  {
    title: 'Classrooms',
    description: 'Spacious and well-equipped classrooms offer a conducive learning environment with modern furnishings, interactive whiteboards, and ample natural light.',
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
    color: 'bg-blue-100'
  },
  {
    title: 'Library',
    description: 'Our library boasts a vast collection of books and digital resources, providing students with access to a wide range of learning materials and fostering a love for reading.',
    icon: <FaBook className="text-4xl text-yellow-600" />,
    color: 'bg-yellow-100'
  },
  {
    title: 'Sports Facilities',
    description: 'Includes a playground, gymnasium, and swimming pool to promote physical fitness and recreational activities. Our facilities are designed to support a variety of sports and activities.',
    icon: <FaSwimmer className="text-4xl text-red-600" />,
    color: 'bg-red-100'
  },
  {
    title: 'Art Studio',
    description: 'A creative space equipped with materials for various art forms, including painting, sculpture, and digital arts, fostering artistic expression and creativity.',
    icon: <FaArtstation className="text-4xl text-purple-600" />,
    color: 'bg-purple-100'
  },
  {
    title: 'Science Labs',
    description: 'Advanced science labs for conducting experiments in biology, chemistry, and physics, encouraging hands-on learning and scientific discovery.',
    icon: <FaChalkboardTeacher className="text-4xl text-teal-600" />,
    color: 'bg-teal-100'
  },
  {
    title: 'Transportation',
    description: 'Reliable school buses and transportation services ensuring safe and convenient travel for students to and from school.',
    icon: <FaBus className="text-4xl text-orange-600" />,
    color: 'bg-orange-100'
  },
  {
    title: 'Maintenance Facilities',
    description: 'Dedicated facilities for maintaining and repairing school infrastructure and equipment, ensuring everything is in top condition.',
    icon: <FaCogs className="text-4xl text-gray-600" />,
    color: 'bg-gray-100'
  }
];

const Infrastructure = () => {
  return (
    <div className="infrastructure p-6 bg-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Infrastructure and Facilities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {infrastructureItems.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${item.color} flex items-start`}
          >
            <div className="mr-4">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infrastructure;
