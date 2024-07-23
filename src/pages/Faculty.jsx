import React from 'react';

const facultyMembers = [
  {
    name: 'John Doe',
    title: 'Principal',
    qualifications: 'M.Ed, 20 years of experience in educational administration',
    achievements: 'Implemented a successful school-wide initiative that improved student performance by 15%.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s',
    color: 'bg-red-100'
  },
  {
    name: 'Jane Smith',
    title: 'Vice Principal',
    qualifications: 'M.Sc. in Physics, 15 years of teaching experience',
    achievements: 'Developed a mentorship program that has helped over 100 students excel academically.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s',
    color: 'bg-blue-100'
  },
  {
    name: 'Emily Johnson',
    title: 'English Teacher',
    qualifications: 'M.A. in English, 10 years of teaching experience',
    achievements: 'Authored a bestselling book on modern literature and led a national literary workshop.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s',
    color: 'bg-green-100'
  },
  {
    name: 'Michael Brown',
    title: 'Mathematics Teacher',
    qualifications: 'M.Sc. in Mathematics, 8 years of teaching experience',
    achievements: 'Guided students to win several regional math competitions and created an award-winning math curriculum.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s',
    color: 'bg-yellow-100'
  },
  {
    name: 'Sophia Davis',
    title: 'Science Teacher',
    qualifications: 'M.Sc. in Chemistry, 12 years of teaching experience',
    achievements: 'Conducted groundbreaking research that contributed to new environmental policies and received a national teaching award.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s',
    color: 'bg-purple-100'
  },
  {
    name: 'David Wilson',
    title: 'Computer Science Teacher',
    qualifications: 'B.Tech in Computer Science, 5 years of teaching experience',
    achievements: 'Developed a popular coding curriculum and led students to win several tech competitions.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT4j0rYFB330FtMhZ67WNjVQe3vUJzqu4tw&s',
    color: 'bg-orange-100'
  },
];

const FacultyPage = () => {
  return (
    <div className="faculty-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-red-500">Our Faculty</h2>
        <div className="space-y-10">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${member.color} rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
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
