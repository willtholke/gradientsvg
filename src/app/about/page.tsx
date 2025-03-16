import React from 'react';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-24">
        <h1 className="text-2xl">About Page</h1>
      </main>
    </div>
  );
}
