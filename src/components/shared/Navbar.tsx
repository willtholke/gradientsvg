"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Palette, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const pathname = usePathname();
  const isCreatePage = pathname === '/create';
  
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="bg-white/70 backdrop-blur-[2px] h-16 w-full flex-shrink-0">
        <div className="flex items-center justify-between h-full max-w-[1460px] mx-auto px-6">
          <Link href="/" className="flex items-center gap-2 text-black hover:opacity-80 transition-opacity leading-none relative">
            <Palette className="h-5 w-5" />
            <span className="inline-block logo-text">
              GradientSVG
            </span>
          </Link>
          <div className="flex gap-8">
            {!isCreatePage && (
              <Link href="/create">
                <Button size="sm" className="cursor-pointer transition-colors">
                  <span className="hidden sm:inline-block">Create</span>
                  <ArrowUpRight className="h-4 w-4 sm:hidden" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
