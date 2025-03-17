"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import AnimatedCTAText from '@/app/home/AnimatedCTAText';
import SectionSeparator from '@/app/home/SectionSeparator';
import GradientGallerySection from '@/app/home/GradientGallerySection';
import UseCasesSection from '@/app/home/UseCasesSection';
import PricingSection from '@/app/home/PricingSection';

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  
  // TODO: Remove hardcoded gradients here, add hardcoded gradients elsewhere
  const gradients = [
    {
      id: "gradient-1",
      gradient: "radial-gradient(49% 81% at 45% 47%, #E3D7D745 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #D1D9D9FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #9FE2EBFF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #B7B9BEFF 0%, #F8F5F5FF 99%)",
    },
    {
      id: "gradient-2",
      gradient: "radial-gradient(49% 81% at 45% 47%, #E3D7D745 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #E1D9C9FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #9FD2EBFF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #B7B9BEFF 0%, #F8F5F5FF 99%)",
    },
    {
      id: "gradient-3",
      gradient: "radial-gradient(49% 81% at 45% 47%, #FFFFFF45 0%, #00000000 100%), radial-gradient(113% 91% at 17% -2%, #E8E8E8FF 1%, #00000000 99%), radial-gradient(142% 91% at 83% 7%, #D1D1D1FF 1%, #00000000 99%), radial-gradient(142% 91% at 111% 84%, #A9A9A9FF 0%, #F5F5F5FF 99%)",
    },
    {
      id: "gradient-4",
      gradient: "radial-gradient(49% 81% at 45% 47%, #FFE8D745 0%, #FF5E0000 100%), radial-gradient(113% 91% at 17% -2%, #FFC8A1FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFAD7DFF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF9A5EFF 0%, #FFF5F0FF 99%)",
    },
    {
      id: "gradient-5",
      gradient: "radial-gradient(49% 81% at 45% 47%, #D7F8E345 0%, #00FF8C00 100%), radial-gradient(113% 91% at 17% -2%, #A1FFD3FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #7DFFB5FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #5EFFA0FF 0%, #F0FFF5FF 99%)",
    },
  ];
  
  // Show button after AnimatedCTAText animation is complete by using a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-auto">
      <Navbar />
      <main className="flex-1 flex flex-col pt-16 pb-0">
        <div className="max-w-[1460px] mx-auto px-6 w-full">
          <div 
            className="max-w-[1415px] w-full h-[650px] mx-auto mt-[2px] rounded-3xl overflow-hidden px-8 text-center flex flex-col items-center justify-center"
            style={{
            backgroundImage: 'radial-gradient(49% 81% at 45% 47%, #E3D7D745 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #D1D9D9FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #9FE2EBFF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #B7B9BEFF 0%, #F8F5F5FF 99%)'
          }}
        >
          <AnimatedCTAText />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button asChild variant="outline" className="gap-2">
              <Link href="/create">Start creating <ArrowUpRight className="h-4 w-4" /></Link>
            </Button>
          </motion.div>
          </div>

          <SectionSeparator />
          <GradientGallerySection items={gradients} />
          
          <SectionSeparator />
          <UseCasesSection />
          
          <SectionSeparator />
          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
