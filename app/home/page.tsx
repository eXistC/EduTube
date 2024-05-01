'use client';
import React, { useState } from 'react';
import useRoutes from '@/app/hooks/useRoutes';
import SearchBar from '../components/PagesComponents/searchbar';
import VideoList from '../components/PagesComponents/videolist';

const HomePage = () => {
  const routes = useRoutes();
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (results: any[]) => {
    setSearchResults(results);
  };

  return(
    
    <div className="min-h-screen bg-radial-gradient flex flex-col justify-center sm:py-12">
      <h1 className="text-4xl font-bold font-inter text-center text-white mb-16 -mt-64 whitespace-normal">What would you like to learn today?</h1>
      <SearchBar onSearch = {handleSearch}/>
      <div className= "px-80 pt-16">
      <VideoList data={searchResults} title="SEARCH RESULTS">
        <div className="bg-grey-100"></div>
      </VideoList> 
      </div>
    </div>
  );
};

export default HomePage;
