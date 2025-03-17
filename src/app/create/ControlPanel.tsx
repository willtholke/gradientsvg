"use client";

import React from 'react';

interface ControlPanelProps {
  className?: string;
}

export default function ControlPanel({ className }: ControlPanelProps) {
  return (
    <div 
      className={`rounded-xl border shadow-sm p-6 h-full ${className || ''}`}
    >
      <h2 className="text-xl font-medium mb-4">Settings</h2>
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-500">
            Controls for generating, customizing, and exporting your gradient will be available soon.
            Please check back l8r.
          </p>
        </div>
      </div>
    </div>
  );
}
