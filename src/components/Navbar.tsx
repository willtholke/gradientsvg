import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full h-16 mt-2">
      <div className="flex items-center justify-between max-w-[1460px] mx-auto px-6 h-full">
        <Link href="/" className="text-[24px] font-semibold text-black hover:opacity-80 transition-opacity leading-none relative">
          <span className="inline-block transform">
            GradientSVG
          </span>
        </Link>
        <div className="flex gap-8">
          <Link href="/create" className="text-[20px] hover:opacity-80 transition-opacity">
            create
          </Link>
          <Link href="/gallery" className="text-[20px] hover:opacity-80 transition-opacity">
            gallery
          </Link>
          <Link href="/about" className="text-[20px] hover:opacity-80 transition-opacity">
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}