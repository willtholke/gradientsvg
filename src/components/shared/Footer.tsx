import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-3 flex-shrink-0">
      <div className="max-w-[1460px] mx-auto px-6 flex justify-between items-center border-t pt-3">
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <img 
            src="/ccheart_text_gray_500.svg" 
            alt="Creative Commons Heart" 
            width={12} 
            height={12}
            className={"-mr-1"}
          />
          Made in San Francisco, California.
        </div>
        <a 
          href="https://github.com/willtholke/gradientsvg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="GitHub Repository"
        >
          <Github size={24} />
        </a>
      </div>
    </footer>
  );
}
