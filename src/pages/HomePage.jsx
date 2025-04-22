import React from 'react';
import SearchBar from '../components/common/SearchBar';
import FilterBar from '../components/common/FilterBar';
import JobList from '../components/jobs/JobList';
import useSearchAndFilter from '../hooks/useSearchAndFilter';
import { FaBriefcase, FaGlobeAmericas } from 'react-icons/fa';

const HomePage = () => {
  const { 
    jobs, 
    isLoading, 
    searchTerm, 
    setSearchTerm, 
    filters, 
    setFilters,
    totalJobs,
    filteredCount
  } = useSearchAndFilter();

  return (
    <div>
      <section className="mb-8 bg-blue-600 -mx-4 px-4 py-12 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <FaGlobeAmericas className="h-12 w-12 mr-2" />
            <FaBriefcase className="h-10 w-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream International Career</h1>
          <p className="text-xl mb-6">Discover job opportunities around the world that match your skills and ambitions</p>
          <div className="max-w-xl mx-auto">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>
      </section>
      
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/4">
          <FilterBar filters={filters} onFilterChange={setFilters} />
          
          {!isLoading && (
            <div className="mt-4 bg-white rounded-lg shadow p-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredCount}</span> of <span className="font-semibold">{totalJobs}</span> jobs
              </p>
            </div>
          )}
        </aside>
        
        <div className="md:w-3/4">
          <JobList jobs={jobs} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;