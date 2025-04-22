import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaGlobeAmericas } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
          <div className="flex items-center">
            <FaGlobeAmericas className="h-8 w-8" />
            <FaBriefcase className="h-6 w-6 -ml-2 mt-4" />
          </div>
          <span className="text-xl font-bold">International Jobs Portal</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Browse Jobs
              </Link>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 font-medium"
                onClick={(e) => e.preventDefault()}
              >
                Resources
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;