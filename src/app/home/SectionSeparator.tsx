import React from 'react';

interface SectionSeparatorProps {
  className?: string;
}

const SectionSeparator = ({ 
  className = ""
}: SectionSeparatorProps) => {
  return (
    <div className={`border-t border-gray-100 w-full mt-[100px] ${className}`} />
  );
};

export default SectionSeparator;
