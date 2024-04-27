'use client';
import React from 'react';
import Button from "@/app/components/Button";
import useRoutes from '@/app/hooks/useRoutes';

const HomePage = () => {
  const routes = useRoutes();

  return(
    <div className="min-h-screen bg-radial-gradient py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800/50 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white/20 shadow-lg sm:rounded-3xl sm:p-20">
        <h1 className="text-2xl font-semibold text-neutral-100 font-inter">Welcome to the Homepage!</h1>
      </div>
    </div>
  </div>
  );
};

export default HomePage;
