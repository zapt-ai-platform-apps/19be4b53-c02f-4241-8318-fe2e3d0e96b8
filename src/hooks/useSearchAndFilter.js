import { useState, useEffect, useMemo } from 'react';
import jobsData from '../data/jobsData';

const useSearchAndFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    region: 'All Regions',
    jobType: 'All Types',
    experienceLevel: 'All Levels'
  });
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data from an API
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = useMemo(() => {
    // First apply search term filtering
    let results = jobsData.filter(job => {
      const searchLower = searchTerm.toLowerCase();
      return (
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        job.location.toLowerCase().includes(searchLower) ||
        job.shortDescription.toLowerCase().includes(searchLower)
      );
    });
    
    // Then apply filters
    if (filters.region !== 'All Regions') {
      results = results.filter(job => job.region === filters.region);
    }
    
    if (filters.jobType !== 'All Types') {
      results = results.filter(job => job.jobType === filters.jobType);
    }
    
    if (filters.experienceLevel !== 'All Levels') {
      results = results.filter(job => job.experienceLevel === filters.experienceLevel);
    }
    
    return results;
  }, [searchTerm, filters]);
  
  // Sort jobs to show featured jobs first
  const sortedJobs = useMemo(() => {
    return [...filteredJobs].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filteredJobs]);

  return {
    jobs: sortedJobs,
    isLoading,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    totalJobs: jobsData.length,
    filteredCount: sortedJobs.length
  };
};

export default useSearchAndFilter;