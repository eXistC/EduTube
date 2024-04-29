'use client';
import React from 'react';
import useRoutes from '@/app/hooks/useRoutes';
import SearchBar from '../components/PagesComponents/searchbar';

const HomePage = () => {
  const routes = useRoutes();

  return(
    
    <div className="min-h-screen bg-radial-gradient flex flex-col justify-center sm:py-12">
      <h1 className="text-4xl font-bold font-inter text-center text-white mb-8 -mt-32 whitespace-normal">What would you like to learn today?</h1>
      <SearchBar />
    
  </div>
  );
};

export default HomePage;
