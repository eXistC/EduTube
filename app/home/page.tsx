'use client';
import React from 'react';
import useRoutes from '@/app/hooks/useRoutes';
import SearchBar from '../components/PagesComponents/searchbar';
import VideoList from '../components/PagesComponents/videolist';
import useVideoList from '../hooks/useVideoList';

const HomePage = () => {
  const routes = useRoutes();
  const { data: videos = [''] } = useVideoList();

  return(
    
    <div className="min-h-screen bg-radial-gradient flex flex-col justify-center sm:py-12">
      <h1 className="text-4xl font-bold font-inter text-center text-white mb-16 -mt-64 whitespace-normal">What would you like to learn today?</h1>
      <SearchBar />
      <div className= "pb-40">
        <VideoList title="SEARCH RESULTS" data={videos}/>
      </div>
    </div>
  );
};

export default HomePage;