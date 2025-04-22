import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  const regions = [
    "All Regions", "Europe", "North America", "South America", 
    "Asia", "Africa", "Australia", "Middle East"
  ];
  
  const jobTypes = [
    "All Types", "Full-time", "Part-time", "Contract", "Remote", "Internship"
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      <h3 className="font-semibold text-lg">Filter Jobs</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Region
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.region}
          onChange={(e) => onFilterChange({ ...filters, region: e.target.value })}
        >
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Job Type
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.jobType}
          onChange={(e) => onFilterChange({ ...filters, jobType: e.target.value })}
        >
          {jobTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Experience Level
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.experienceLevel}
          onChange={(e) => onFilterChange({ ...filters, experienceLevel: e.target.value })}
        >
          <option value="All Levels">All Levels</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
          <option value="Executive">Executive</option>
        </select>
      </div>
      
      <div className="pt-2">
        <button 
          className="btn-primary w-full"
          onClick={() => onFilterChange({
            region: "All Regions",
            jobType: "All Types",
            experienceLevel: "All Levels"
          })}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;