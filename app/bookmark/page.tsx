'use client';
import React, { useState, useEffect } from 'react';
import useRoutes from '@/app/hooks/useRoutes';
import VideoList from '../components/PagesComponents/videolist';

const BookMarkPage = () => {
  const routes = useRoutes();
  const [bookmarkResults, setBookmarkResults] = useState<any[]>([]);

  useEffect(() => {
    // Fetch bookmarks from the server when the component mounts
    fetch('/api/bookmarks')
      .then(response => response.json())
      .then(data => setBookmarkResults(data));
  }, []);

  return(
    <div className="min-h-screen bg-radial-gradient flex flex-col justify-center sm:py-12">
      <h1 className="text-4xl font-bold font-inter text-center text-white mb-16 whitespace-normal">Your Bookmark</h1>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-80 pt-16">
        <VideoList data={bookmarkResults} title="BOOKMARKS">
          <div className="bg-grey-100"></div>
        </VideoList> 
      </div>
    </div>
  );
};

export default BookMarkPage;

