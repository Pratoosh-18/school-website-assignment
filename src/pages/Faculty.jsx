
import React from 'react';

const facultyMembers = [
    {
        name: 'John Doe',
        title: 'Principal',
        qualifications: 'M.Ed, 20 years of experience in educational administration',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s'
  },
  {
    name: 'Jane Smith',
    title: 'Vice Principal',
    qualifications: 'M.Sc. in Physics, 15 years of teaching experience',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s'
  },
  {
    name: 'Emily Johnson',
    title: 'English Teacher',
    qualifications: 'M.A. in English, 10 years of teaching experience',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s'
  },
  {
    name: 'Michael Brown',
    title: 'Mathematics Teacher',
    qualifications: 'M.Sc. in Mathematics, 8 years of teaching experience',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s'
  },
  {
    name: 'Sophia Davis',
    title: 'Science Teacher',
    qualifications: 'M.Sc. in Chemistry, 12 years of teaching experience',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s'
  },
  {
    name: 'David Wilson',
    title: 'Computer Science Teacher',
    qualifications: 'B.Tech in Computer Science, 5 years of teaching experience',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s'
  }
];

const FacultyPage = () => {
  return (
    <div className="faculty-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Faculty</h2>
        <div className="space-y-10">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } bg-white rounded-lg shadow-lg`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover m-6"
              />
              <div className={`md:w-2/3 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'} text-center md:text-left`}>
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-lg">{member.title}</p>
                <p className="text-lg">{member.qualifications}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
