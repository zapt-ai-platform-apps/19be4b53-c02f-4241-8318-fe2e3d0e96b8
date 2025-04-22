import React from 'react';
import { FaGlobeAmericas, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaGlobeAmericas className="h-6 w-6" />
              <span className="text-lg font-bold">International Jobs Portal</span>
            </div>
            <p className="text-gray-300">
              Connecting talented professionals with global opportunities across borders.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Europe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Asia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">North America</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Australia</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; {currentYear} International Jobs Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;