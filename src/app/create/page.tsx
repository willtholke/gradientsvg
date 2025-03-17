"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import GradientPreview from './GradientPreview';
import ControlPanel from './ControlPanel';
import { generateGradient, GradientResult } from '@/lib/gradientGenerator';

export default function CreatePage() {
  const [gradient, setGradient] = useState<GradientResult>({ 
    backgroundImage: '',
    backgroundPosition: ''
  });

  useEffect(() => {
    // Use the mock generator from lib
    // TODO: Use the real generator
    const initialGradient = generateGradient();
    setGradient(initialGradient);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center pt-8 mt-4">
        <div className="max-w-[1460px] w-full px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8">

            <div className="w-full md:w-[640px]">
              <GradientPreview 
                backgroundImage={gradient.backgroundImage} 
                backgroundPosition={gradient.backgroundPosition} 
              />
            </div>

            <div className="w-full md:w-[320px]">
              <ControlPanel className="w-full h-full" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
