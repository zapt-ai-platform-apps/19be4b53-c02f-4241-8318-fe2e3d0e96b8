import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign } from 'react-icons/fa';

const JobCard = ({ job }) => {
  return (
    <div className="job-card p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <img 
            src={job.companyLogo} 
            alt={`${job.company} logo`} 
            className="w-12 h-12 object-contain mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>
        <span className={`badge ${job.featured ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
          {job.featured ? 'Featured' : 'New'}
        </span>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2 text-gray-400" />
          <span className="location-badge">{job.location}</span>
          <span className="mx-2">•</span>
          <FaBriefcase className="mr-2 text-gray-400" />
          <span className="type-badge">{job.jobType}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <FaClock className="mr-2 text-gray-400" />
          <span>{job.experienceLevel}</span>
          <span className="mx-2">•</span>
          <FaDollarSign className="mr-2 text-gray-400" />
          <span className="salary-badge">{job.salary}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-gray-600 line-clamp-2">{job.shortDescription}</p>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="space-x-2">
          {job.tags.map(tag => (
            <span key={tag} className="job-badge">{tag}</span>
          ))}
        </div>
        
        <Link 
          to={`/job/${job.id}`} 
          className="btn-outline cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;