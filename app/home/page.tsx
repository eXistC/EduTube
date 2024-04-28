'use client';
import React from 'react';
import Button from "@/app/components/Button";
import useRoutes from '@/app/hooks/useRoutes';
import searchbar from '../components/PagesComponents/searchbar';
import SearchBar from '../components/PagesComponents/searchbar';

const HomePage = () => {
  const routes = useRoutes();

  return(
    <div className="min-h-screen bg-radial-gradient py-6 flex flex-col justify-center sm:py-12">
      <h1 className="text-3xl font-bold font-inter text-center text-white mb-4">What are you interested to learn?</h1>
      <SearchBar />
    
  </div>
  );
};

export default HomePage;
