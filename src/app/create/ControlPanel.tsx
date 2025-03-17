import React from 'react';

interface ControlPanelProps {
  className?: string;
}

export default function ControlPanel({ className }: ControlPanelProps) {
  return (
    <div 
      className={`w-[240px] h-[360px] rounded-md border shadow-sm ${className || ''}`}
    >
      {/* Control panel content will go here */}
    </div>
  );
}
