import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6">
        {[1, 2, 3, 4, 5].map(skeleton => (
          <div key={skeleton} className="bg-white rounded-lg shadow-md p-5 animate-pulse">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gray-200 rounded-md mr-4"></div>
              <div className="space-y-2 flex-1">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="space-x-2">
                <span className="inline-block h-6 w-16 bg-gray-200 rounded-full"></span>
                <span className="inline-block h-6 w-16 bg-gray-200 rounded-full"></span>
              </div>
              <div className="h-10 w-28 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No jobs found</h3>
        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;