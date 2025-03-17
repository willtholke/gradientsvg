import React from 'react';

interface GradientPreviewProps {
  backgroundImage?: string;
  backgroundPosition?: string;
}

// TODO: Add this component
export default function GradientPreview({ 
  backgroundImage = 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #D2854BFF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #CBF7D7FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #DFB3C0FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #E8BC45FF 0%, #FF0000FF 100%)',
  backgroundPosition = '0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px'
}: GradientPreviewProps) {
  return (
    <div className="flex items-center justify-center">
      <div 
        className="w-[640px] h-[360px] rounded-md shadow-sm gradient-preview" 
        style={{
          backgroundPosition,
          backgroundImage
        }}
      />
    </div>
  );
}