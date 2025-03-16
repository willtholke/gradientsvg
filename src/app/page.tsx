import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col bg-white min-h-0 h-screen">
      <Navbar />
      <main className="flex items-center justify-center px-6 py-4">
        <div 
          className="max-w-[1415px] w-full h-[550px] mx-auto rounded-3xl overflow-hidden px-8 text-center flex flex-col items-center justify-center"
          style={{
            backgroundImage: 'radial-gradient(49% 81% at 45% 47%, #E3D7D745 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #D1D9D9FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #9FE2EBFF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #B7B9BEFF 0%, #F8F5F5FF 99%)'
          }}
        >
          <h1 className="text-2xl mb-4 max-w-2xl mx-auto text-gray-900">
            Generate beautiful, <em>infinitely scalable</em> gradient SVGs for your personal brand and visual identity.
          </h1>
          
          <Button asChild>
            <Link href="/create">Create</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
