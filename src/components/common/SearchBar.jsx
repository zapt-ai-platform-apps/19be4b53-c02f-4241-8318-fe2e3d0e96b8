import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="search-input pl-10"
        placeholder="Search for job titles, companies, or keywords..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;