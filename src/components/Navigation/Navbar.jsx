import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-white p-4 shadow-md h-[10vh] flex justify-center items-center">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-black text-2xl font-bold">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LGwkLaGeY6-5wk8LcJnXApdy1LXUyqFQjw&s" alt="" className='h-[60px]'/>
        </Link>
        <ul className="flex flex-wrap items-center space-x-6">
          {['/', '/about', '/academics', '/admissions', '/faculty', '/students', '/gallery', '/contact'].map((path) => (
            <li key={path}>
              <Link
                to={path}
                className={`text-lg font-semibold transition duration-300 ${activeLink === path ? 'text-[#ff2020] border-b-2 border-[#ff2020]' : 'text-black hover:text-[#ff2020]'}`}
                onClick={() => handleClick(path)}
              >
                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2).replace('/', '')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
