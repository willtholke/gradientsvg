import React from 'react';
import Navbar from '@/components/shared/Navbar';

export default function CreatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center pt-2">
        <h1 className="text-2xl">add GradientPreview and ControlPanel</h1>
      </main>
    </div>
  );
}
