import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-50 bg-white p-4 shadow-md h-[10vh] flex justify-center items-center">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-black text-2xl font-bold flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LGwkLaGeY6-5wk8LcJnXApdy1LXUyqFQjw&s" alt="Logo" className="h-[60px]" />
        </Link>
        <div className="z-50 lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          className={`flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 absolute lg:static bg-white w-full lg:w-auto left-0 lg:left-auto transition-all duration-300 ease-in-out ${
            menuOpen ? 'top-[10vh] opacity-100 z-40' : 'top-[-100vh] lg:opacity-100 opacity-0'
          }`}
        >
          {['/', '/about', '/academics', '/admissions', '/faculty', '/students', '/gallery', '/contact'].map((path) => (
            <li key={path} className="text-center lg:text-left">
              <Link
                to={path}
                className={`block py-2 lg:py-0 text-lg font-semibold transition duration-300 ${
                  activeLink === path ? 'text-[#ff2020] border-b-2 border-[#ff2020]' : 'text-black hover:text-[#ff2020]'
                }`}
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
};

export default Navbar;
