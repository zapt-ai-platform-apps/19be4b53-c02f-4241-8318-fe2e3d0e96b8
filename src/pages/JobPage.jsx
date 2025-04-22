import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign, FaBuilding, FaSuitcase, FaFileAlt } from 'react-icons/fa';
import jobsData from '../data/jobsData';

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call to fetch job details
    setLoading(true);
    setTimeout(() => {
      try {
        const foundJob = jobsData.find(j => j.id === id);
        if (foundJob) {
          setJob(foundJob);
          setLoading(false);
        } else {
          setError('Job not found');
          setLoading(false);
        }
      } catch (err) {
        setError('Failed to load job details');
        setLoading(false);
      }
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
        <div className="flex mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-md mr-4"></div>
          <div className="space-y-2 flex-1">
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">{error}</h2>
        <p className="text-gray-600 mb-6">We couldn't find the job you're looking for.</p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </Link>
      </div>
    );
  }

  if (!job) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <FaArrowLeft className="mr-2" /> Back to Job Listings
      </Link>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
        <div className="flex items-center">
          <img 
            src={job.companyLogo} 
            alt={`${job.company} logo`} 
            className="w-16 h-16 object-contain mr-4"
          />
          <div>
            <div className="text-xl text-gray-700">{job.company}</div>
            <div className="flex items-center text-gray-600 flex-wrap gap-y-2">
              <FaMapMarkerAlt className="mr-1 text-gray-400" />
              <span>{job.location}</span>
              <span className="mx-2">•</span>
              <FaBriefcase className="mr-1 text-gray-400" />
              <span>{job.jobType}</span>
              <span className="mx-2">•</span>
              <FaClock className="mr-1 text-gray-400" />
              <span>{job.experienceLevel}</span>
              <span className="mx-2">•</span>
              <FaDollarSign className="mr-1 text-gray-400" />
              <span>{job.salary}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        {job.tags.map(tag => (
          <span key={tag} className="job-badge mr-2">{tag}</span>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Application Process</h3>
            <p className="text-gray-700">{job.applicationProcess}</p>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-semibold mb-4">Job Overview</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaBuilding className="mt-1 mr-3 text-blue-600" />
                <div>
                  <div className="font-medium">Company</div>
                  <div className="text-gray-600">{job.company}</div>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-600" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-gray-600">{job.location}</div>
                </div>
              </li>
              <li className="flex items-start">
                <FaSuitcase className="mt-1 mr-3 text-blue-600" />
                <div>
                  <div className="font-medium">Job Type</div>
                  <div className="text-gray-600">{job.jobType}</div>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 text-blue-600" />
                <div>
                  <div className="font-medium">Experience</div>
                  <div className="text-gray-600">{job.experienceLevel}</div>
                </div>
              </li>
              <li className="flex items-start">
                <FaDollarSign className="mt-1 mr-3 text-blue-600" />
                <div>
                  <div className="font-medium">Salary Range</div>
                  <div className="text-gray-600">{job.salary}</div>
                </div>
              </li>
            </ul>
          </div>
          
          <button className="btn-primary w-full mb-4 cursor-pointer">
            Apply for Job
          </button>
          
          <button className="btn-outline w-full cursor-pointer flex items-center justify-center">
            <FaFileAlt className="mr-2" /> Save for Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;